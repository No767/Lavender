import React from "react";
import { NavBarMain } from "../shared/shared-components/navbar";
import { RecipeBanner } from "../shared/recipe-components/banner";
import { RecipeBody } from "../shared/recipe-components/body";
import { Footer } from "../shared/shared-components/footer";

const RecipePage = () => {
    return (
        <div>
            <NavBarMain />
            <RecipeBanner />
            <RecipeBody />
            <Footer />
        </div>
    );
};

export default RecipePage;
