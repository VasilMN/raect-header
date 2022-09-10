import { Component } from "react";
import styles from "./Button.module.css"

export class Button extends Component {
    render () {
        return <button className={styles.button}>Log In</button>
    }
}