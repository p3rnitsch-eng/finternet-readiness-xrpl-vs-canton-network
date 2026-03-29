import type { ComparisonCategory } from "../data/comparisonData";
import RatingBadge from "./RatingBadge";

interface ComparisonTableProps {
  data: ComparisonCategory[];
}

export default function ComparisonTable({ data }: ComparisonTableProps) {
  return (
    <div className="animate-fade-up-6">
      {/* Column headers */}
      <div className="mb-1 grid grid-cols-[150px_1fr_1fr] gap-3 px-4 py-3 sm:grid-cols-[220px_1fr_1fr]">
        <div className="font-syne text-[11px] font-bold uppercase tracking-[0.15em] text-fin-muted">
          Term
        </div>
        <div className="font-syne text-[11px] font-bold uppercase tracking-[0.15em] text-fin-xrpl">
          XRPL
        </div>
        <div className="font-syne text-[11px] font-bold uppercase tracking-[0.15em] text-fin-cyan">
          Canton
        </div>
      </div>

      {/* Categories */}
      {data.map((cat) => (
        <div key={cat.category}>
          <div className="mb-1 border-b border-fin-border pb-2 pt-5 font-syne text-[11px] font-bold uppercase tracking-[0.2em] text-fin-muted">
            {cat.category}
          </div>
          {cat.rows.map((row) => (
            <div
              key={row.term}
              className="mb-0.5 grid grid-cols-[150px_1fr_1fr] items-start gap-3 rounded-[10px] px-4 py-3.5 transition-colors duration-150 hover:bg-fin-surface2 sm:grid-cols-[220px_1fr_1fr]"
            >
              {/* Term cell */}
              <div className="flex flex-col gap-1">
                <span className="font-syne text-[13px] font-semibold text-fin-text">
                  {row.term}
                </span>
                <span className="hidden text-[10px] leading-relaxed text-fin-muted sm:block">
                  {row.def}
                </span>
              </div>

              {/* XRPL rating */}
              <RatingBadge
                rating={row.xrpl.rating}
                basis={row.xrpl.basis}
                note={row.xrpl.note}
              />

              {/* Canton rating */}
              <RatingBadge
                rating={row.canton.rating}
                basis={row.canton.basis}
                note={row.canton.note}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
