import React from "react"
import { NavBarMain } from "../shared/shared-components/navbar"
import { AppLabBanner } from "../shared/app-lab-components/banner"
import { AppLabBody } from "../shared/app-lab-components/body"
import { Footer } from "../shared/shared-components/footer"

const GameLabPage = () => {
  return (
    <div>
        <NavBarMain/>
        <AppLabBanner/>
        <AppLabBody/>
        <Footer/>
    </div>
  )
}

export default GameLabPage
