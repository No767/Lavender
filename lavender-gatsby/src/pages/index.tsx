import React from "react";
import { NavBarMain } from "../shared/shared-components/navbar";
import { IndexBanner } from "../shared/index-components/banner";
import { IndexBody } from "../shared/index-components/body";
import { Footer } from "../shared/shared-components/footer";

const IndexPage = () => {
    return (
        <div>
            <NavBarMain />
            <IndexBanner />
            <IndexBody />
            <Footer />
        </div>
    );
};

export default IndexPage;
