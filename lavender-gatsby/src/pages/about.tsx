import React from "react";
import { NavBarMain } from "../shared/shared-components/navbar";
import { AboutBody } from "../shared/about-components/body";
import { Footer } from "../shared/shared-components/footer";

const AboutPage = () => {
    return (
        <div>
            <NavBarMain />
            <AboutBody />
            <Footer />
        </div>
    );
};

export default AboutPage;
