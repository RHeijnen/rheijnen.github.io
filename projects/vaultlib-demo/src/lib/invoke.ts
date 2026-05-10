/**
 * DEMO MOCK — replaces Tauri IPC with in-memory data.
 * No Rust, no file system, no native calls.
 * All changes live in memory and reset on page refresh.
 */

import type { Library, LibraryItem, LibraryCategory, LibraryStatus, SmartView } from "../types/library";
import { v4 as uuidv4 } from "uuid";

// ── Mock data ─────────────────────────────────────────────────────────────────

const MOCK_CATEGORIES: LibraryCategory[] = [
  { id: "movie",  name: "Movies",   icon: "🎬", built_in: true },
  { id: "tv_show",name: "TV Shows", icon: "📺", built_in: true },
  { id: "game",   name: "Games",    icon: "🎮", built_in: true },
  { id: "book",   name: "Books",    icon: "📚", built_in: true },
  { id: "app",    name: "Apps",     icon: "💻", built_in: true },
  { id: "music",  name: "Music",    icon: "🎵", built_in: true },
  { id: "anime",  name: "Anime",    icon: "🎌", built_in: false },
  { id: "other",  name: "Other",    icon: "📦", built_in: true },
];

const MOCK_STATUSES: LibraryStatus[] = [
  { id: "wishlist",    name: "Wishlist",     color: "#6b7280", built_in: true },
  { id: "in_progress", name: "In Progress",  color: "#f59e0b", built_in: true },
  { id: "completed",   name: "Completed",    color: "#10b981", built_in: true },
  { id: "dropped",     name: "Dropped",      color: "#ef4444", built_in: true },
  { id: "on_hold",     name: "On Hold",      color: "#8b5cf6", built_in: true },
  { id: "replaying",   name: "Replaying",    color: "#3b82f6", built_in: false },
];

const MOCK_SMART_VIEWS: SmartView[] = [
  { id: "recent_additions",  name: "Recently Added",    icon: "🆕", kind: { type: "recently_added",    limit: 20 } },
  { id: "recently_launched", name: "Recently Launched", icon: "🚀", kind: { type: "recently_launched", limit: 20 } },
  { id: "top_rated",         name: "Top Rated",         icon: "⭐", kind: { type: "top_rated",         limit: 20 } },
];

function d(daysAgo: number) {
  const dt = new Date();
  dt.setDate(dt.getDate() - daysAgo);
  return dt.toISOString();
}

const MOCK_ITEMS: LibraryItem[] = [
  {
    id: "1", title: "Elden Ring", category: "game", status: "completed",
    rating: 9.5, cover_url: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
    cover_path: null, launch_path: "C:\\Games\\EldenRing\\eldenring.exe",
    tags: ["soulslike", "open-world", "fantasy"], genre: "Action RPG", year: 2022,
    notes: "Masterpiece. The open world exploration feels genuinely rewarding.",
    is_private: false, added_at: d(60), updated_at: d(10), last_launched_at: d(2),
  },
  {
    id: "2", title: "Hollow Knight", category: "game", status: "completed",
    rating: 9.8, cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8b/Hollow_Knight_cover.jpg",
    cover_path: null, launch_path: null,
    tags: ["metroidvania", "indie", "difficult", "platformer"], genre: "Metroidvania", year: 2017,
    notes: "Incredible atmosphere. Silksong when?",
    is_private: false, added_at: d(120), updated_at: d(120), last_launched_at: d(30),
  },
  {
    id: "3", title: "Dune", category: "book", status: "completed",
    rating: 9.0, cover_url: "https://upload.wikimedia.org/wikipedia/en/d/d6/Dune-Frank_Herbert_%281965%29_First_edition.jpg",
    cover_path: null, launch_path: null,
    tags: ["sci-fi", "classic", "political"], genre: "Science Fiction", year: 1965,
    notes: "Dense but worth it. The world-building is unmatched.",
    is_private: false, added_at: d(200), updated_at: d(200), last_launched_at: null,
  },
  {
    id: "4", title: "Inception", category: "movie", status: "completed",
    rating: 9.2, cover_url: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    cover_path: null, launch_path: null,
    tags: ["thriller", "sci-fi", "mind-bending"], genre: "Sci-Fi Thriller", year: 2010,
    notes: "Still holds up perfectly. The spinning top...",
    is_private: false, added_at: d(300), updated_at: d(300), last_launched_at: null,
  },
  {
    id: "5", title: "Breaking Bad", category: "tv_show", status: "completed",
    rating: 10, cover_url: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
    cover_path: null, launch_path: null,
    tags: ["crime", "drama", "intense"], genre: "Crime Drama", year: 2008,
    notes: "The best television ever made. No notes.",
    is_private: false, added_at: d(400), updated_at: d(400), last_launched_at: null,
  },
  {
    id: "6", title: "Disco Elysium", category: "game", status: "completed",
    rating: 9.7, cover_url: "https://upload.wikimedia.org/wikipedia/en/3/35/Disco_Elysium_cover_art.jpg",
    cover_path: null, launch_path: null,
    tags: ["rpg", "detective", "literary", "unique"], genre: "RPG", year: 2019,
    notes: "Unlike anything else. More novel than game.",
    is_private: false, added_at: d(80), updated_at: d(80), last_launched_at: d(15),
  },
  {
    id: "7", title: "Cyberpunk 2077", category: "game", status: "in_progress",
    rating: 8.0, cover_url: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    cover_path: null, launch_path: "C:\\Games\\Cyberpunk2077\\bin\\x64\\Cyberpunk2077.exe",
    tags: ["open-world", "rpg", "cyberpunk", "action"], genre: "Action RPG", year: 2020,
    notes: "Much better after the patches. Phantom Liberty is great.",
    is_private: false, added_at: d(14), updated_at: d(3), last_launched_at: d(1),
  },
  {
    id: "8", title: "Interstellar", category: "movie", status: "completed",
    rating: 9.3, cover_url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    cover_path: null, launch_path: null,
    tags: ["sci-fi", "space", "emotional", "nolan"], genre: "Science Fiction", year: 2014,
    notes: "The docking scene gives me chills every time.",
    is_private: false, added_at: d(250), updated_at: d(250), last_launched_at: null,
  },
  {
    id: "9", title: "Stardew Valley", category: "game", status: "on_hold",
    rating: 8.5, cover_url: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
    cover_path: null, launch_path: null,
    tags: ["farming", "cozy", "indie", "relaxing"], genre: "Simulation", year: 2016,
    notes: "Perfect wind-down game. Always come back to it.",
    is_private: false, added_at: d(500), updated_at: d(90), last_launched_at: d(90),
  },
  {
    id: "10", title: "Neuromancer", category: "book", status: "completed",
    rating: 8.8, cover_url: "https://upload.wikimedia.org/wikipedia/en/4/4b/Neuromancer_%28Book%29.jpg",
    cover_path: null, launch_path: null,
    tags: ["cyberpunk", "sci-fi", "classic"], genre: "Science Fiction", year: 1984,
    notes: "Invented an entire genre. Some parts feel dated but it's essential.",
    is_private: false, added_at: d(350), updated_at: d(350), last_launched_at: null,
  },
  {
    id: "11", title: "Chungking Express", category: "movie", status: "completed",
    rating: 9.1, cover_url: "https://upload.wikimedia.org/wikipedia/en/0/0e/Chungking_express_poster.jpg",
    cover_path: null, launch_path: null,
    tags: ["art-house", "romance", "hong-kong"], genre: "Art House", year: 1994,
    notes: "Wong Kar-wai at his most charming.",
    is_private: false, added_at: d(100), updated_at: d(100), last_launched_at: null,
  },
  {
    id: "12", title: "Hades", category: "game", status: "completed",
    rating: 9.4, cover_url: "https://upload.wikimedia.org/wikipedia/en/6/6e/Hades_cover_art.jpg",
    cover_path: null, launch_path: null,
    tags: ["roguelike", "action", "indie", "mythology"], genre: "Roguelike", year: 2020,
    notes: "Best roguelike ever made. Story delivery through repeated runs is genius.",
    is_private: false, added_at: d(180), updated_at: d(180), last_launched_at: d(45),
  },
  {
    id: "13", title: "Blade Runner 2049", category: "movie", status: "completed",
    rating: 9.0, cover_url: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
    cover_path: null, launch_path: null,
    tags: ["sci-fi", "cyberpunk", "neo-noir", "slow-burn"], genre: "Neo-Noir", year: 2017,
    notes: "Visually stunning. The Villeneuve touch is unmistakable.",
    is_private: false, added_at: d(220), updated_at: d(220), last_launched_at: null,
  },
  {
    id: "14", title: "Neon Genesis Evangelion", category: "anime", status: "completed",
    rating: 9.6, cover_url: "https://upload.wikimedia.org/wikipedia/en/9/93/Neon_Genesis_Evangelion_DVD_vol1.jpg",
    cover_path: null, launch_path: null,
    tags: ["mecha", "psychological", "classic", "influential"], genre: "Mecha / Psychological", year: 1995,
    notes: "Still completely unhinged in the best way.",
    is_private: false, added_at: d(150), updated_at: d(150), last_launched_at: null,
  },
  {
    id: "15", title: "Obsidian", category: "app", status: "in_progress",
    rating: 8.5, cover_url: "https://upload.wikimedia.org/wikipedia/commons/1/10/2023_Obsidian_logo.svg",
    cover_path: null, launch_path: "C:\\Users\\you\\AppData\\Local\\Obsidian\\Obsidian.exe",
    tags: ["productivity", "notes", "pkm"], genre: "Productivity", year: 2020,
    notes: "Main note-taking tool. Still setting up my vault.",
    is_private: false, added_at: d(7), updated_at: d(1), last_launched_at: d(0),
  },
  {
    id: "16", title: "Dark Side of the Moon", category: "music", status: "completed",
    rating: 10, cover_url: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
    cover_path: null, launch_path: null,
    tags: ["prog-rock", "classic", "pink-floyd", "essential"], genre: "Progressive Rock", year: 1973,
    notes: "Perfect album. Start to finish.",
    is_private: false, added_at: d(400), updated_at: d(400), last_launched_at: null,
  },
  {
    id: "17", title: "Baldur's Gate 3", category: "game", status: "in_progress",
    rating: 9.6, cover_url: "https://upload.wikimedia.org/wikipedia/en/5/5a/Baldur%27s_Gate_3_cover_art.jpg",
    cover_path: null, launch_path: "C:\\Games\\BG3\\bg3.exe",
    tags: ["rpg", "dnd", "co-op", "choices-matter"], genre: "RPG", year: 2023,
    notes: "Act 2 is genuinely one of the best things in gaming.",
    is_private: false, added_at: d(5), updated_at: d(1), last_launched_at: d(1),
  },
  {
    id: "18", title: "The Wire", category: "tv_show", status: "completed",
    rating: 9.9, cover_url: "https://upload.wikimedia.org/wikipedia/en/e/e5/TheWire.jpg",
    cover_path: null, launch_path: null,
    tags: ["crime", "drama", "baltimore", "essential"], genre: "Crime Drama", year: 2002,
    notes: "Arguably better than Breaking Bad. Different, but essential.",
    is_private: false, added_at: d(500), updated_at: d(500), last_launched_at: null,
  },
  {
    id: "19", title: "Super Mario Bros. Wonder", category: "game", status: "wishlist",
    rating: null, cover_url: "https://upload.wikimedia.org/wikipedia/en/a/a9/Super_Mario_Bros._Wonder_key_art.jpg",
    cover_path: null, launch_path: null,
    tags: ["platformer", "nintendo", "co-op"], genre: "Platformer", year: 2023,
    notes: "Need to pick this up.",
    is_private: false, added_at: d(3), updated_at: d(3), last_launched_at: null,
  },
  {
    id: "20", title: "Secret Project", category: "app", status: "in_progress",
    rating: null, cover_url: null, cover_path: null, launch_path: null,
    tags: ["private", "work"], genre: null, year: null,
    notes: "This is hidden behind the privacy lock — try unlocking it with PIN: 1234",
    is_private: true, added_at: d(1), updated_at: d(1), last_launched_at: null,
  },
];

// ── In-memory store ───────────────────────────────────────────────────────────

let store: Library = {
  version: 2,
  items: [...MOCK_ITEMS],
  categories: [...MOCK_CATEGORIES],
  statuses: [...MOCK_STATUSES],
  smart_views: [...MOCK_SMART_VIEWS],
};

function delay(ms = 80): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

// ── Mock API — matches invoke.ts interface exactly ────────────────────────────

export async function getLibrary(): Promise<Library> {
  await delay();
  return JSON.parse(JSON.stringify(store));
}

export async function addItem(item: Omit<LibraryItem, "id" | "added_at" | "updated_at">): Promise<LibraryItem> {
  await delay();
  const now = new Date().toISOString();
  const created: LibraryItem = { ...item, id: uuidv4(), added_at: now, updated_at: now };
  store.items.unshift(created);
  return created;
}

export async function updateItem(item: LibraryItem): Promise<LibraryItem> {
  await delay();
  const updated = { ...item, updated_at: new Date().toISOString() };
  store.items = store.items.map(i => i.id === item.id ? updated : i);
  return updated;
}

export async function deleteItem(id: string): Promise<void> {
  await delay();
  store.items = store.items.filter(i => i.id !== id);
}

export async function addCategory(name: string, icon: string): Promise<LibraryCategory> {
  await delay();
  const cat: LibraryCategory = { id: uuidv4(), name, icon, built_in: false };
  store.categories.push(cat);
  return cat;
}

export async function updateCategory(category: LibraryCategory): Promise<LibraryCategory> {
  await delay();
  if (store.categories.find(c => c.id === category.id)?.built_in)
    throw new Error("Cannot modify built-in categories");
  store.categories = store.categories.map(c => c.id === category.id ? category : c);
  return category;
}

export async function deleteCategory(id: string): Promise<void> {
  await delay();
  if (store.categories.find(c => c.id === id)?.built_in)
    throw new Error("Cannot delete built-in categories");
  store.items = store.items.map(i => i.category === id ? { ...i, category: "other" } : i);
  store.categories = store.categories.filter(c => c.id !== id);
}

export async function addStatus(name: string, color: string): Promise<LibraryStatus> {
  await delay();
  const st: LibraryStatus = { id: uuidv4(), name, color, built_in: false };
  store.statuses.push(st);
  return st;
}

export async function updateStatus(status: LibraryStatus): Promise<LibraryStatus> {
  await delay();
  if (store.statuses.find(s => s.id === status.id)?.built_in)
    throw new Error("Cannot modify built-in statuses");
  store.statuses = store.statuses.map(s => s.id === status.id ? status : s);
  return status;
}

export async function deleteStatus(id: string): Promise<void> {
  await delay();
  if (store.statuses.find(s => s.id === id)?.built_in)
    throw new Error("Cannot delete built-in statuses");
  store.items = store.items.map(i => i.status === id ? { ...i, status: "wishlist" } : i);
  store.statuses = store.statuses.filter(s => s.id !== id);
}

export async function saveSmartViews(views: SmartView[]): Promise<void> {
  await delay();
  store.smart_views = views;
}

export async function launchItem(id: string, path: string): Promise<void> {
  await delay(300);
  // In demo: just record the timestamp, no actual launch
  const now = new Date().toISOString();
  store.items = store.items.map(i => i.id === id ? { ...i, last_launched_at: now } : i);
  // Show a friendly notice
  const item = store.items.find(i => i.id === id);
  console.info(`[Demo] Would launch: ${path}`);
  // Small visual feedback via a thrown-then-caught promise we actually resolve
  return Promise.resolve();
}

export async function readImageAsDataUrl(_path: string): Promise<string> {
  // In demo, cover_path is always null — this never fires for real
  throw new Error("Local file images not available in demo");
}

export async function getLibraryPathStr(): Promise<string> {
  return "[Demo mode — no file system]";
}

export async function pickImageFile(): Promise<string | null> {
  alert("File picker not available in the web demo.\nPaste an image URL instead.");
  return null;
}

export async function pickLaunchFile(): Promise<string | null> {
  alert("File picker not available in the web demo.\nType the path manually or leave blank.");
  return null;
}
