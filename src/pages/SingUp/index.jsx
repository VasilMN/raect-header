import { Component } from "react";
import styles from "./SingUp.module.scss";
import { withRaouter } from "../../hocs/withrouter"


 class SingUp extends Component {
    state = {
        username: "",
        password: "",
       
    }
    hendelChange = (event) => {
        const { name, value} = event.target;
        this.setState({[name]: value})

    
    }
    hendelSubmit = (event)=> {
        event.preventDefault();
        const { username, password} = this.state;
         const users = JSON.parse(localStorage.getItem('users') || "[]");

         const founduserindex = users.findIndex((user) =>user.username === username);

         if (founduserindex >=0) {
            return
         } 
        localStorage.setItem("users",
         JSON.stringify([...users, {username, password}])
         )
        this.setState({username: '', password: '' , })
        return  this.props.navigat("/login")
    }

    render () {
        const { username, password, } = this.state;
        return  <div className={styles.SingUp}>
       <form onSubmit={this.hendelSubmit} className={styles.form} >
                <p className={styles.label} >Sing Up</p>
                <label className={styles.text} >Username  </label>
                <input className={styles.input} 
                   type="text" 
                   placeholder="Username" 
                   name="username"
                   onChange={this.hendelChange}
                   value= {username}/>
                <label className={styles.text} >password  </label>
                <input className={styles.input} 
                    type="password" 
                    placeholder="password" 
                    name="password"
                    onChange={this.hendelChange}
                    value= {password}/>
                <button disabled={!password || !username} className={styles.button}>SingUp</button>
            </form>
    </div>
    
}
    }
export default withRaouter(SingUp)