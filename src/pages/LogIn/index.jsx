import { Component } from "react";
import styles from "./LogIn.module.scss"
import { withRaouter} from "../../hocs/withrouter"

class LogIn extends Component {
    state = {
        username: '',
        password:'',
    }
hendelChange = (evnet) => {
const { name, value} = evnet.target;
this.setState({[name]: value})
}

hendelSubmit = (event) => {
  event.preventDefault();
  const { username, password} = this.state;
  const {navigat} = this.props;
 const usres = JSON.parse( localStorage.getItem("users") || "[]");
 const foundUser = usres.find(
    (user) => user.username === username && user.password === password 
    )

 if (foundUser) {
    localStorage.setItem("token", true)
   return navigat("/users");
 }
 return navigat("/singup");
}

    render() {
        const { username, password} = this.state;

        return <div className={styles.LogIn}>
            <form className={styles.form}  onSubmit={this.hendelSubmit} >
                <p className={styles.label} >Log In</p>
                <label className={styles.text} >Username  </label>

                <input className={styles.input} 
                   type="text" 
                   placeholder="Username"
                   name="username" 
                   value={username}
                   onChange= {this.hendelChange}/>

                <label className={styles.text} >password  </label>

                <input className={styles.input} 
                    type="password" 
                    placeholder="password"
                    name="password"
                    value={password} 
                    onChange= {this.hendelChange}/>

                <button disabled={!username || !password} className={styles.button}>login</button>
            </form>
        </div>
    }
}

export default withRaouter(LogIn);