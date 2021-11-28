import "../css/servizi.css";
import { Link } from "react-router-dom";

function Servizi(){

    return <div id="servizi" className="d-flex justify-content-center align-items-center w-100 vh-100">
        <div className="d-flex flex-column justify-content-center align-items-center w-75">
            <h1 className="mt-3">Cosa facciamo</h1>
            <p className="mt-3">
                La FOCUS CONSULTING S.r.l. è impegnata nei settori dell’ ambiente, qualità, energia e
                sicurezza con una consulenza di elevato livello sia per il conseguimento delle certificazioni che per il pieno rispetto delle leggi e degli adempimenti contrattuali con i propri clienti.
            </p>
            <div className="riga d-flex flex-row justify-content-around mb-2">
                <Card index={1} icon="Icons/icone servizi/1.svg" title="Sistemi di Gestione: qualità, ambiente, sicurezza e sicurezza informatica" paragraph="Il miglioramento continuo per trasformare i rischi in opportunità per l'organizzazione"/>
                <Card index={2} icon="Icons/icone servizi/2.svg" title="Sicurezza ed Igiene del Lavoro" paragraph="ridurre i rischi, migliorare i livelli di salute e sicurezza sul lavoro, aumentare l’efficienza e le prestazioni dell’organizzazione"/>
                <Card index={3} icon="Icons/icone servizi/3.svg" title="Consulenza Ambientale ed Energetica" paragraph="l'attenzione all'ambiente è la nostra priorità"/>
            </div>
            <div className="riga d-flex flex-row justify-content-around mb-5">
                <Card index={4} icon="Icons/icone servizi/4.svg" title="Formazione" paragraph="la formazione per prepararti al lavoro e migliorare le tue competenze"/>
                <Card index={5} icon="Icons/icone servizi/5.svg" title="Consulenza Direzionale" paragraph="supporto tecnico alla direzione aziendale"/>
                <Card index={6} icon="Icons/icone servizi/6.svg" title="Investimenti Industriali" paragraph="consulenza per progetti di investimento industria 4.0"/>
            </div>
        </div>
    </div>;

}

function Card(props){
    return <Link to={"/servizi/"+props.index} style={{textDecoration: "none"}}>
    <div className="card d-flex justify-content-center align-items-center shadow mt-5">
        <div className="d-flex flex-column justify-content-between w-75">
            <img src={props.icon}></img>
            <h5 className="mb-2">{props.title}</h5>
            <p className="mb-2">{props.paragraph}</p>
        </div>
    </div>
    </Link>;
}

export default Servizi;