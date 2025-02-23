import Homepage from "@/components/Homepage";
import Intro from "@/components/Intro";
import { Card } from "@/components/ui/card";
import Screen from "@/layout/Screen";
import LocalTime from "@/utils/LocalTime";
import Image from "next/image";

export default function Home() {


  return(
    <div>
      <LocalTime />
      <Screen>
        <div>
          <Intro />
          
        </div>
      </Screen>
    </div>
  );
}
