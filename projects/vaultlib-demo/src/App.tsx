import { useState, useEffect, useCallback } from "react";
import type { LibraryItem, LibraryCategory, LibraryStatus, SmartView } from "./types/library";
import { getLibrary, addItem, updateItem, deleteItem } from "./lib/invoke";
import { Sidebar, type Filters } from "./components/Sidebar";
import { LibraryGrid } from "./components/LibraryGrid";
import { SmartViewPanel } from "./components/SmartViewPanel";
import { AddEditModal } from "./components/AddEditModal";
import { PinModal } from "./components/PinModal";
import { ManageCategoriesModal } from "./components/ManageCategoriesModal";
import { ManageStatusModal } from "./components/ManageStatusModal";

const DEFAULT_FILTERS: Filters = {
  view: { type: "category", id: "all" },
  status: "all",
  search: "",
  sortBy: "added_at",
  sortDir: "desc",
};

// Demo PIN is always "1234"
const DEMO_PIN = "1234";

export default function App() {
  const [items, setItems] = useState<LibraryItem[]>([]);
  const [categories, setCategories] = useState<LibraryCategory[]>([]);
  const [statuses, setStatuses] = useState<LibraryStatus[]>([]);
  const [smartViews, setSmartViews] = useState<SmartView[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const [addEditOpen, setAddEditOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<LibraryItem | null>(null);
  const [pinModal, setPinModal] = useState<"set" | "enter" | null>(null);
  const [manageCatsOpen, setManageCatsOpen] = useState(false);
  const [manageStatusOpen, setManageStatusOpen] = useState(false);
  const [privacyUnlocked, setPrivacyUnlocked] = useState(false);

  // Demo banner
  const [bannerDismissed, setBannerDismissed] = useState(false);
  // Launch toast
  const [launchToast, setLaunchToast] = useState<string | null>(null);

  const load = useCallback(async () => {
    const lib = await getLibrary();
    setItems(lib.items);
    setCategories(lib.categories);
    setStatuses(lib.statuses);
    setSmartViews(lib.smart_views);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    const lock = () => setPrivacyUnlocked(false);
    window.addEventListener("blur", lock);
    return () => window.removeEventListener("blur", lock);
  }, []);

  const counts: Record<string, number> = { all: items.filter(i => privacyUnlocked || !i.is_private).length };
  for (const item of items) {
    if (!item.is_private || privacyUnlocked) {
      counts[item.category] = (counts[item.category] ?? 0) + 1;
    }
  }

  async function handleSave(data: Omit<LibraryItem, "id" | "added_at" | "updated_at"> | LibraryItem) {
    try {
      if ("id" in data && data.id) {
        const updated = await updateItem(data as LibraryItem);
        setItems(prev => prev.map(i => i.id === updated.id ? updated : i));
      } else {
        const created = await addItem(data as Omit<LibraryItem, "id" | "added_at" | "updated_at">);
        setItems(prev => [created, ...prev]);
      }
    } catch (e) { alert("Save failed: " + String(e)); }
    setAddEditOpen(false);
    setEditTarget(null);
  }

  async function handleDelete(id: string) {
    await deleteItem(id);
    setItems(prev => prev.filter(i => i.id !== id));
  }

  function handleLaunchRecorded(id: string) {
    const now = new Date().toISOString();
    const item = items.find(i => i.id === id);
    if (item?.launch_path) {
      setLaunchToast(`▶ Would launch: ${item.launch_path.split(/[\\/]/).pop()}`);
      setTimeout(() => setLaunchToast(null), 3000);
    }
    setItems(prev => prev.map(i => i.id === id ? { ...i, last_launched_at: now } : i));
  }

  function openAdd() { setEditTarget(null); setAddEditOpen(true); }
  function openEdit(item: LibraryItem) { setEditTarget(item); setAddEditOpen(true); }

  function handlePrivacyToggle() {
    if (privacyUnlocked) { setPrivacyUnlocked(false); return; }
    setPinModal("enter");
  }

  function handlePinSuccess(pin: string) {
    if (pin === DEMO_PIN) {
      setPrivacyUnlocked(true);
      setPinModal(null);
    } else {
      alert("Incorrect PIN. (Demo PIN is: 1234)");
    }
  }

  if (loading) return <div className="loading">Loading library…</div>;

  const activeSmartView = filters.view.type === "smart"
    ? smartViews.find(sv => sv.id === filters.view.id)
    : null;

  return (
    <div className="app">
      {/* Demo banner */}
      {!bannerDismissed && (
        <div className="demo-banner">
          <span>
            🎮 <strong>VaultLib Demo</strong> — All data is in-memory and resets on refresh.
            Privacy PIN is <strong>1234</strong>. File picker and local images are disabled.
          </span>
          <button onClick={() => setBannerDismissed(true)}>✕</button>
        </div>
      )}

      {/* Launch toast */}
      {launchToast && (
        <div className="launch-toast">{launchToast}</div>
      )}

      <div className={`app-inner ${bannerDismissed ? "" : "with-banner"}`}>
        <Sidebar
          filters={filters}
          onChange={setFilters}
          categories={categories}
          statuses={statuses}
          smartViews={smartViews}
          counts={counts}
          onAdd={openAdd}
          privacyUnlocked={privacyUnlocked}
          onPrivacyToggle={handlePrivacyToggle}
          onManageCategories={() => setManageCatsOpen(true)}
          onManageStatuses={() => setManageStatusOpen(true)}
        />

        {activeSmartView ? (
          <SmartViewPanel
            view={activeSmartView}
            items={items}
            categories={categories}
            statuses={statuses}
            privacyUnlocked={privacyUnlocked}
            onEdit={openEdit}
            onDelete={handleDelete}
            onLaunchRecorded={handleLaunchRecorded}
          />
        ) : (
          <LibraryGrid
            items={items}
            filters={filters}
            categories={categories}
            statuses={statuses}
            privacyUnlocked={privacyUnlocked}
            onEdit={openEdit}
            onDelete={handleDelete}
            onAdd={openAdd}
            onLaunchRecorded={handleLaunchRecorded}
          />
        )}
      </div>

      {addEditOpen && (
        <AddEditModal
          initial={editTarget}
          allItems={items}
          categories={categories}
          statuses={statuses}
          onSave={handleSave}
          onClose={() => { setAddEditOpen(false); setEditTarget(null); }}
        />
      )}

      {pinModal && (
        <PinModal
          mode="enter"
          onSuccess={handlePinSuccess}
          onClose={() => setPinModal(null)}
        />
      )}

      {manageCatsOpen && (
        <ManageCategoriesModal
          categories={categories}
          onChange={setCategories}
          onClose={() => setManageCatsOpen(false)}
        />
      )}

      {manageStatusOpen && (
        <ManageStatusModal
          statuses={statuses}
          onChange={setStatuses}
          onClose={() => setManageStatusOpen(false)}
        />
      )}
    </div>
  );
}
