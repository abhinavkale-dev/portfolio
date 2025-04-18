import Intro from "@/components/Intro";
import About from "@/components/About";
import Screen from "@/layout/Screen";
import LocalTime from "@/utils/LocalTime";
import Skills from "@/components/Skills";
import ElasticLine from "@/fancy/components/physics/elastic-line";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return(
    <div>
      <LocalTime />
      <Screen>
        <div className="flex flex-col gap-2">
          <section>
            <Intro />
          </section>
          
          <section className="px-4">
            <About />
          </section>
          
          <section className="px-4">
            <Skills />
          </section>

          <section className="px-4">
            <Projects />
          </section>

          <section className="px-4">
            <Contact />
          </section>
          
          <div className="w-full overflow-hidden">
            <ElasticLine />
          </div>
        </div>
      </Screen>
    </div>
  );
}
