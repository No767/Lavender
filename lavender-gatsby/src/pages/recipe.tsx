import React from "react";
import { NavBarMain } from "../shared/shared-components/navbar";
import { RecipeBody } from "../shared/recipe-components/body";
import { Footer } from "../shared/shared-components/footer";

const RecipePage = () => {
    return (
        <div>
            <NavBarMain />
            <RecipeBody />
            <Footer />
        </div>
    );
};

export default RecipePage;
