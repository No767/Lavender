import React from "react";
import { NavBarMain } from "../shared/shared-components/navbar";
import { HomeBanner } from "../shared/home-components/banner";
import { HomeBody } from "../shared/home-components/body";
import { Footer } from "../shared/shared-components/footer";

const HomePage = () => {
    return (
        <div>
            <NavBarMain />
            <HomeBanner />
            <HomeBody />
            <Footer />
        </div>
    );
};

export default HomePage;
