import { Component } from "react";
import { Form } from "../../common/Form";
import styles from "./LogIn.module.scss"

export class LogIn extends Component {
    render () {
        return <div className={styles.LogIn}>
            <Form />
        </div>
    }
}