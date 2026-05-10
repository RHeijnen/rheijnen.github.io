import { useState } from "react";
import type { LibraryCategory } from "../types/library";
import { addCategory, updateCategory, deleteCategory } from "../lib/invoke";

const EMOJI_PRESETS = ["🎬","📺","🎮","📚","💻","🎵","📦","🎨","📷","🎭","🏋️","🍿","🎧","📰","🛸","🧩","🎲","🏆","🎪","🎯","🎸","🎹","📡","🔬","🎤","🎼","🎠","🎰","🎳","🧸"];

interface Props {
  categories: LibraryCategory[];
  onChange: (cats: LibraryCategory[]) => void;
  onClose: () => void;
}

export function ManageCategoriesModal({ categories, onChange, onClose }: Props) {
  const [newName, setNewName] = useState("");
  const [newIcon, setNewIcon] = useState("📦");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editIcon, setEditIcon] = useState("");
  const [error, setError] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState<"new" | string | null>(null);

  async function handleAdd() {
    if (!newName.trim()) return;
    try {
      const cat = await addCategory(newName.trim(), newIcon);
      onChange([...categories, cat]);
      setNewName("");
      setNewIcon("📦");
      setError("");
    } catch (e) { setError(String(e)); }
  }

  async function handleUpdate(cat: LibraryCategory) {
    try {
      const updated = await updateCategory({ ...cat, name: editName, icon: editIcon });
      onChange(categories.map(c => c.id === updated.id ? updated : c));
      setEditId(null);
      setError("");
    } catch (e) { setError(String(e)); }
  }

  async function handleDelete(id: string) {
    try {
      await deleteCategory(id);
      onChange(categories.filter(c => c.id !== id));
    } catch (e) { setError(String(e)); }
  }

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal manage-modal">
        <div className="modal-header">
          <h2>Manage Library Types</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {error && <div className="manage-error">{error}</div>}

          {/* Existing */}
          <div className="manage-list">
            {categories.map(cat => (
              <div key={cat.id} className="manage-row">
                {editId === cat.id ? (
                  <>
                    <div className="emoji-picker-wrap">
                      <button className="emoji-btn" onClick={() => setShowEmojiPicker(showEmojiPicker === cat.id ? null : cat.id)}>
                        {editIcon}
                      </button>
                      {showEmojiPicker === cat.id && (
                        <div className="emoji-grid">
                          {EMOJI_PRESETS.map(e => (
                            <button key={e} className="emoji-option" onClick={() => { setEditIcon(e); setShowEmojiPicker(null); }}>{e}</button>
                          ))}
                        </div>
                      )}
                    </div>
                    <input className="field-input manage-input" value={editName}
                      onChange={e => setEditName(e.target.value)}
                      onKeyDown={e => e.key === "Enter" && handleUpdate(cat)}
                      autoFocus
                    />
                    <button className="btn-save-sm" onClick={() => handleUpdate(cat)}>Save</button>
                    <button className="btn-cancel-sm" onClick={() => setEditId(null)}>✕</button>
                  </>
                ) : (
                  <>
                    <span className="manage-icon">{cat.icon}</span>
                    <span className="manage-name">{cat.name}</span>
                    {cat.built_in && <span className="built-in-badge">built-in</span>}
                    <div className="manage-actions">
                      {!cat.built_in && (
                        <>
                          <button className="btn-edit-sm" onClick={() => {
                            setEditId(cat.id); setEditName(cat.name); setEditIcon(cat.icon);
                          }}>Edit</button>
                          <button className="btn-del-sm" onClick={() => handleDelete(cat.id)}>Delete</button>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Add new */}
          <div className="manage-add-row">
            <div className="emoji-picker-wrap">
              <button className="emoji-btn" onClick={() => setShowEmojiPicker(showEmojiPicker === "new" ? null : "new")}>
                {newIcon}
              </button>
              {showEmojiPicker === "new" && (
                <div className="emoji-grid">
                  {EMOJI_PRESETS.map(e => (
                    <button key={e} className="emoji-option" onClick={() => { setNewIcon(e); setShowEmojiPicker(null); }}>{e}</button>
                  ))}
                </div>
              )}
            </div>
            <input className="field-input manage-input" value={newName}
              onChange={e => setNewName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleAdd()}
              placeholder="New library type name…"
            />
            <button className="btn-save-sm" onClick={handleAdd} disabled={!newName.trim()}>Add</button>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-save" onClick={onClose}>Done</button>
        </div>
      </div>
    </div>
  );
}
