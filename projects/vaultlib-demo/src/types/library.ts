export interface LibraryCategory {
  id: string;
  name: string;
  icon: string;
  built_in: boolean;
}

export interface LibraryStatus {
  id: string;
  name: string;
  color: string;
  built_in: boolean;
}

export type SmartViewKind =
  | { type: "recently_added"; limit: number }
  | { type: "recently_launched"; limit: number }
  | { type: "top_rated"; limit: number }
  | { type: "by_status"; status_id: string }
  | { type: "by_tag"; tag: string };

export interface SmartView {
  id: string;
  name: string;
  icon: string;
  kind: SmartViewKind;
}

export interface LibraryItem {
  id: string;
  title: string;
  category: string;   // references LibraryCategory.id
  status: string;     // references LibraryStatus.id
  rating: number | null;
  cover_path: string | null;
  cover_url: string | null;
  launch_path: string | null;
  tags: string[];
  genre: string | null;
  year: number | null;
  notes: string | null;
  is_private: boolean;
  added_at: string;
  updated_at: string;
  last_launched_at: string | null;
}

export interface Library {
  version: number;
  items: LibraryItem[];
  categories: LibraryCategory[];
  statuses: LibraryStatus[];
  smart_views: SmartView[];
}

// Helpers
export function getCategoryById(cats: LibraryCategory[], id: string): LibraryCategory | undefined {
  return cats.find(c => c.id === id);
}

export function getStatusById(statuses: LibraryStatus[], id: string): LibraryStatus | undefined {
  return statuses.find(s => s.id === id);
}

// All unique tags across all items (for autocomplete / tag browser)
export function getAllTags(items: LibraryItem[]): string[] {
  const set = new Set<string>();
  for (const item of items) {
    for (const tag of item.tags) set.add(tag);
  }
  return [...set].sort();
}
