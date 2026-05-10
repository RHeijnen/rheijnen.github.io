import { useMemo } from "react";
import type { LibraryItem, SmartView, LibraryCategory, LibraryStatus } from "../types/library";
import { MediaCard } from "./MediaCard";

interface Props {
  view: SmartView;
  items: LibraryItem[];
  categories: LibraryCategory[];
  statuses: LibraryStatus[];
  privacyUnlocked: boolean;
  onEdit: (item: LibraryItem) => void;
  onDelete: (id: string) => void;
  onLaunchRecorded: (id: string) => void;
}

export function SmartViewPanel({ view, items, categories, statuses, privacyUnlocked, onEdit, onDelete, onLaunchRecorded }: Props) {
  const filtered = useMemo(() => {
    const visible = items.filter(i => privacyUnlocked ? true : !i.is_private);
    const kind = view.kind;

    if (kind.type === "recently_added") {
      return [...visible]
        .sort((a, b) => b.added_at.localeCompare(a.added_at))
        .slice(0, kind.limit);
    }
    if (kind.type === "recently_launched") {
      return [...visible]
        .filter(i => i.last_launched_at)
        .sort((a, b) => (b.last_launched_at ?? "").localeCompare(a.last_launched_at ?? ""))
        .slice(0, kind.limit);
    }
    if (kind.type === "top_rated") {
      return [...visible]
        .filter(i => i.rating !== null)
        .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
        .slice(0, kind.limit);
    }
    if (kind.type === "by_status") {
      return visible.filter(i => i.status === kind.status_id);
    }
    if (kind.type === "by_tag") {
      return visible.filter(i => i.tags.includes(kind.tag));
    }
    return visible;
  }, [view, items, privacyUnlocked]);

  return (
    <main className="library-main">
      <div className="library-header">
        <h1 className="library-heading">
          <span style={{ marginRight: 10 }}>{view.icon}</span>{view.name}
        </h1>
        <span className="library-count">{filtered.length} item{filtered.length !== 1 ? "s" : ""}</span>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <p className="empty-text">Nothing here yet.</p>
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
