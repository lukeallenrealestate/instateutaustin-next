'use client';

// Interactive checklist with progress.
// - Real checkboxes the user can tick.
// - Items grouped into named sections.
// - Live "M of N items gathered" counter at the top.
// - Optional `storageKey` persists state in localStorage so the user can
//   come back and pick up where they left off. (Decline consent? Set
//   storageKey to undefined for in-memory only.)

import { useEffect, useMemo, useState } from 'react';

export interface ChecklistItem {
  /** Stable id within the list; used as the localStorage key suffix. */
  id: string;
  /** Bold lead-in. */
  title: string;
  /** Optional supporting paragraph. */
  detail?: string;
  /** Optional path tag rendered as a small chip ("BOTH", "R3", "R4"). */
  tag?: 'BOTH' | 'R3' | 'R4';
}

export interface ChecklistGroup {
  heading: string;
  items: ChecklistItem[];
}

interface Props {
  groups: ChecklistGroup[];
  /** localStorage key for persistence. Omit for in-memory state. */
  storageKey?: string;
}

export function Checklist({ groups, storageKey }: Props) {
  const allIds = useMemo(
    () => groups.flatMap(g => g.items.map(i => `${g.heading}::${i.id}`)),
    [groups]
  );

  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!storageKey) {
      setHydrated(true);
      return;
    }
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setChecked(JSON.parse(stored));
    } catch {
      /* localStorage blocked; in-memory fallback */
    }
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated || !storageKey) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      /* ignore */
    }
  }, [checked, hydrated, storageKey]);

  const total = allIds.length;
  const done = allIds.filter(id => checked[id]).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  const reset = () => setChecked({});

  return (
    <div className="my-7">
      {/* Progress strip */}
      <div className="bg-surface border border-hairline rounded-md p-4 mb-6 flex items-center gap-4 flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <div className="flex justify-between items-baseline mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-ink">Progress</span>
            <span
              className="text-sm font-semibold text-ink"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {done} of {total} gathered
            </span>
          </div>
          <div className="h-2 bg-cream rounded-full overflow-hidden" aria-hidden="true">
            <div
              className="h-full bg-burnt transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
        {done > 0 && (
          <button
            onClick={reset}
            className="text-xs text-burnt-deep hover:text-burnt underline-offset-2 hover:underline no-underline"
          >
            Reset
          </button>
        )}
      </div>

      {/* Groups */}
      {groups.map(g => (
        <div key={g.heading} className="bg-white border border-hairline rounded-lg p-6 my-5">
          <h3 className="mt-0 text-ink">{g.heading}</h3>
          {g.items.map(item => {
            const key = `${g.heading}::${item.id}`;
            const isChecked = !!checked[key];
            return (
              <label
                key={item.id}
                className="grid grid-cols-[28px_1fr] gap-3 py-3.5 border-b border-hairline last:border-0 items-start cursor-pointer hover:bg-paper -mx-2 px-2 rounded transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() =>
                    setChecked(prev => ({ ...prev, [key]: !prev[key] }))
                  }
                  className="w-5 h-5 mt-0.5 accent-[#BF5700] cursor-pointer"
                />
                <div>
                  <strong
                    className={isChecked ? 'text-light line-through' : 'text-ink'}
                  >
                    {item.title}
                  </strong>
                  {item.tag && (
                    <span
                      className={`inline-block ml-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        item.tag === 'BOTH'
                          ? 'bg-burnt text-white'
                          : 'bg-cream text-ink'
                      }`}
                    >
                      {item.tag}
                    </span>
                  )}
                  {item.detail && (
                    <p
                      className={`m-0 mt-1.5 text-sm ${isChecked ? 'text-light' : 'text-body'}`}
                    >
                      {item.detail}
                    </p>
                  )}
                </div>
              </label>
            );
          })}
        </div>
      ))}
    </div>
  );
}
