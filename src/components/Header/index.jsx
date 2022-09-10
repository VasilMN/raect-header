import { Component } from "react";
import { Nav } from "../Nav";
import styles from "./Header.module.css";
import logo from "../../assets/icons/logo_nextly.svg"


export class Header extends Component {
  
    render() {
        
        return <div className= {styles.header}>
            <div className={styles.container}>
                <div className= {styles.content}>
                   <div>
                  
                    <a href="#">
                        <img src={logo} alt="alt" />
                        
                    </a>
                  
                    
                   </div>
                   <Nav />
                </div>
            </div>
          
        </div>
       
    }
}