import { Component } from "react";
import { Header } from "./components/Header";
import {Routes,Route} from "react-router-dom"
import { About } from "./pages/About";
import { Counter } from "./pages/Counter";
import { SingUp } from "./pages/SingUp";
import { LogIn } from "./pages/LogIn";
import { Home } from "./pages/Home";
import { Aside } from "./components/Aside";

export class App extends Component {
  state = {
    isopenaside: false,
   }
   
   toggleAside = () => {
    this.setState ({isopenaside: !this.state.isopenaside})
  }
  render () {
    
   
    return <>
    <Aside isopenaside = {this.state.isopenaside} />
    <Header toggleAside = {this.toggleAside} />
   
    <div className="conteienr">
    <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/about" element= {<About />}></Route>
      <Route path="/counter" element= {<Counter />}></Route>
      <Route path="singup" element= {<SingUp />}></Route>
      <Route path="login" element= {<LogIn />}></Route>
    </Routes>
    </div>
    </> 
    
  }
}