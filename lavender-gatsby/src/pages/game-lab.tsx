import React from "react";
import { NavBarMain } from "../shared/shared-components/navbar";
import { GameLabBanner } from "../shared/game-lab-components/banner";
import { GameLabSection1 } from "../shared/game-lab-components/section1";
import { GameLabSection2 } from "../shared/game-lab-components/section2";
import { GameLabSection3 } from "../shared/game-lab-components/section3";
import { Footer } from "../shared/shared-components/footer";

const GameLabPage = () => {
    return (
        <div>
            <NavBarMain />
            <GameLabBanner />
            <GameLabSection1 />
            <GameLabSection2 />
            <GameLabSection3 />
            <Footer />
        </div>
    );
};

export default GameLabPage;
