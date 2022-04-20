import { HeroHeader } from "../../lib/recipe-components/hero-header";
import { Body } from "../../lib/recipe-components/body";
import { Navbar } from "../../lib/index-components/navbar";
import { Footer } from "../../lib/index-components/footer";
export default function Recipe() {
  return (
    <div>
      <Navbar />
      <HeroHeader />
      <Body />
      <Footer />
    </div>
  );
}
