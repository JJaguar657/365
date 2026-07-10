import Landing from "@/components/story/Landing";
import BeforeUs from "@/components/story/BeforeUs";
import Conversations from "@/components/story/Conversations";
import Trust from "@/components/story/Trust";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Landing />
      <BeforeUs />
      <Conversations />
      <Trust />
    </main>
  );
}
