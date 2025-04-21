import Screen from "@/layout/Screen";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import LocalTime from "@/utils/LocalTime";

export default function ProjectsPage() {
  return (
    <div>
      <LocalTime />
      <Screen>
        <div className="flex flex-col gap-2 pt-4">
          <Header />
          
          <section className="px-4">
            <Projects />
          </section>
        </div>
      </Screen>
    </div>
  );
} 