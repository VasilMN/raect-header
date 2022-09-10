import { Component } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./Form.module.css"

export class Form extends Component {
    render () {
        return <>
           
        <form className={styles.form} action="">
            <p className={styles.label} >Log In</p>   
        <label className={styles.text} >Username  </label>
        <Input  tayp ={"text"} />
        <label className={styles.text} >password  </label>
        <Input tayp ={"password"} />
        <Button />

        
     </form></>
    }
}