import { Body1 } from "../../lib/game-lab-components/body1";
import { Body2 } from "../../lib/game-lab-components/body2";
import { Body3 } from "../../lib/game-lab-components/body3";
import { Body4 } from "../../lib/game-lab-components/body4";
import { HeroHeader } from "../../lib/game-lab-components/hero-header";
import { Navbar } from "../../lib/index-components/navbar";
import { Footer } from "../../lib/index-components/footer";

export default function GameLab() {
  return (
    <div>
      <Navbar />
      <HeroHeader />
      <Body1 />
      <Body2 />

      <Body3 />

      <Body4 />
      <Footer />
    </div>
  );
}
