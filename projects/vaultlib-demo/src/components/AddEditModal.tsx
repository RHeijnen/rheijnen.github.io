import { useState, useEffect } from "react";
import type { LibraryItem, LibraryCategory, LibraryStatus } from "../types/library";
import { getAllTags } from "../types/library";
import { pickImageFile, pickLaunchFile } from "../lib/invoke";

interface Props {
  initial?: LibraryItem | null;
  allItems: LibraryItem[];
  categories: LibraryCategory[];
  statuses: LibraryStatus[];
  onSave: (item: Omit<LibraryItem, "id" | "added_at" | "updated_at"> | LibraryItem) => void;
  onClose: () => void;
}

function emptyItem(categories: LibraryCategory[], statuses: LibraryStatus[]): Omit<LibraryItem, "id" | "added_at" | "updated_at"> {
  return {
    title: "",
    category: categories[0]?.id ?? "other",
    status: statuses[0]?.id ?? "wishlist",
    rating: null,
    cover_path: null,
    cover_url: "",
    launch_path: null,
    tags: [],
    genre: "",
    year: null,
    notes: "",
    is_private: false,
    last_launched_at: null,
  };
}

export function AddEditModal({ initial, allItems, categories, statuses, onSave, onClose }: Props) {
  const [form, setForm] = useState(() => emptyItem(categories, statuses));
  const [tagInput, setTagInput] = useState("");
  const [tagSuggestions, setTagSuggestions] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [coverMode, setCoverMode] = useState<"file" | "url">("file");

  const allTags = getAllTags(allItems);

  useEffect(() => {
    if (initial) {
      setForm({
        title: initial.title,
        category: initial.category,
        status: initial.status,
        rating: initial.rating,
        cover_path: initial.cover_path,
        cover_url: initial.cover_url ?? "",
        launch_path: initial.launch_path,
        tags: [...initial.tags],
        genre: initial.genre ?? "",
        year: initial.year,
        notes: initial.notes ?? "",
        is_private: initial.is_private,
        last_launched_at: initial.last_launched_at,
      });
      setCoverMode(initial.cover_path ? "file" : "url");
    } else {
      setForm(emptyItem(categories, statuses));
    }
  }, [initial, categories, statuses]);

  function set<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm(f => ({ ...f, [k]: v }));
  }

  function handleTagInput(val: string) {
    setTagInput(val);
    if (val.trim()) {
      const q = val.toLowerCase();
      setTagSuggestions(allTags.filter(t => t.toLowerCase().includes(q) && !form.tags.includes(t)).slice(0, 6));
    } else {
      setTagSuggestions([]);
    }
  }

  function addTag(t?: string) {
    const tag = (t ?? tagInput).trim();
    if (tag && !form.tags.includes(tag)) set("tags", [...form.tags, tag]);
    setTagInput("");
    setTagSuggestions([]);
  }

  function removeTag(t: string) { set("tags", form.tags.filter(x => x !== t)); }

  async function handleSave() {
    if (!form.title.trim()) return;
    setSaving(true);
    const payload = {
      ...form,
      title: form.title.trim(),
      genre: form.genre?.trim() || null,
      notes: form.notes?.trim() || null,
      cover_url: form.cover_url?.trim() || null,
      cover_path: coverMode === "file" ? form.cover_path : null,
    };
    if (initial) { onSave({ ...initial, ...payload }); }
    else { onSave(payload); }
    setSaving(false);
  }

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <h2>{initial ? "Edit Item" : "Add to Library"}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <label className="field-label">Title *</label>
          <input className="field-input" value={form.title}
            onChange={e => set("title", e.target.value)}
            placeholder="Enter title…" autoFocus />

          <div className="field-row">
            <div>
              <label className="field-label">Category</label>
              <select className="field-select" value={form.category}
                onChange={e => set("category", e.target.value)}>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.icon} {c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label">Status</label>
              <select className="field-select" value={form.status}
                onChange={e => set("status", e.target.value)}>
                {statuses.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="field-row">
            <div>
              <label className="field-label">Year</label>
              <input className="field-input" type="number" min="1800" max="2100"
                value={form.year ?? ""}
                onChange={e => set("year", e.target.value ? parseInt(e.target.value) : null)}
                placeholder="e.g. 2024" />
            </div>
            <div>
              <label className="field-label">Genre</label>
              <input className="field-input" value={form.genre ?? ""}
                onChange={e => set("genre", e.target.value)}
                placeholder="e.g. Sci-Fi" />
            </div>
          </div>

          <label className="field-label">Rating (0–10)</label>
          <div className="rating-row">
            <input type="range" min="0" max="10" step="0.5"
              value={form.rating ?? 0}
              onChange={e => set("rating", parseFloat(e.target.value))} />
            <span className="rating-val">{form.rating !== null ? form.rating.toFixed(1) : "—"}</span>
            <button className="btn-clear-rating" onClick={() => set("rating", null)}>Clear</button>
          </div>

          {/* Cover art */}
          <label className="field-label">Cover Art</label>
          <div className="cover-tabs">
            <button className={coverMode === "file" ? "tab active" : "tab"} onClick={() => setCoverMode("file")}>Local File</button>
            <button className={coverMode === "url" ? "tab active" : "tab"} onClick={() => setCoverMode("url")}>URL</button>
          </div>
          {coverMode === "file" ? (
            <div className="cover-file-row">
              <span className="cover-path-display" title={form.cover_path ?? ""}>
                {form.cover_path ? form.cover_path.split(/[\\/]/).pop() : "No file selected"}
              </span>
              <button className="btn-pick-file" onClick={async () => { const p = await pickImageFile(); if (p) set("cover_path", p); }}>Browse…</button>
              {form.cover_path && <button className="btn-pick-file danger" onClick={() => set("cover_path", null)}>✕</button>}
            </div>
          ) : (
            <input className="field-input" value={form.cover_url ?? ""}
              onChange={e => set("cover_url", e.target.value)} placeholder="https://…" />
          )}

          {/* Launch path */}
          <label className="field-label">Launch Path <span className="field-label-hint">(exe, shortcut, file…)</span></label>
          <div className="cover-file-row">
            <span className="cover-path-display" title={form.launch_path ?? ""}>
              {form.launch_path ? form.launch_path.split(/[\\/]/).pop() : "Not set"}
            </span>
            <button className="btn-pick-file" onClick={async () => { const p = await pickLaunchFile(); if (p) set("launch_path", p); }}>Browse…</button>
            {form.launch_path && <button className="btn-pick-file danger" onClick={() => set("launch_path", null)}>✕</button>}
          </div>

          {/* Tags with autocomplete */}
          <label className="field-label">Tags</label>
          <div className="tag-input-wrap">
            <div className="tag-input-row">
              <input className="field-input" value={tagInput}
                onChange={e => handleTagInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
                placeholder="Type a tag, press Enter…" />
              <button className="btn-add-tag" onClick={() => addTag()}>Add</button>
            </div>
            {tagSuggestions.length > 0 && (
              <div className="tag-suggestions">
                {tagSuggestions.map(t => (
                  <button key={t} className="tag-suggestion" onClick={() => addTag(t)}>#{t}</button>
                ))}
              </div>
            )}
          </div>
          <div className="tags-list">
            {form.tags.map(t => (
              <span key={t} className="tag removable">
                #{t}<button onClick={() => removeTag(t)}>✕</button>
              </span>
            ))}
          </div>

          {/* Notes */}
          <label className="field-label">Notes</label>
          <textarea className="field-textarea" value={form.notes ?? ""}
            onChange={e => set("notes", e.target.value)}
            placeholder="Personal notes, thoughts, review…"
            rows={4} />

          {/* Privacy */}
          <div className="privacy-toggle-row">
            <div>
              <div className="privacy-toggle-title">🔒 Private</div>
              <div className="privacy-toggle-desc">Hidden behind privacy lock</div>
            </div>
            <button className={`toggle-btn ${form.is_private ? "on" : ""}`}
              onClick={() => set("is_private", !form.is_private)}>
              <span className="toggle-knob" />
            </button>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-save" onClick={handleSave} disabled={!form.title.trim() || saving}>
            {saving ? "Saving…" : initial ? "Save Changes" : "Add to Library"}
          </button>
        </div>
      </div>
    </div>
  );
}
