import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export interface SelectGroup {
  label?: string;
  options: { value: string; label: string }[];
}

interface LuxSelectProps {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  groups: SelectGroup[];
  tone?: 'dark' | 'light';
  ariaLabel: string;
}

/**
 * A fully styled, keyboard-accessible listbox in the Liliav design language.
 * Trigger mirrors surrounding inputs; the open panel is always dark charcoal
 * with champagne-gold accents — premium in both light and dark contexts.
 */
export function LuxSelect({ value, onChange, placeholder, groups, tone = 'dark', ariaLabel }: LuxSelectProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listboxId = useId();

  const flat = groups.flatMap((g) => g.options);
  const selected = flat.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.querySelector('[data-active="true"]') ?? listRef.current.querySelector('[data-selected="true"]');
    el?.scrollIntoView({ block: 'nearest' });
  }, [open, active]);

  const openList = () => {
    setActive(value || flat[0]?.value || null);
    setOpen(true);
  };

  const commit = (v: string) => {
    onChange(v);
    setOpen(false);
  };

  const move = (dir: 1 | -1) => {
    const idx = flat.findIndex((o) => o.value === (active ?? value));
    const next = flat[(idx + dir + flat.length) % flat.length];
    if (next) setActive(next.value);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); move(1); break;
      case 'ArrowUp': e.preventDefault(); move(-1); break;
      case 'Home': e.preventDefault(); setActive(flat[0]?.value ?? null); break;
      case 'End': e.preventDefault(); setActive(flat[flat.length - 1]?.value ?? null); break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (active) commit(active === value ? value : active);
        break;
      case 'Escape': e.preventDefault(); setOpen(false); break;
      case 'Tab': setOpen(false); break;
    }
  };

  const triggerDark = 'bg-transparent text-sand border-transparent';
  const triggerLight = 'bg-white text-charcoal border-charcoal/15 focus:border-gold';

  return (
    <div ref={rootRef} className="relative" onKeyDown={onKeyDown}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={listboxId}
        aria-label={ariaLabel}
        onClick={() => (open ? setOpen(false) : openList())}
        className={`group/sel mt-2 flex w-full items-center justify-between gap-4 border px-0 py-0 text-start outline-none transition-colors duration-300 ${tone === 'dark' ? triggerDark : `${triggerLight} !mt-0 px-4 py-3`}`}
      >
        <span className={`truncate font-serif text-lg ${selected ? (tone === 'dark' ? 'text-sand' : 'text-charcoal') : tone === 'dark' ? 'text-sand/40' : 'text-charcoal/40'} ${tone === 'light' ? '!font-sans !text-sm' : ''}`}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`absolute inset-x-0 top-full z-[60] mt-2 origin-top transition-all duration-200 ease-out ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-label={ariaLabel}
          tabIndex={-1}
          className="lux-scroll max-h-72 overflow-y-auto rounded-md border border-gold/30 bg-[#101018] py-2 shadow-[0_24px_60px_rgba(0,0,0,0.65)] backdrop-blur-md"
        >
          {groups.map((g, gi) => (
            <li key={gi} role="presentation">
              {g.label && (
                <p className="px-5 pb-1 pt-3 text-[10px] font-medium uppercase tracking-[0.22em] text-teal-soft first:pt-2">
                  {g.label}
                </p>
              )}
              <ul role="presentation">
                {g.options.map((o) => {
                  const isSelected = o.value === value;
                  const isActive = o.value === active;
                  return (
                    <li
                      key={o.value}
                      role="option"
                      aria-selected={isSelected}
                      data-selected={isSelected}
                      data-active={isActive}
                      onMouseEnter={() => setActive(o.value)}
                      onClick={() => commit(o.value)}
                      className={`relative flex cursor-pointer items-center justify-between gap-3 px-5 py-2.5 text-[15px] transition-colors duration-200 ${
                        isSelected
                          ? 'bg-gold/[0.14] text-gold'
                          : isActive
                            ? 'bg-gold/10 text-gold-soft'
                            : 'text-sand/80 hover:bg-gold/10 hover:text-gold-soft'
                      }`}
                    >
                      <span className="truncate">{o.label}</span>
                      {isSelected && <Check className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
