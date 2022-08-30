import { Component } from "react";
import styles from "./Nav.module.css"

export class Nav extends Component {
    render () {
        return <nav className="" >
        <ul className= {styles.links} >
          <li className={styles.link} >
            <a href="#">about</a>
          </li>
          <li className={styles.link} >
            <a href="#">work</a>
          </li>
          <li className={styles.link}>
            <a href="#">cases</a>
          </li>
          <li className={styles.link}>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    }
}