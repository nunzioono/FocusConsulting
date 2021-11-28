import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../css/navbar.css";

function Navbar(props) {

        let path;
        !props.match.path.includes("contatti")&&!props.match.path.includes("servizi")?path="/":path="../";

        return <div id="navbar" className="position-relative navbar-container d-flex justify-content-center w-100" style={{zIndex:"10"}}>
        <nav className="navbar navbar-expand-lg navbar-light w-75">
          <div className="container-fluid">
                <Link to="/" style={{textDecoration: "none"}}>
                  <div className="navbar-brand d-flex flex-row align-items-center justify-content-start">
                    { props.match.path!=="/" && 
                      <img className="me-3" alt="" src={path+"/Icons/back-navbar.svg"} width="15" height="15"></img>
                    }
                    <img className="me-3" alt="" src={path+"logo.png"} width="30" height="30"></img>
                    <p className="fw-light mb-0">Focus Consulting srl</p>
                  </div>
                </Link>
              { props.match.path==="/" &&
                <>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
                  <ul className="navbar-nav justify-content-between">
                    <li className="nav-item me-2">
                      <HashLink to="#chi-siamo" style={{textDecoration: "none", color: "black"}}>Chi Siamo</HashLink>
                    </li>
                    <li className="nav-item me-2">
                      <HashLink to="#servizi" style={{textDecoration: "none", color: "black"}}>Servizi</HashLink>
                    </li>
                    <li className="nav-item me-2">
                      <Link to="/contatti" style={{textDecoration: "none", color: "black", fontWeight: "400"}}>Contatti</Link>
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