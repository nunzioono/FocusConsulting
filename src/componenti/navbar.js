import { Component } from "react";
import "../css/navbar.css";

function Navbar(props) {

      var path;
      props.route==1?path="/":path="../";

        return <div id="navbar" className="position-relative navbar-container d-flex justify-content-center w-100" style={{zIndex:"10"}}>
        <nav className="navbar navbar-expand-lg navbar-light w-75">
          <div className="container-fluid">
                <a className="navbar-brand d-flex flex-row align-items-center justify-content-start" href="/" onClick={()=>{props.routeCallback(1)}}>
                  { props.route!=1 && 
                    <img className="me-3" alt="" src={path+"/Icons/back-navbar.svg"} width="15" height="15"></img>
                  }
                  <img className="me-3" alt="" src={path+"logo.png"} width="30" height="30"></img>
                  <p className="fw-light mb-0">Focus Consulting srl</p>
                </a>
              { props.route==1 &&
                <>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
                  <ul className="navbar-nav">
                    <li className="nav-item me-2">
                      <a className="nav-link active" href="#chi-siamo">Chi Siamo</a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link active" href="#servizi">Servizi</a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link active" onClick={()=>{props.routeCallback(2)}}>Contatti</a>
                    </li>
                  </ul>
                </div>
                </>
              }
            </div>
          </nav>
        </div>;

}

export default Navbar;