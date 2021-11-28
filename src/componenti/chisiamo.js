import { Component } from "react";
import "../css/chisiamo.css"

function ChiSiamo() {

    return <div id="chi-siamo" className="d-flex flex-column justify-content-center align-items-center w-100 vh-100 ">
        <h1 className="ms-5 mb-5" style={{color:"#1E2022"}}>Chi Siamo</h1>
        <div className="d-flex flex-column justify-content-center w-75 ms-5 ">
            <div className="paragraph d-flex flex-row justify-content-between align-items-start mb-5">
                <h2 style={{color:"#1E2022"}}>La nostra storia</h2>
                <p>La Focus Consulting S.r.l. nata nel 1997, è una<br/>
                società di consulenza di direzione aziendale e<br/>
                servizi tecnologici operante con risorse di alto<br/>
                livello e con un’offerta di servizi diversificata.<br/><br/>
                In essa confluiscono esperti con una esperienza<br/>
                decennale, acquisita operando in aziende di<br/>
                interesse nazionale ed internazionale in settori<br/>
                ad elevato contenuto tecnologico.<br/>
                </p>
            </div>
            <div className="paragraph d-flex flex-row justify-content-between align-items-start ">
                <h2 style={{color:"#1E2022"}}>Qualità del lavoro</h2>
                <p>La Società Focus Consulting,<br/>
                per i propri interventi di consulenza, si avvale delle<br/>
                metodologie più avanzate<br/>
                basate sulla concretezza e l’impegno diretto e<br/>
                costante degli esperti in azienda.<br/><br/>
                I progetti di intervento che vengono proposti sono<br/>
                sempre personalizzati dai professionisti<br/>
                che operano in gruppo integrando le proprie<br/>
                esperienze ed impiegando<br/>
                le tecniche più appropriate per ogni singolo caso<br/>
                aziendale, in modo da fornire soluzioni ad hoc.<br/>
                </p>
            </div>
        </div>
    </div>;

}

export default ChiSiamo;