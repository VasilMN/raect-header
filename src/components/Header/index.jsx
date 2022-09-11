import { Component } from "react";
import { Nav } from "../Nav";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
 
const cx = classNames.bind(styles)


export class Header extends Component {
  
    render() {
        const {isopenaside} = this.props
        return <div className= {cx("header",{header1: !isopenaside})}>
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