import Homepage from "./componenti/homepage";
import Navbar from "./componenti/navbar";
import Rotate from "./componenti/rotate";
import Footer from "./componenti/footer";
import Contatti  from "./componenti/contatti";
import Servizio  from "./componenti/servizio";
import { Component } from "react";
import { Switch, Route, Redirect } from "react-router";

class App extends Component {

  constructor(){
    super();
    this.state={
      screenSize: { 
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      },
      screenOrientation: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)>Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)?"horizontal":"vertical",
    }
    window.addEventListener("orientationchange",()=>{
      this.setState({
        screenOrientation: this.state.screenOrientation==="horizontal"?"vertical":"horizontal"
      })
    })
  }

  render (){

    return <div className="position-relative">
          {this.state.screenOrientation==="horizontal" && <div className="App container-fluid position-relative p-0">
            <Switch>
              <Route exact path="/" render={(props)=>
                <>
                  <Navbar {...props}/>
                  <Homepage {...props}/>
                </>
              }/>
              <Route path="/contatti" render={(props)=>
                <>
                  <Navbar {...props}/>
                  <Contatti {...props}/>
                </>
              }/>
              <Route path="/servizi/:id" render={(props)=>parseInt(props.match.params.id)>=1&&parseInt(props.match.params.id)<7?<><Navbar {...props}/><Servizio {...props}/></>:<Redirect to="/"/>}/>
            </Switch>
          </div>}
          {this.state.screenOrientation==="vertical"&&<Rotate></Rotate>}
          <Footer/>
        </div>;
  }

}

export default App;
