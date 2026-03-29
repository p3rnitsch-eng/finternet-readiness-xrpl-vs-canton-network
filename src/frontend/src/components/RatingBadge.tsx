import type { Rating } from "../data/comparisonData";

interface RatingBadgeProps {
  rating: Rating;
  basis: string;
  note: string;
}

const config: Record<
  Rating,
  { icon: string; label: string; colorClass: string }
> = {
  green: {
    icon: "✅",
    label: "Strong alignment",
    colorClass: "text-fin-green",
  },
  yellow: { icon: "⚠️", label: "Partial", colorClass: "text-fin-yellow" },
  red: { icon: "❌", label: "Weak", colorClass: "text-fin-red" },
};

export default function RatingBadge({ rating, basis, note }: RatingBadgeProps) {
  const { icon, label, colorClass } = config[rating];
  return (
    <div className="flex flex-col gap-1">
      <div
        className={`flex items-center gap-1.5 text-[11px] font-medium ${colorClass}`}
      >
        <span className="text-[13px] leading-none">{icon}</span>
        <span>{label}</span>
      </div>
      <span className="w-fit rounded-full border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-fin-text/75">
        {basis}
      </span>
      <p className="text-[10px] leading-relaxed text-fin-muted">{note}</p>
    </div>
  );
}
