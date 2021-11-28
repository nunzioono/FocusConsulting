import HeroSection from "./herosection";
import ChiSiamo from "./chisiamo";
import Servizi from "./servizi";
import { Component } from "react";

function Homepage(props) {    

    return <div className="position-relative d-flex flex-column justify-content-center align-items-center w-100">
        <HeroSection></HeroSection>
        <ChiSiamo></ChiSiamo>
        <Servizi></Servizi>
    </div>;
}

export default Homepage;