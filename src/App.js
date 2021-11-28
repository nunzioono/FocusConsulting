import Homepage from "./componenti/homepage";
import Navbar from "./componenti/navbar";
import Rotate from "./componenti/rotate";
import Footer from "./componenti/footer";
import Contatti  from "./componenti/contatti";
import Servizio  from "./componenti/servizio";
import { Component } from "react";

class App extends Component {

  constructor(){
    super();
    this.state={
      route:1,
      service:0,
      screenSize: { 
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      },
      screenOrientation: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)>Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)?"horizontal":"vertical",
    }
    this.routeCallback= (newRoute,newService = 0)=>{
      window.scrollTo(0,0);
      this.setState({route: newRoute});
      if(newRoute==3 && newService!=0){
        this.setState({
          service: newService
        });  
      }
    }
    window.addEventListener("orientationchange",()=>{
      this.setState({
        screenOrientation: this.state.screenOrientation=="horizontal"?"vertical":"horizontal"
      })
    })
  }

  render (){
    this.vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    return <div className="position-relative">
      <Navbar route={this.state.route} routeCallback={this.routeCallback}/>
      {this.state.screenOrientation=="horizontal" && <div className="App container-fluid position-relative p-0">
      { this.state.route==1 &&
            <Homepage routeCallback={this.routeCallback}/>
      }
      { this.state.route==2 && <Contatti/>}
      { this.state.route==3 && <Servizio index={this.state.service} routeCallback={this.routeCallback}/>}
      </div>}
      {this.state.screenOrientation=="vertical"&&<Rotate></Rotate>}
      <Footer/>
    </div>;
  }

}

export default App;
