import { useState } from "react";
import type { LibraryItem, LibraryCategory, LibraryStatus } from "../types/library";
import { getCategoryById, getStatusById } from "../types/library";
import { launchItem } from "../lib/invoke";

interface Props {
  item: LibraryItem;
  categories: LibraryCategory[];
  statuses: LibraryStatus[];
  privacyUnlocked: boolean;
  onEdit: (item: LibraryItem) => void;
  onDelete: (id: string) => void;
  onLaunchRecorded: (id: string) => void;
}

export function MediaCard({ item, categories, statuses, privacyUnlocked, onEdit, onDelete, onLaunchRecorded }: Props) {
  const [hovered, setHovered] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [launching, setLaunching] = useState(false);
  const [imgError, setImgError] = useState(false);

  const cat = getCategoryById(categories, item.category);
  const status = getStatusById(statuses, item.status);
  const icon = cat?.icon ?? "📦";
  const statusColor = status?.color ?? "#6b7280";
  const statusName = status?.name ?? item.status;

  // Demo: only cover_url is used (no local file reading)
  const coverSrc = (!imgError && item.cover_url) ? item.cover_url : null;

  async function handleLaunch(e: React.MouseEvent) {
    e.stopPropagation();
    if (!item.launch_path) return;
    setLaunching(true);
    try {
      await launchItem(item.id, item.launch_path);
      onLaunchRecorded(item.id);
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => setLaunching(false), 1500);
    }
  }

  return (
    <div
      className="media-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setConfirmDelete(false); }}
      style={{ "--status-color": statusColor } as React.CSSProperties}
    >
      <div className="card-cover">
        {coverSrc ? (
          <img src={coverSrc} alt={item.title} onError={() => setImgError(true)} className="cover-img" />
        ) : (
          <div className="cover-placeholder">
            <span className="placeholder-icon">{icon}</span>
            <span className="placeholder-title">{item.title}</span>
          </div>
        )}

        <div className="status-pill">{statusName}</div>
        {item.rating !== null && (
          <div className="rating-badge">★ {item.rating.toFixed(1)}</div>
        )}

        <div className={`card-overlay ${hovered ? "visible" : ""}`}>
          <div className="overlay-meta">
            <span className="overlay-category">{icon} {cat?.name ?? item.category}</span>
            {item.year && <span className="overlay-year">{item.year}</span>}
            {item.genre && <span className="overlay-genre">{item.genre}</span>}
          </div>

          {item.tags.length > 0 && (
            <div className="overlay-tags">
              {item.tags.slice(0, 4).map(t => (
                <span key={t} className="overlay-tag">#{t}</span>
              ))}
            </div>
          )}

          {item.notes && (
            <p className="overlay-notes">
              {item.notes.slice(0, 100)}{item.notes.length > 100 ? "…" : ""}
            </p>
          )}

          {item.launch_path && (
            <button
              className={`btn-launch ${launching ? "launching" : ""}`}
              onClick={handleLaunch}
              disabled={launching}
            >
              {launching ? "Launching…" : "▶ Launch"}
            </button>
          )}

          <div className="overlay-actions">
            <button className="btn-edit" onClick={e => { e.stopPropagation(); onEdit(item); }}>Edit</button>
            {!confirmDelete ? (
              <button className="btn-delete" onClick={e => { e.stopPropagation(); setConfirmDelete(true); }}>Delete</button>
            ) : (
              <button className="btn-delete confirm" onClick={e => { e.stopPropagation(); onDelete(item.id); }}>Confirm?</button>
            )}
          </div>
        </div>
      </div>

      <div className="card-footer">
        <span className="card-title" title={item.title}>{item.title}</span>
        {item.tags.length > 0 && (
          <div className="card-tags">
            {item.tags.slice(0, 2).map(t => <span key={t} className="tag">#{t}</span>)}
          </div>
        )}
        {item.launch_path && (
          <div className="launch-indicator">▶ Launchable</div>
        )}
      </div>
    </div>
  );
}
