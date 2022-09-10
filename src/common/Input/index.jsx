import { Component } from "react";
import styles from  "./Input.module.css"

export class Input extends Component {
    render () {
        console.log(this.props)
                return <>
        
        <input className={styles.input} type= {this.props.tayp} />
        </>  
    }
}