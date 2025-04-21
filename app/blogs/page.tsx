import Screen from "@/layout/Screen";
import Header from "@/components/Header";
import LocalTime from "@/utils/LocalTime";

export default function BlogsPage() {
  return (
    <div>
      <LocalTime />
      <Screen>
        <div className="flex flex-col gap-2 pt-4">
          <Header />
          
          <section className="px-4">
            <h1 className="text-3xl font-bold mb-6 text-[#00FFD1]">Blogs</h1>
            <p className="text-white/70">Coming soon...</p>
          </section>
        </div>
      </Screen>
    </div>
  );
} 