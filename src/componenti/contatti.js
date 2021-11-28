import "../css/contatti.css";

function Contatti() {
    return <div id="contatti" className="d-flex flex-row vh-100 w-100">
            <div className="div-sx d-flex justify-content-start align-items-center h-100">
                <div className="my-container d-flex flex-column justify-content-between align-items-start h-50" style={{transform:"translateY(-30%)"}}>
                    <h1 style={{color:"#036456",fontWeight: "400"}}>Rimianiamo in<br/> contatto</h1>
                    <div className="contatto d-flex flex-row " style={{color:"#84919F",fontSize:"1vw"}}>
                        <img className="me-3" src="../Icons/icone footer/place.svg"></img>
                        Via Taranto 1/C – 70022 Altamura BA
                    </div>
                    <div className="contatto d-flex flex-row " style={{color:"#84919F",fontSize:"1vw"}}>
                        <img className="me-3" src="Icons/icone footer/email.svg"></img>
                        info@focuscon.it
                    </div>
                    <div className="contatto d-flex flex-row">
                        <div className="d-flex flex-column me-3">
                            <label className="mb-3">Il tuo nome</label>
                            <input id="nome" type="text" className="form-control  my-btn w-100" placeholder="E.g. Mario Rossi"  style={{fontSize:"0.8vw"}}/>
                        </div>
                        <div className="d-flex flex-column">
                            <label className="mb-3">La tua mail</label>
                            <input id="mail" type="text" className="form-control  my-btn w-100" placeholder="E.g. mariorossi@gmail.com"  style={{fontSize:"0.8vw"}}/>
                        </div>
                    </div>
                    <div className="contatto d-flex flex-column w-100">
                        <label className="mb-3">Il tuo messaggio</label>
                        <textarea id="messaggio" type="text" className="form-control my-btn w-100" placeholder="Eg. Spett.bile Focus Consulting, vorrei avere più informazioni riguardo ad una certificazione:" style={{fontSize:"0.8vw"}}/>
                    </div>
                    <button className="btn w-100 mb-5" style={{backgroundColor:"#036456",color:"white",height:"3.2vw",}} onClick={sendEmail}>INVIA IL TUO MESSAGGIO</button>
                </div>
            </div>
            <div className="div-dx w-50 h-100">
                <iframe className="h-100 w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.1808544990445!2d16.55482151565796!3d40.82399103869304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347876d4109f25b%3A0x9803a7d585c6bfc1!2sVia%20Taranto%2C%201C%2C%2070022%20Altamura%20BA!5e0!3m2!1sit!2sit!4v1634414605872!5m2!1sit!2sit" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
            </div>
    </div>;
}

function sendEmail(){
    const nome=document.getElementById("nome").value || "Mario Rossi";
    const mail=document.getElementById("mail").value || "mariorossi@gmail.com";
    const mess=document.getElementById("messaggio").value || "Spett.bile Focus Consulting, in seguito ad una ricerca sul vostro bellissimo sito web sono interessato a una collaborazione, vorrei fissare un appuntamento e/o avere più informazioni riguardo ad una certificazione. Vi saluto con l'augurio di una buona giornata";
    const mailto= "info@focuscon.it";
    window.open('mailto:'+mailto+'?subject=Richiesta informazioni da '+nome+"&body="+mess+"%0APuoi rispondermi all'indirizzo: %0A"+mail+'');

}

export default Contatti;