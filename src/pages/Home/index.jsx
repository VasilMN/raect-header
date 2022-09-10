import { Component } from "react";
import styles from "./Home.module.scss";
import logo from "../../assets/image/home.jpg"

export class Home extends Component {
    render () {
        return <><img className={styles.withe} src={logo} alt="alt" /> </>
    }
}