import { Component } from "react";
import { Nav } from "../Nav";
import styles from "./Header.module.scss";



export class Header extends Component {
  
    render() {
        
        return <div className= {styles.header}>
            <div className={styles.container}>
                <div className= {styles.content}>
                   <div>
                  
                   <button onClick={this.props.toggleAside}>OpenAside</button>
                  
                    
                   </div>
                   <Nav />
                </div>
            </div>
          
        </div>
       
    }
}