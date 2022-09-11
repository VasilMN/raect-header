import { Component } from "react";
import { Navigate } from 'react-router-dom'


export class PrivetRoute extends Component {
    render() {
        const { component } = this.props;
        const token = localStorage.getItem("token");
        if (token) {  
            return  component;
        }
        return <Navigate to ="/login" />
    }
}