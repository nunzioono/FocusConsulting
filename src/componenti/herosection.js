import "../css/herosection.css";

function HeroSection (props){
    
    return (<div id="hero" className="d-flex flex-row w-100 mb-5">
            <Title></Title>
            <div className="div-dx">
                <img alt="" src="Icons/icone hero/Div Destra.svg" ></img>
            </div>
        </div>);

    function Title() {
        return (<div className="div-sx d-flex justify-content-start align-items-center vh-100">
            <div className="headers">
                <h1 className="fw-normal"><span style={{color:"#036456"}}>Focus Consulting</span> la<br/> nostra esperienza al<br/> tuo servizio</h1>
                <p style={{color:"#677788"}}>sosteniamo le aziende nel migliorare e<br/> innovare il proprio business</p>
                <a className="btn w-100" style={{width:"fit-content",backgroundColor:"#036456",color:"white"}} onClick={()=>{
                    props.routeCallback(2);
                }}>COME POSSIAMO AIUTARTI?</a>
            </div>
        </div>);
    }

}

export default HeroSection;