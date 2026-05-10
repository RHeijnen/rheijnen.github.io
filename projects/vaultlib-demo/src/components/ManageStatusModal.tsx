import { useState } from "react";
import type { LibraryStatus } from "../types/library";
import { addStatus, updateStatus, deleteStatus } from "../lib/invoke";

const COLOR_PRESETS = [
  "#6b7280","#f59e0b","#10b981","#ef4444","#8b5cf6",
  "#3b82f6","#ec4899","#14b8a6","#f97316","#84cc16",
  "#06b6d4","#a855f7","#e11d48","#0ea5e9","#65a30d",
];

interface Props {
  statuses: LibraryStatus[];
  onChange: (statuses: LibraryStatus[]) => void;
  onClose: () => void;
}

export function ManageStatusModal({ statuses, onChange, onClose }: Props) {
  const [newName, setNewName] = useState("");
  const [newColor, setNewColor] = useState("#6b7280");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editColor, setEditColor] = useState("");
  const [error, setError] = useState("");

  async function handleAdd() {
    if (!newName.trim()) return;
    try {
      const st = await addStatus(newName.trim(), newColor);
      onChange([...statuses, st]);
      setNewName("");
      setNewColor("#6b7280");
      setError("");
    } catch (e) { setError(String(e)); }
  }

  async function handleUpdate(st: LibraryStatus) {
    try {
      const updated = await updateStatus({ ...st, name: editName, color: editColor });
      onChange(statuses.map(s => s.id === updated.id ? updated : s));
      setEditId(null);
      setError("");
    } catch (e) { setError(String(e)); }
  }

  async function handleDelete(id: string) {
    try {
      await deleteStatus(id);
      onChange(statuses.filter(s => s.id !== id));
    } catch (e) { setError(String(e)); }
  }

  function ColorPicker({ value, onChange: onCh }: { value: string; onChange: (c: string) => void }) {
    return (
      <div className="color-picker-row">
        {COLOR_PRESETS.map(c => (
          <button key={c} className={`color-swatch ${value === c ? "selected" : ""}`}
            style={{ background: c }} onClick={() => onCh(c)} />
        ))}
        <input type="color" className="color-custom" value={value}
          onChange={e => onCh(e.target.value)} title="Custom color" />
      </div>
    );
  }

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal manage-modal">
        <div className="modal-header">
          <h2>Manage Statuses</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {error && <div className="manage-error">{error}</div>}

          <div className="manage-list">
            {statuses.map(st => (
              <div key={st.id} className="manage-row status-row">
                {editId === st.id ? (
                  <div className="manage-edit-block">
                    <div className="manage-edit-top">
                      <span className="status-dot-lg" style={{ background: editColor }} />
                      <input className="field-input manage-input" value={editName}
                        onChange={e => setEditName(e.target.value)} autoFocus />
                      <button className="btn-save-sm" onClick={() => handleUpdate(st)}>Save</button>
                      <button className="btn-cancel-sm" onClick={() => setEditId(null)}>✕</button>
                    </div>
                    <ColorPicker value={editColor} onChange={setEditColor} />
                  </div>
                ) : (
                  <>
                    <span className="status-dot-lg" style={{ background: st.color }} />
                    <span className="manage-name">{st.name}</span>
                    {st.built_in && <span className="built-in-badge">built-in</span>}
                    <div className="manage-actions">
                      {!st.built_in && (
                        <>
                          <button className="btn-edit-sm" onClick={() => {
                            setEditId(st.id); setEditName(st.name); setEditColor(st.color);
                          }}>Edit</button>
                          <button className="btn-del-sm" onClick={() => handleDelete(st.id)}>Delete</button>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Add new */}
          <div className="manage-add-block">
            <div className="manage-add-top">
              <span className="status-dot-lg" style={{ background: newColor }} />
              <input className="field-input manage-input" value={newName}
                onChange={e => setNewName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleAdd()}
                placeholder="New status name…"
              />
              <button className="btn-save-sm" onClick={handleAdd} disabled={!newName.trim()}>Add</button>
            </div>
            <ColorPicker value={newColor} onChange={setNewColor} />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-save" onClick={onClose}>Done</button>
        </div>
      </div>
    </div>
  );
}
