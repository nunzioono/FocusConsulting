import HeroSection from "./herosection";
import ChiSiamo from "./chisiamo";
import Servizi from "./servizi";

function Homepage(props) {
    return (
        <div className="position-relative d-flex flex-column justify-content-center align-items-center w-100">
            <HeroSection routeCallback={props.routeCallback}></HeroSection>
            <ChiSiamo></ChiSiamo>
            <Servizi routeCallback={props.routeCallback}></Servizi>
        </div>
    );
}

export default Homepage;