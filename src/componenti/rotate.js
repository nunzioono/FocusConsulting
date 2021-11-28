import "../css/rotate.css";

function Rotate(){
    return (
        <div id="rotate" className="d-flex justify-content-center align-items-center vh-100 w-100 pb-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Ruota lo schermo!</h1>
                <div className="rounded-circle my-3" style={{backgroundColor:"#e6faee"}}>
                    <img alt="" className="p-3" src="Icons/screen_rotation.svg" style={{width:"8vh"}}></img>
                </div>
                <p className="text-center">
                    Questo contenuto è disponibile solo per schermi orizzontali,<br/>
                    se hai già provato ma non visualizzi ancora la pagina prova a disattivare il<br/>
                    blocco rotazione schermo o visita il nostro sito da <span>computer</span>
                </p>
            </div>
        </div>
    );
}

export default Rotate;