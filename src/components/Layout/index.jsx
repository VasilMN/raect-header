import { Component } from "react";
import { Header } from "../Header";
import {Routes,Route} from "react-router-dom"
import { Users } from "../../pages/About";
import { Counter } from "../../pages/Counter";
import  SingUp  from "../../pages/SingUp";
import styles from "./Layout.module.scss"
import  LogIn  from "../../pages/LogIn";
import { Home } from "../../pages/Home";
import { Aside } from "../Aside";
import classNames from "classnames/bind";
import { PrivetRoute } from "../PrivetRoute";
import { PublicRoute } from "../PublicRaute";
import { Product } from "../Products";

const cx = classNames.bind(styles)

export class Layout extends Component {
  state = {
    isopenaside: false,
   }
   
   toggleAside = () => {
    this.setState ({isopenaside: !this.state.isopenaside})
  }
  render () {
    const {isopenaside} = this.state;
    
    return <div className={cx("", {openaside:isopenaside})}>
    <Aside isopenaside = {isopenaside} />
    <Header toggleAside = {this.toggleAside} isopenaside = {isopenaside} />
   
    <div className={cx("conteiner", {open: !isopenaside})}>
      
    <Routes>
      <Route path="/" 
      element = {<PrivetRoute component ={<Home />} />}  
      />
      <Route 
            path="/users" 
            element= {<PrivetRoute component ={<Users />} />}
            />
            <Route 
            path="/product" 
            element= {<PrivetRoute component ={<Product />} />}
            />
      <Route path="/counter" element=  {<Counter />} /> 
    
      <Route path="/singup" element=  {<SingUp /> } />
      <Route path="/login" 
      element= {<PublicRoute component = {<LogIn /> } />} 
      />
    </Routes>
    </div>
    </div> 
    
  }
}