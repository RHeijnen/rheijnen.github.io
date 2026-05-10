import type { LibraryCategory, LibraryStatus, SmartView } from "../types/library";

export interface Filters {
  view: { type: "category"; id: string } | { type: "smart"; id: string };
  status: string | "all";
  search: string;
  sortBy: "title" | "added_at" | "rating" | "year";
  sortDir: "asc" | "desc";
}

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
  categories: LibraryCategory[];
  statuses: LibraryStatus[];
  smartViews: SmartView[];
  counts: Record<string, number>;
  onAdd: () => void;
  privacyUnlocked: boolean;
  onPrivacyToggle: () => void;
  onManageCategories: () => void;
  onManageStatuses: () => void;
}

export function Sidebar({
  filters, onChange, categories, statuses, smartViews,
  counts, onAdd, privacyUnlocked, onPrivacyToggle,
  onManageCategories, onManageStatuses,
}: Props) {
  const activeView = filters.view;

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-icon">🗄️</span>
        <span className="brand-name">VaultLib</span>
      </div>

      <button className="add-btn" onClick={onAdd}>
        <span>＋</span> Add Item
      </button>

      <div className="sidebar-section">
        <input
          className="search-input"
          type="text"
          placeholder="Search titles, tags, notes…"
          value={filters.search}
          onChange={e => onChange({ ...filters, search: e.target.value })}
        />
      </div>

      {/* Smart / overview views */}
      {smartViews.length > 0 && (
        <div className="sidebar-section">
          <div className="section-label">OVERVIEW</div>
          {smartViews.map(sv => (
            <button key={sv.id}
              className={`filter-item ${activeView.type === "smart" && activeView.id === sv.id ? "active" : ""}`}
              onClick={() => onChange({ ...filters, view: { type: "smart", id: sv.id } })}
            >
              <span>{sv.icon}</span>
              <span>{sv.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Library categories */}
      <div className="sidebar-section">
        <div className="section-label">LIBRARY</div>
        <button
          className={`filter-item ${activeView.type === "category" && activeView.id === "all" ? "active" : ""}`}
          onClick={() => onChange({ ...filters, view: { type: "category", id: "all" } })}
        >
          <span>🏠</span><span>All</span>
          <span className="count">{counts["all"] ?? 0}</span>
        </button>
        {categories.map(cat => (
          <button key={cat.id}
            className={`filter-item ${activeView.type === "category" && activeView.id === cat.id ? "active" : ""}`}
            onClick={() => onChange({ ...filters, view: { type: "category", id: cat.id } })}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
            <span className="count">{counts[cat.id] ?? 0}</span>
          </button>
        ))}
        <button className="manage-link" onClick={onManageCategories}>⚙ Manage types</button>
      </div>

      {/* Status filter */}
      <div className="sidebar-section">
        <div className="section-label">STATUS</div>
        <button
          className={`filter-item ${filters.status === "all" ? "active" : ""}`}
          onClick={() => onChange({ ...filters, status: "all" })}
        >
          <span className="status-dot" style={{ background: "#6b7280" }} />
          <span>All</span>
        </button>
        {statuses.map(s => (
          <button key={s.id}
            className={`filter-item ${filters.status === s.id ? "active" : ""}`}
            onClick={() => onChange({ ...filters, status: s.id })}
          >
            <span className="status-dot" style={{ background: s.color }} />
            <span>{s.name}</span>
          </button>
        ))}
        <button className="manage-link" onClick={onManageStatuses}>⚙ Manage statuses</button>
      </div>

      {/* Sort */}
      <div className="sidebar-section">
        <div className="section-label">SORT BY</div>
        <select className="sort-select" value={filters.sortBy}
          onChange={e => onChange({ ...filters, sortBy: e.target.value as Filters["sortBy"] })}>
          <option value="added_at">Date Added</option>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
          <option value="year">Year</option>
        </select>
        <button className="sort-dir-btn"
          onClick={() => onChange({ ...filters, sortDir: filters.sortDir === "asc" ? "desc" : "asc" })}>
          {filters.sortDir === "asc" ? "↑ Ascending" : "↓ Descending"}
        </button>
      </div>

      <div className="sidebar-spacer" />
      <button
        className={`privacy-lock-btn ${privacyUnlocked ? "unlocked" : "locked"}`}
        onClick={onPrivacyToggle}
      >
        <span>{privacyUnlocked ? "🔓" : "🔒"}</span>
        <span>{privacyUnlocked ? "Privacy Off" : "Privacy On"}</span>
      </button>
    </aside>
  );
}
