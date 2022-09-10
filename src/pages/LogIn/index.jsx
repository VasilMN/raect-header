import { Component } from "react";
import { Form } from "../../common/Form";
import styles from "./LogIn.module.css"

export class LogIn extends Component {
    render () {
        return <div className={styles.LogIn}>
            <Form />
        </div>
    }
}