import { Component } from "react";
import "../css/footer.css";

function Footer(){

        var path="";

        if(window.location.pathname.includes("/contatti")||window.location.pathname.includes("/servizi")){
            path="../";
        }

        return <div id="footer" className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-around w-75 pt-5">
                <div className="section d-flex flex-row mb-2">
                    <div className="logo d-flex justify-content-center align-items-center rounded-circle" style={{backgroundColor:"white"}}>
                        <img src={path+"logo.png"}></img>
                    </div>
                    <p className="mb-0">Focus Consulting Srl</p>
                </div>
                <div className="section">
                    <p>Contatti</p>
                    <div className="contatto d-flex flex-row mb-2">
                        <img src={path+"Icons/icone footer/place-white.svg"}></img>
                        Via Taranto 1/C – 70022 Altamura BA
                    </div>
                    <div className="contatto d-flex flex-row mb-2">
                        <img src={path+"Icons/icone footer/email-white.svg"}></img>
                        info@focuscon.it
                    </div>
                    <p>P.IVA 06244360720</p>
                </div>
                <div className="section">
                    <p>Termini di utilizzo</p>
                    <p>
                        © Focus Consulting. Tutti i diritti riservati.
                        <br/><br/>
                        Quando visiti o interagisci con i nostri siti, servizi o tools, noi o un servizio autorizzato dai nostri providers potremmo usare dei cookies per conservare informazioni per aiutarci a creare un esperienza migliore e più veloce.
                    </p>
                </div>
            </div>
        </div>;

}

export default Footer;