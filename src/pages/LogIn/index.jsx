import { Component } from "react";
import styles from "./LogIn.module.scss"

export class LogIn extends Component {
    render() {
        return <div className={styles.LogIn}>
            <form className={styles.form} >
                <p className={styles.label} >Log In</p>
                <label className={styles.text} >Username  </label>
                <input className={styles.input} 
                   type="text" 
                   placeholder="Username" />
                <label className={styles.text} >password  </label>
                <input className={styles.input} 
                    type="password" 
                    placeholder="password" />
                <button className={styles.button}>login</button>
            </form>
        </div>
    }
}