import type { LibraryItem, LibraryCategory, LibraryStatus } from "../types/library";
import { MediaCard } from "./MediaCard";
import type { Filters } from "./Sidebar";

interface Props {
  items: LibraryItem[];
  filters: Filters;
  categories: LibraryCategory[];
  statuses: LibraryStatus[];
  privacyUnlocked: boolean;
  onEdit: (item: LibraryItem) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  onLaunchRecorded: (id: string) => void;
}

export function LibraryGrid({ items, filters, categories, statuses, privacyUnlocked, onEdit, onDelete, onAdd, onLaunchRecorded }: Props) {
  const catId = filters.view.type === "category" ? filters.view.id : null;
  const cat = catId && catId !== "all" ? categories.find(c => c.id === catId) : null;

  const filtered = items
    .filter(item => {
      if (item.is_private && !privacyUnlocked) return false;
      if (catId && catId !== "all" && item.category !== catId) return false;
      if (filters.status !== "all" && item.status !== filters.status) return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inTags = item.tags.some(t => t.toLowerCase().includes(q));
        const inGenre = item.genre?.toLowerCase().includes(q);
        const inNotes = item.notes?.toLowerCase().includes(q);
        if (!inTitle && !inTags && !inGenre && !inNotes) return false;
      }
      return true;
    })
    .sort((a, b) => {
      let av: string | number = 0, bv: string | number = 0;
      if (filters.sortBy === "title") { av = a.title.toLowerCase(); bv = b.title.toLowerCase(); }
      if (filters.sortBy === "added_at") { av = a.added_at; bv = b.added_at; }
      if (filters.sortBy === "rating") { av = a.rating ?? -1; bv = b.rating ?? -1; }
      if (filters.sortBy === "year") { av = a.year ?? 0; bv = b.year ?? 0; }
      if (av < bv) return filters.sortDir === "asc" ? -1 : 1;
      if (av > bv) return filters.sortDir === "asc" ? 1 : -1;
      return 0;
    });

  const heading = cat ? `${cat.icon} ${cat.name}` : "All Items";

  return (
    <main className="library-main">
      <div className="library-header">
        <h1 className="library-heading">{heading}</h1>
        <span className="library-count">{filtered.length} item{filtered.length !== 1 ? "s" : ""}</span>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <p className="empty-text">
            {items.length === 0 ? "Your library is empty. Add your first item!" : "No items match your filters."}
          </p>
          {items.length === 0 && (
            <button className="add-btn-large" onClick={onAdd}>＋ Add Item</button>
          )}
        </div>
      ) : (
        <div className="card-grid">
          {filtered.map(item => (
            <MediaCard
              key={item.id}
              item={item}
              categories={categories}
              statuses={statuses}
              privacyUnlocked={privacyUnlocked}
              onEdit={onEdit}
              onDelete={onDelete}
              onLaunchRecorded={onLaunchRecorded}
            />
          ))}
        </div>
      )}
    </main>
  );
}
