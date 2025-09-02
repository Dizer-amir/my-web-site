import { useState } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import SearchSection from "@/components/search-section";
import InteractionChecker from "@/components/interaction-checker";
import FeaturesGrid from "@/components/features-grid";
import ResultsSection from "@/components/results-section";
import DisclaimerSection from "@/components/disclaimer-section";
import Footer from "@/components/footer";
import { type Drug } from "@shared/schema";

export default function Home() {
  const [searchResults, setSearchResults] = useState<Drug[]>([]);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <SearchSection 
          onSearchResults={(results) => {
            setSearchResults(results);
            setShowResults(true);
          }}
        />
        <InteractionChecker />
        {showResults && <ResultsSection results={searchResults} />}
        <FeaturesGrid />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
}
