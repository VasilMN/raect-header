import { Component } from "react";


import styles from "./Form.module.scss"

export class Form extends Component {
    render () {
        return <>
           
        <form className={styles.form} >
            <p className={styles.label} >Log In</p>   
        <label className={styles.text} >Username  </label>
      
        <label className={styles.text} >password  </label>
        
      

        
     </form></>
    }
}