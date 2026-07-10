import Landing from "@/components/story/Landing";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Landing />

      <section
        id="chapter-1"
        className="flex h-screen items-center justify-center"
      >
        <h1 className="font-serif text-6xl">Chapter I</h1>
      </section>
    </main>
  );
}
