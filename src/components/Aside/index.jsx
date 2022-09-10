import { Component } from "react";
import styles from "./Aside.module.scss"
import logo from "../../assets/icons/logo_nextly.svg";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export class Aside extends Component {
    render () {
        const {isopenaside} = this.props;
        return <aside  className={
            cx ("conteiner",  {open: isopenaside})
        }> 
          <a href="#">
                        <img src={logo} alt="alt" />
                        
                    </a>
                 
        </aside>
            
    }
}