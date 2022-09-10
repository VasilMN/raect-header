import { Component } from "react";
import styles from  "./Input.module.scss"

export class Input extends Component {
    render () {
       
                return <>
        
        <input className={styles.input} type= {this.props.tayp} />
        </>  
    }
}