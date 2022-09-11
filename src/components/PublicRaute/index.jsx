import { Component } from "react";
import { Navigate } from 'react-router-dom'


export class PublicRoute extends Component {
    render() {
        const { component } = this.props;
        const token = localStorage.getItem("token");
        if (token) {  
          return <Navigate to ="/" />;
        }
        return component;
    }
}