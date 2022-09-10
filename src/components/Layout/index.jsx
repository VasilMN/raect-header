import { Component } from "react";
import { Aside } from "../Aside";
import { Header } from "../Header";


export class Layout extends Component {
    render () {
        return <>
        <Header />
        <Aside />       
        </>
    }
}