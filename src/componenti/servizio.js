import { Component } from "react";
import { Link } from "react-router-dom";
import "../css/servizio.css";

class Servizio extends Component{

    constructor(props){
        super();
        window.scroll(0,0)
        this.id = props.match.params.id;
        this.title=[];
        this.paragraph=[];
        this.h3= [];
        this.servizi=[];
        var file= this.getFile(this.id.toString());

        if(file){
            let righe=file.split("\n");
            let tmp= righe.splice(0,1)[0];
            if(tmp.includes("*")){
                tmp= tmp.split("*");
                for(let p of tmp){
                    this.title.push(p);
                }            
            }else{
                this.title.push(tmp);
            }
            tmp= righe.splice(0,1)[0];
            if(tmp.includes("*")){
                tmp= tmp.split("*");
                for(let p of tmp){
                    this.paragraph.push(p);
                }            
            }else{
                this.paragraph.push(tmp);
            }
            tmp= righe.splice(0,1)[0];
            if(tmp.includes("*")){
                tmp= tmp.split("*");
                for(let p of tmp){
                    this.h3.push(p);
                }            
            }else{
                this.h3.push(tmp);
            }
            for(let riga of righe){
                this.servizi.push(riga);
            }
        }
    
    }

    componentDidMount(){
        let boxes= document.getElementsByClassName("box");
        for(let box of boxes){
            box.addEventListener("mouseover",(e)=>{
                let parent=e.target;
                if(!e.target.classList.contains("box")){
                    parent=e.target.parentNode;
                }
                parent.children.item(0).classList.add("o-0");
                parent.children.item(0).classList.add("d-none");
                parent.children.item(1).classList.remove("d-none");
                parent.children.item(1).classList.remove("o-0");
            });
            box.addEventListener("mouseleave",(e)=>{
                let parent=e.target;
                if(!e.target.classList.contains("box")){
                    parent=e.target.parentNode;
                }
                parent.children.item(0).classList.remove("o-0");
                parent.children.item(0).classList.remove("d-none");
                parent.children.item(1).classList.add("d-none");
                parent.children.item(1).classList.add("o-0");            });
        }
    }

    render(){
        return <div>
        <div id="servizio" className="w-100">
            <div className="first d-flex w-100 vh-100">
                <div className="div-sx d-flex justify-content-start align-items-center">
                    <div className="pos-div-sx">
                        <h1 className="marb fw-normal">{
                                this.title.map((seg)=>{
                                if(seg.includes("s/")){
                                    let spanned= seg.split("s/");
                                    return <>{spanned[0]}<span>{spanned[1]}</span>{spanned[2]}</>;
                                }else{
                                    return <>{seg}<br/></>;
                                }
                            })}</h1>
                        <p className="marb">{
                                this.paragraph.map((seg)=>{
                                if(seg.includes("s/")){
                                    let spanned= seg.split("s/");
                                    return <>{spanned[0]}<span>{spanned[1]}</span>{spanned[2]}</>;
                                }else{
                                    return <>{seg}<br/></>;
                                }
                            })}</p>
                        <Link to="/contatti" className="btn">COME POSSIAMO AIUTARTI?</Link>
                    </div>
                </div>
                <div className="div-dx">
                    <img alt="" className="w-100" src={"../sezione"+this.id+".svg"}></img>
                </div>
            </div>
            <div className="second d-flex justify-content-center align-items-center vh-100">
                <div className="w-75">
                    <h2 className="fw-normal mb-5">{this.h3.map((seg)=>{
                            if(seg.includes("s/")){
                                let spanned= seg.split("s/");
                                return <>{spanned[0]}<span>{spanned[1]}</span>{spanned[2]}</>;
                            }else{
                                return <>{seg}<br/></>;
                        }})}</h2>
                    {this.id==="1" && <div className="mb-5">
                        <div className="d-flex flex-row justify-content-between w-100 mb-2">
                            <this.Box index={0} title={this.servizi[0]} desc={this.servizi[16]}/>
                            <this.Box index={1} title={this.servizi[1]} desc={this.servizi[17]}/>
                            <this.Box index={2} title={this.servizi[2]} desc={this.servizi[18]}/>
                            <this.Box index={3} title={this.servizi[3]} desc={this.servizi[19]}/>
                        </div>
                        <div className="d-flex flex-row justify-content-between w-100 mb-2">
                            <this.Box index={4} title={this.servizi[4]} desc={this.servizi[20]}/>
                            <this.Box index={5} title={this.servizi[5]} desc={this.servizi[21]}/>
                            <this.Box index={6} title={this.servizi[6]} desc={this.servizi[22]}/>
                            <this.Box index={7} title={this.servizi[7]} desc={this.servizi[23]}/>
                        </div>
                        <div className="d-flex flex-row justify-content-between w-100 mb-2">
                            <this.Box index={8} title={this.servizi[8]} desc={this.servizi[24]}/>
                            <this.Box index={9} title={this.servizi[9]} desc={this.servizi[25]}/>
                            <this.Box index={10} title={this.servizi[10]} desc={this.servizi[26]}/>
                            <this.Box index={11} title={this.servizi[11]} desc={this.servizi[27]}/>
                        </div>
                        <div className="d-flex flex-row justify-content-between w-100 mb-2">
                            <this.Box index={12} title={this.servizi[12]} desc={this.servizi[28]}/>
                            <this.Box index={13} title={this.servizi[13]} desc={this.servizi[29]}/>
                            <this.Box index={14} title={this.servizi[14]} desc={this.servizi[30]}/>
                            <this.Box index={15} title={this.servizi[15]} desc={this.servizi[31]}/>
                        </div>
                    </div>}
                    {this.id!=="1" &&<div className="mb-5">
                        {this.servizi.map((elem,i)=><p key={i}>{elem}</p>)}
                    </div>}
                    <Link to="/contatti" className="btn mb-5">SCRIVICI QUI</Link>
                </div>
            </div>
        </div>
    </div>;
    }

    getFile(id){

        switch(id){
            case "1":
                return `Sistemi *gestione qualità* sicurezza e* s/ambientes/
                Il miglioramento continuo per trasformare* i rischi in opportunità per l'organizzazione
                Lavoriamo con te e la tua azienda* per l'ottenimento delle seguenti certificazioni
                ISO 9001
                ISO 14001
                ISO 27001
                ISO 45001
                UNI EN ISO 3834
                UNI EN 1090
                Diretttiva UE 2014/90/UE (certificazione MED)
                Criteri Ambientali Minimi (CAM)
                STANDARD 100 by OEKO-TEX®
                Dichiarazione ambientale di prodotto (EPD)
                Direttiva PED 2014/68/UE
                Direttiva ATEX 2014/34/UE
                Standard SA8000
                Marcatura CE
                HACCP
                rintracciabilità Agro-alimentare
                ISO 9001 - Progettazione ed implementazione di Sistemi di Gestione Qualità conformi alle norme
                ISO 14001 - Sistemi di Gestione Ambientale conformi alle norme
                ISO 27001 - Sistemi di Gestione per la sicurezza dell’informazione conformi alle norme
                ISO 45001 - Sistema di Gestione per la salute e sicurezza sul lavoro conformi alle norme
                Requisiti di qualità per la saldatura per fusione dei materiali metallici - Guida che stabilisce i requisiti di qualità per la corretta gestione del processo di fabbricazione, sia in officina che in cantiere, di qualsiasi tipo di costruzione, articolo e/o componente saldato per fusione
                Norme di riferimento per la fornitura di costruzioni/strutture metalliche in acciaio ed alluminio dalla loro progettazione alla loro installazione
                Equipaggiamento marittimo, abroga la Direttiva 96/98/CE del Consiglio prevede la certificazione di alcuni equipaggiamenti marittimi e definisce i requisiti di base per fabbricanti e prodotti
                Requisiti ambientali definiti per le varie fasi del processo di acquisto, volti a individuare la soluzione progettuale, il prodotto o il servizio migliore sotto il profilo ambientale lungo il ciclo di vita, tenuto conto della disponibilità di mercato
                Sistema di controllo e certificazione indipendente e uniforme a livello internazionale per le materie prime, i semilavorati e i prodotti finiti del settore tessile ad ogni livello di lavorazione, oltre che per i materiali accessori utilizzati
                Schema di certificazione volontaria classificata come Tipo III che quantifica e verifica il ciclo di vita di prodotti e merci come citato nell' ISO 14025:2015 (Etichette e dichiarazioni ambientali – Dichiarazioni ambientali di Tipo III)
                Si applica alla progettazione, fabbricazione e valutazione di conformità delle attrezzature a pressione (recipienti, tubazioni, accessori di sicurezza ed accessori a pressione) e degli insiemi sottoposti ad una pressione massima ammissibile PS superiore a 0,5 ba
                Atmosfere esplosive, ovvero a una miscela con l’aria, a determinate condizioni atmosferiche, di sostante infiammabili allo stato di gas, vapori, nebbie o combustibili in stato pulverulento in cui, dopo l’accensione, la combustione si propaga all’insieme della miscela non bruciata
                SA8000 è un sistema di gestione focalizzato sulle condizioni di lavoro del personale. E' lo standard accreditato riconosciuto a livello internazionale che risponde alle esigenze delle organizzazioni che vogliono distinguersi per il loro impegno nello sviluppo sostenibile e per le tematiche sociali
                Obbligatoria per tutti i prodotti per i quali esiste una direttiva comunitaria. Eseguita dal fabbricante di un prodotto regolamentato nell’Unione europea, il quale dichiara per mezzo della dichiarazione di conformità o di prestazione per i soli prodotti da costruzione, che il prodotto è conforme ai requisiti di salute e sicurezza, previsti dalle direttive o dai regolamenti comunitari pertinenti
                L’HACCP (Hazard Analysis Critical Control Point) rappresenta un sistema di controllo, legato alla produzione degli alimenti, che ha come obiettivo quello di evitare contaminazioni sia di natura biologica che chimica o fisica e garantirne la sicurezza igienica e la commestibilità. Requisiti per l'igiene e salubrità degli alimenti nella filiera produttiva. Applicazione pacchetto igiene. Autocontrollo
                Assistenza nella applicazione della normativa sulla rintracciabilità Agro-alimentare`;
            case "2":
                return `s/Sicurezzas/* di impianti *e igiene del *lavoro
                ridurre i rischi, migliorare i livelli di salute* e sicurezza sul lavoro, aumentare l’efficienza* e le prestazioni dell’organizzazione.
                I servizi che offriamo per aiutarti a rendere i luoghi di lavoro più sicuri
                Analisi e valutazione delle condizioni ambientali dei luoghi di lavoro
                Assistenza e supporto nella redazione della Valutazione dei Rischi 
                Individuazione delle misure di prevenzione e protezione (in ottemperanza a quanto richiesto dal D.Lgs 81/08 e succ. mod.)
                Interventi per la realizzazione nelle Aziende delle disposizioni D.lgs. 81/08
                Progettazione piani Operativi di Sicurezza (POS), D.lgs. 81/08
                Certificati di Prevenzione Incendi: Valutazione del rischio incendio sui luoghi di lavoro (DM 10.3.98) e Piani di emergenza
                Valutazione di rumore e vibrazioni secondo quanto richiesto dal Dlgs 81/2008
                Valutazione del rumore ambientale
                Atmosfere Esplosive (ATEX):\n- classificazione delle aree a rischio\n- valutazione rischio esplosione (Dlgs 81/2008)\n- progettazione secondo la Direttiva Atex
                Marcatura CE di macchine, quasi-macchine e linee di produzione`;
            case "3":
                return `Consulenza* ambientale* ed s/energeticas/
                l'attenzione all'ambiente è la nostra priorità
                Possiamo aiutarti per il conseguimento delle seguenti autorizzazioni
                Consulenza Aziendale per Istruttoria Autorizzazioni Sanitarie
                Autorizzazione Unica Ambientale
                Autorizzazione Integrata Ambientale
                Valutazioni previsionali di impatto acustico
                Valutazioni di Impatto ambientale
                Determinazione dei requisiti acustici delle sorgenti sonore nei luoghi di intrattenimento
                Audit energetico
                Termografia civile e industriale
                Analisi di progetti di investimento e di risparmio energetico`;
            case "4":
                return `Formazione
                la formazione per prepararti al lavoro e migliorare le tue competenze
                Organizziamo corsi di formazione riguardo le seguenti tematiche
                Corsi di formazione come previsto dal D.Lgs.81/08 rivolti ai datori di lavori, lavoratori e alle figure coinvolte dall'applicazione del decreto.
                Gestione rifiuti
                Gestione scarichi ed emissioni in atmosfera
                Bonifiche`;
            case "5":
                return `s/Consulenzas/* direzionale 
                supporto tecnico alla direzione aziendale
                Possiamo aiutarti a migliorare la tua azienda tramite la consulenza in ambito dirigenziale 
                Controllo di gestione e reportistica direzionale
                Analisi e controllo dei costi di produzione e del margine operativo aziendale
                Budget e controllo
                Studi di razionalizzazione ed analisi delle attività produttive
                Supporto tecnico nelle attività di trading: assistenza tecnica pre e post - vendita
                Politica degli acquisti e scorte di magazzino`;
            case "6":
                return `s/Investimentis/* industriali
                Consulenza per progetti di investimento industria 4.0
                Come possiamo migliorare la gestione degli investimenti
                Analisi di redditività
                Analisi costi-benefici
                Analisi di strategia e formulazione di piani alternativi
                Gestione dell’ innovazione tecnologica
                Ottimizzazione di layout industriali
                Business Plan Industriali`;
            default:
                return "";
        }
    
    }
    
    Box(props){
    
        return <div key={props.index} index={props.index} className="box d-flex justify-content-center align-items-center rounded p-3">
            <p>{props.title}</p>
            <p className="d-none o-0 m-2">{props.desc}</p>
        </div>;
    }

}


export default Servizio;