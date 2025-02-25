import Intro from "@/components/Intro";
import About from "@/components/About";
import Screen from "@/layout/Screen";
import LocalTime from "@/utils/LocalTime";
import Socials from "@/components/Socials";
export default function Home() {


  return(
    <div>
      <LocalTime />
      <Screen>
        <div>
          <Intro />
          <About />
          <Socials />
        </div>
      </Screen>
    </div>
  );
}
