interface ScorePill {
  icon: string;
  count: number;
  label: string;
  colorClass: string;
  borderClass: string;
  bgClass: string;
}

interface ScoreCardProps {
  networkName: string;
  networkColor: string;
  met: number;
  partial: number;
  missing: number;
  variant: "xrpl" | "canton";
}

export default function ScoreCard({
  networkName,
  networkColor,
  met,
  partial,
  missing,
  variant,
}: ScoreCardProps) {
  const pills: ScorePill[] = [
    {
      icon: "✅",
      count: met,
      label: "Strong",
      colorClass: "text-fin-green",
      borderClass: "border-fin-green/20",
      bgClass: "bg-fin-green/7",
    },
    {
      icon: "⚠️",
      count: partial,
      label: "Partial",
      colorClass: "text-fin-yellow",
      borderClass: "border-fin-yellow/20",
      bgClass: "bg-fin-yellow/7",
    },
    {
      icon: "❌",
      count: missing,
      label: "Weak",
      colorClass: "text-fin-red",
      borderClass: "border-fin-red/20",
      bgClass: "bg-fin-red/7",
    },
  ];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-7 text-center ${
        variant === "canton"
          ? "border-fin-cyan/30 bg-gradient-to-br from-fin-surface to-[#0a1825]"
          : "border-fin-border bg-fin-surface"
      }`}
    >
      {/* Top accent bar */}
      <div
        className="absolute inset-x-0 top-0 h-0.5"
        style={{ background: networkColor }}
      />

      <div
        className="mb-4 font-syne text-[13px] font-bold uppercase tracking-[0.15em]"
        style={{ color: networkColor }}
      >
        {networkName}
      </div>

      <div className="flex flex-wrap justify-center gap-2.5">
        {pills.map((pill) => (
          <div
            key={pill.label}
            className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] font-medium ${pill.colorClass} ${pill.borderClass} ${pill.bgClass}`}
          >
            <span>{pill.icon}</span>
            <span>
              {pill.count} {pill.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
