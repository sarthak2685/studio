import { PageTransition } from "@/components/PageTransition";
import { Hero } from "@/components/home/Hero";
import { ShowTicker } from "@/components/home/ShowTicker";
import { Stats } from "@/components/home/Stats";
import { WorkRing } from "@/components/home/WorkRing";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { ServiceFold } from "@/components/home/ServiceFold";
import { ShowreelTheatre } from "@/components/home/ShowreelTheatre";
import { VideoReels } from "@/components/home/VideoReels";
import { BehindTheScenes } from "@/components/home/BehindTheScenes";
import { AwardsTeaser } from "@/components/home/AwardsTeaser";
import { TrustedBy } from "@/components/home/TrustedBy";
import { InstagramIso } from "@/components/home/InstagramIso";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <ShowTicker />
      <Stats />
      <WorkRing />
      <BeforeAfter />
      <ServiceFold />
      <ShowreelTheatre />
      <VideoReels />
      <BehindTheScenes />
      <AwardsTeaser />
      <TrustedBy />
      <InstagramIso />
      <FinalCta />
    </PageTransition>
  );
}
