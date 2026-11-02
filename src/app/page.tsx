import { PageTransition } from "@/components/PageTransition";
import { Hero } from "@/components/home/Hero";
import { ShowTicker } from "@/components/home/ShowTicker";
import { ShowJourney } from "@/components/home/ShowJourney";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { SelectedWork } from "@/components/home/SelectedWork";
import { VideoReels } from "@/components/home/VideoReels";
import { Worldwide } from "@/components/home/Worldwide";
import { Stats } from "@/components/home/Stats";
import { AwardsTeaser } from "@/components/home/AwardsTeaser";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <ShowTicker />
      <ShowJourney />
      <BeforeAfter />
      <SelectedWork />
      <VideoReels />
      <Worldwide />
      <Stats />
      <AwardsTeaser />
      <FinalCta />
    </PageTransition>
  );
}
