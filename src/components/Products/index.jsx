import { Component } from "react";
import  Cars  from "../Cars";
import  Phons  from "../Phons";
import styles from "./Products.module.scss"

export class Product extends Component {
    render () {
        return  <div className={styles.conteiner}>
            <Phons />
            <Cars />
        </div>
    }
}