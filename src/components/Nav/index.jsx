import { Component } from "react";
import { NavLink } from "react-router-dom"
import styles from "./Nav.module.scss"
import { getActivClassName } from "./utils";

export class Nav extends Component {
  render() {
    return <nav className="" >
      <ul className={styles.links} >
      <li className={styles.link}>
          <NavLink className={getActivClassName} to="/">Home</NavLink>

        </li>
        <li className={styles.link} >

          <NavLink className={getActivClassName}  to="/users">Users</NavLink>
        </li>
        <li className={styles.link} >

           <NavLink className={getActivClassName}  to="/product">Product</NavLink>
        </li>
        <li className={styles.link} >

          <NavLink className={getActivClassName  }
            to="/counter">

            Counter
          </NavLink>

        </li>
        <li className={styles.link}>

          <NavLink className={getActivClassName} to="/singup">Sing Up</NavLink>

        </li>
        <li className={styles.link}>

          <NavLink className={getActivClassName} to="/login">Log In</NavLink>

        </li>
       
      </ul>
    </nav>
  }
}