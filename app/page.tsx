import Landing from "@/components/story/landing";
import BeforeUs from "@/components/story/BeforeUs";
import Conversations from "@/components/story/Conversations";
import Trust from "@/components/story/Trust";
import Compass from "@/components/story/Compass";
import BeyondMiles from "@/components/story/BeyondMiles";
import Moments from "@/components/story/Moments";
import Letter from "@/components/story/Letter";
import ThroughMyEyes from "@/components/story/ThroughMyEyes";
import Becoming from "@/components/story/Becoming";
import Gallery from "@/components/story/Gallery";
import BirthdayFinale from "@/components/story/BirthdayFinale";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Landing />
      <BeforeUs />
      <Conversations />
      <Trust />
      <Compass />
      <BeyondMiles />
      <Moments />
      <Letter />
      <ThroughMyEyes />
      <Becoming />
      <Gallery />
      <BirthdayFinale />
    </main>
  );
}
