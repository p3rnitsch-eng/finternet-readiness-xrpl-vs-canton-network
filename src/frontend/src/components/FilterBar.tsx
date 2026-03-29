import type { FilterType } from "../data/comparisonData";

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { id: FilterType; label: string }[] = [
  { id: "all", label: "All Terms" },
  { id: "cantonEdge", label: "✅ Canton Strong / XRPL not Strong" },
  { id: "xrplWeak", label: "❌ XRPL Weak" },
  { id: "sharedPartial", label: "⚠️ Shared Partial" },
];

export default function FilterBar({
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className="animate-fade-up-5 flex flex-wrap gap-2">
      {filters.map((f) => {
        const isActive = activeFilter === f.id;
        const isAll = f.id === "all";
        return (
          <button
            key={f.id}
            type="button"
            onClick={() => onFilterChange(f.id)}
            data-ocid={`filter.${f.id}.tab`}
            className={`rounded-full border px-4 py-1.5 font-mono text-[12px] transition-all duration-200 ${
              isActive
                ? isAll
                  ? "border-fin-text bg-white/5 text-fin-text"
                  : "border-fin-cyan bg-fin-cyan/5 text-fin-cyan"
                : "border-fin-border text-fin-muted hover:border-fin-cyan hover:bg-fin-cyan/5 hover:text-fin-cyan"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
