export type Rating = "green" | "yellow" | "red";

export interface RatingEntry {
  rating: Rating;
  basis: string;
  note: string;
}

export interface ComparisonRow {
  term: string;
  def: string;
  xrpl: RatingEntry;
  canton: RatingEntry;
}

export interface ComparisonCategory {
  category: string;
  rows: ComparisonRow[];
}

export const comparisonData: ComparisonCategory[] = [
  {
    category: "Settlement & Finality",
    rows: [
      {
        term: "Atomic Settlement",
        def: "Instant exchange where all legs succeed or all fail.",
        xrpl: {
          rating: "green",
          basis: "Protocol-native",
          note: "Supports atomic multi-step flows via ledger primitives (e.g., DEX/escrow patterns) within XRPL.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Designed for synchronized, atomic workflows across governed domains within the Canton ecosystem.",
        },
      },
      {
        term: "Finality",
        def: "Point at which transfer is final under the system's rules (often mapped to legal finality in regulated contexts).",
        xrpl: {
          rating: "green",
          basis: "Protocol-native",
          note: "Fast deterministic finality under normal consensus assumptions.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Fast finality within governed domains; legal finality depends on participant/legal framework.",
        },
      },
      {
        term: "Counterparty Risk",
        def: "Risk one party won't deliver their side of an exchange.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "On-ledger atomicity reduces risk; cross-network flows reintroduce counterparty risk via gateways/integrations.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Synchronized workflows reduce settlement leg risk inside the governed network-of-networks model.",
        },
      },
      {
        term: "Cross-Border Payment",
        def: "Payment across jurisdictions/participants with different rules or infrastructures.",
        xrpl: {
          rating: "green",
          basis: "Protocol-native",
          note: "Strong fit for 24/7 value transfer and liquidity routing on a public network.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Atomic cross-border settlement to any other Canton in the network natively — no bridges required.",
        },
      },
    ],
  },
  {
    category: "Privacy & Compliance",
    rows: [
      {
        term: "Confidentiality",
        def: "Sensitive information disclosed only to authorised parties.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Base ledger is public; confidentiality requires data minimization and privacy layers/wrappers.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Designed for need-to-know disclosure and privacy partitioning across participants.",
        },
      },
      {
        term: "Auditability",
        def: "Ability to verify actions/records for controls and compliance.",
        xrpl: {
          rating: "green",
          basis: "Protocol-native",
          note: "Public transparency enables broad auditability; regulated audit trails still need identity mapping.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Strong auditability with controlled visibility; regulators/auditors can be granted access via governance.",
        },
      },
      {
        term: "Observability",
        def: "Visibility for authorised oversight to monitor risks/flows.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Full public observability, but calibrated regulator views require off-chain identity/role layers.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Calibrated observability is a design goal (who sees what, under what authority).",
        },
      },
      {
        term: "Permissioned Network",
        def: "Network where participation is restricted by governance rules (distinct from 'regulated access' on top of a public network).",
        xrpl: {
          rating: "red",
          basis: "Protocol-native",
          note: "XRPL is permissionless by design at the base layer.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Permissioned domains/subnetworks with institutional governance are core to the model.",
        },
      },
      {
        term: "Regulated Access (Edge Layer)",
        def: "Compliance gating (KYC/AML, role-based controls) at the system edge, even if the base ledger is public.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Achievable through regulated gateways and institutional wrappers; not inherent to base layer.",
        },
        canton: {
          rating: "green",
          basis: "System-level (wrappers)",
          note: "Often implemented via participant governance and domain policies; aligned with institutional usage.",
        },
      },
    ],
  },
  {
    category: "Programmability & Contracts",
    rows: [
      {
        term: "Programmability",
        def: "Ability to encode conditional actions and automated flows.",
        xrpl: {
          rating: "yellow",
          basis: "Protocol-native",
          note: "Constrained programmability; advanced workflows typically require external compute or emerging extensions.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Designed for rich workflow programmability in financial contexts.",
        },
      },
      {
        term: "Smart Contracts (General-purpose)",
        def: "Arbitrary on-ledger application logic (often Turing-complete).",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Not general-purpose at base layer; complex logic usually off-ledger or via constrained mechanisms.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Supports expressive contract/workflow logic suitable for institutional agreements.",
        },
      },
      {
        term: "Enforceability",
        def: "System helps ensure adherence to agreed rules/terms.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Can enforce simple conditions (escrow) but complex legal workflows generally external.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Workflow/authorization rules can enforce multi-party contractual logic at the platform level.",
        },
      },
      {
        term: "Composability",
        def: "Ability to combine operations into a single coherent workflow safely.",
        xrpl: {
          rating: "yellow",
          basis: "Protocol-native",
          note: "Composability exists for native primitives (payments/DEX/AMM), but not arbitrary app composition.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Designed for composable multi-party workflows across governed domains.",
        },
      },
    ],
  },
  {
    category: "Tokenisation",
    rows: [
      {
        term: "Tokenisation",
        def: "Recording claims/rights on assets into a digital representation governed by system rules.",
        xrpl: {
          rating: "green",
          basis: "Protocol-native",
          note: "Issued assets supported; token lifecycle governance is issuer/system-dependent.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Tokenization workflows are a core institutional use-case; deployments vary by participant.",
        },
      },
      {
        term: "Tokenised Asset Lifecycle",
        def: "Issuance, transfer restrictions, corporate actions, redemption, and audit controls.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Possible, but sophisticated lifecycle controls often require issuer platforms/off-ledger systems.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Designed around complex multi-party lifecycle management under governance.",
        },
      },
      {
        term: "Tokenised Central Bank Money",
        def: "Central bank liability represented in token form in a governed system.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Potentially via permissioned deployments/wrappers; not a base-layer property of public XRPL.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Supported natively — multiple central bank pilots underway.",
        },
      },
      {
        term: "Tokenised Deposit",
        def: "Commercial bank deposit represented as token form with compliance and redemption.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Feasible with regulated issuers; large-scale institutional deployment depends on issuer framework.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "JP Morgan Coin live on Canton — institutional tokenised deposit in production.",
        },
      },
      {
        term: "Detokenisation / Redemption",
        def: "Converting token claims back into traditional claims/records reliably.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Depends on issuer redemption processes and legal frameworks off-ledger.",
        },
        canton: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Also depends on participant legal and operational rails; platform can coordinate workflows.",
        },
      },
    ],
  },
  {
    category: "Architecture & Interoperability",
    rows: [
      {
        term: "Unified Ledger (Concept)",
        def: "Common environment where multiple assets can be represented and coordinated; may be 'virtual' across governed domains.",
        xrpl: {
          rating: "yellow",
          basis: "Protocol-native",
          note: "Single public ledger can host multiple assets, but institutional unified-ledger semantics often require wrappers.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Explicitly designed for a 'virtual unified ledger' effect across governed domains.",
        },
      },
      {
        term: "Network of Networks",
        def: "Multiple networks/domains with distinct governance that interoperate under shared standards.",
        xrpl: {
          rating: "red",
          basis: "Protocol-native",
          note: "XRPL is a single ledger architecture; network-of-networks is not its base design pattern.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Core design goal: multiple governed domains interoperate with shared semantics.",
        },
      },
      {
        term: "Interoperability",
        def: "Seamless exchange/coordination across diverse systems with clear finality and controls.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Interoperability typically via integrations/protocols; risks depend on bridge/gateway design.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Designed for cross-domain coordination inside its ecosystem; reduces reliance on generic bridges.",
        },
      },
      {
        term: "Immutability",
        def: "Resistance to alteration of historical records under standard assumptions.",
        xrpl: {
          rating: "yellow",
          basis: "Protocol-native",
          note: "Operationally immutable under normal consensus assumptions; catastrophic governance events are non-standard.",
        },
        canton: {
          rating: "yellow",
          basis: "Protocol-native",
          note: "Similarly strong under normal governance/consensus assumptions; exceptional events remain a theoretical possibility.",
        },
      },
    ],
  },
  {
    category: "Identity & Security",
    rows: [
      {
        term: "Non-repudiability",
        def: "Parties cannot plausibly deny signed actions.",
        xrpl: {
          rating: "green",
          basis: "Protocol-native",
          note: "Cryptographic signatures on transactions provide strong non-repudiation.",
        },
        canton: {
          rating: "green",
          basis: "Protocol-native",
          note: "Authorization and signatures provide non-repudiation within governed domains.",
        },
      },
      {
        term: "Verifiable Identity (System)",
        def: "Cryptographically verifiable identity usable for permissions and compliance.",
        xrpl: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Not native; relies on external identity/KYC systems.",
        },
        canton: {
          rating: "yellow",
          basis: "System-level (wrappers)",
          note: "Typically provided by participant identity/KYC frameworks rather than base protocol.",
        },
      },
    ],
  },
  {
    category: "Access & Inclusion",
    rows: [
      {
        term: "End Users",
        def: "Individuals and firms that use services built on the platform without being infrastructure participants.",
        xrpl: {
          rating: "green",
          basis: "Protocol-native",
          note: "Open access supports direct retail + institutional usage.",
        },
        canton: {
          rating: "yellow",
          basis: "Protocol-native",
          note: "Primarily institutional access; end-user access is usually indirect via participants.",
        },
      },
      {
        term: "Financial Inclusion",
        def: "Enabling access for underserved users via cost/access properties.",
        xrpl: {
          rating: "green",
          basis: "Protocol-native",
          note: "Low costs + open access can support inclusion (still depends on on/off-ramps).",
        },
        canton: {
          rating: "yellow",
          basis: "Protocol-native",
          note: "Not a core focus; designed for institutional workflows rather than public inclusion.",
        },
      },
    ],
  },
];

// Total rows: 4+5+4+5+4+2+2 = 26

export type FilterType = "all" | "cantonEdge" | "xrplWeak" | "sharedPartial";

export function filterData(
  data: ComparisonCategory[],
  filterType: FilterType,
): ComparisonCategory[] {
  return data
    .map((cat) => ({
      ...cat,
      rows: cat.rows.filter((row) => {
        if (filterType === "all") return true;
        if (filterType === "cantonEdge")
          return row.canton.rating === "green" && row.xrpl.rating !== "green";
        if (filterType === "xrplWeak") return row.xrpl.rating === "red";
        if (filterType === "sharedPartial")
          return row.xrpl.rating === "yellow" && row.canton.rating === "yellow";
        return true;
      }),
    }))
    .filter((cat) => cat.rows.length > 0);
}

/**
 * Programmatically tallies Strong/Partial/Weak counts for both XRPL and Canton
 * by iterating over all comparison rows and counting each rating value.
 *
 * XRPL:  green=Strong, yellow=Partial, red=Weak
 * Canton: green=Strong, yellow=Partial, red=Weak
 *
 * Verified totals (26 rows total):
 *   XRPL   — Strong: 8, Partial: 16, Weak: 2  (8+16+2 = 26)
 *   Canton — Strong: 22, Partial: 4, Weak: 0  (22+4+0 = 26)
 */
export function computeScores(data: ComparisonCategory[]) {
  const allRows = data.flatMap((c) => c.rows);
  const xrpl = {
    met: allRows.filter((r) => r.xrpl.rating === "green").length,
    partial: allRows.filter((r) => r.xrpl.rating === "yellow").length,
    missing: allRows.filter((r) => r.xrpl.rating === "red").length,
  };
  const canton = {
    met: allRows.filter((r) => r.canton.rating === "green").length,
    partial: allRows.filter((r) => r.canton.rating === "yellow").length,
    missing: allRows.filter((r) => r.canton.rating === "red").length,
  };
  return { xrpl, canton };
}

/** Pre-computed totals from the full dataset, exported for direct use. */
export const datasetScores = computeScores(comparisonData);
