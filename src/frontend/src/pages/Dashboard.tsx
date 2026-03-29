import { useState } from "react";
import ComparisonTable from "../components/ComparisonTable";
import DashboardHeader from "../components/DashboardHeader";
import FilterBar from "../components/FilterBar";
import ScoreCard from "../components/ScoreCard";
import SourceFooter from "../components/SourceFooter";
import {
  type FilterType,
  comparisonData,
  datasetScores,
  filterData,
} from "../data/comparisonData";

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const filteredData = filterData(comparisonData, activeFilter);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-fin-bg font-mono text-fin-text">
      {/* Grid background overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 grid-bg" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        {/* Header */}
        <DashboardHeader />

        {/* Score Cards */}
        <div className="animate-fade-up-4 mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ScoreCard
            networkName="XRP Ledger"
            networkColor="#346aa9"
            met={datasetScores.xrpl.met}
            partial={datasetScores.xrpl.partial}
            missing={datasetScores.xrpl.missing}
            variant="xrpl"
          />
          <ScoreCard
            networkName="Canton Network"
            networkColor="#00c2ff"
            met={datasetScores.canton.met}
            partial={datasetScores.canton.partial}
            missing={datasetScores.canton.missing}
            variant="canton"
          />
        </div>

        {/* Filter Bar */}
        <div className="mb-6">
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Comparison Table */}
        <ComparisonTable data={filteredData} />

        {/* Footer */}
        <SourceFooter />
      </div>
    </div>
  );
}
