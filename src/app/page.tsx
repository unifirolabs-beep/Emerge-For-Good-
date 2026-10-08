import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuickFacts } from "@/components/QuickFacts";
import { AboutChallenge } from "@/components/AboutChallenge";
import { EligibilitySection } from "@/components/EligibilitySection";
import { SchoolStudentsSection } from "@/components/SchoolStudentsSection";
import { InnovationDomains } from "@/components/InnovationDomains";
import { RulesSubmission } from "@/components/RulesSubmission";
import { PrizesAndDates } from "@/components/PrizesAndDates";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-warm-white">
      <Header />
      <HeroSection />
      <QuickFacts />
      <AboutChallenge />
      <EligibilitySection />
      <SchoolStudentsSection />
      <InnovationDomains />
      <RulesSubmission />
      <PrizesAndDates />
      <FinalCTA />
      <Footer />
    </main>
  );
}
