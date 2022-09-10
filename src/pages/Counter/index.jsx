import { Component } from "react";
import styles from "./Counter.module.css"

export class Counter extends Component {
     
    constructor () {
        super();
       this.state = {
        count: 0,
        color: "black"
     }
     this.plus = this.plus.bind(this);
     this.minus = this.minus.bind(this);
     this.changecolor = this.changecolor.bind(this);
    }
changecolor ()    {
    const  {color} = this.state
   color === "black" ? this.setState ({color: "red"}) :this.setState ({color: "black"})
    
  }

 plus  ()  {
    this.setState({count: this.state.count + 1});
 }
 minus  ()  {
    if (this.state.count > 0){
    this.setState({count: this.state.count - 1});
    } 
 }
 
    render () {
      console.log ("ok")
        return <main className={styles.counter}>
           <div className={styles.conteiner}>
            <div className={styles.content} >
                <div>
                 <button onClick={this.plus}>
                    plus
                    </button>
                 <button onClick={this.minus} >minus</button>
                 <button onClick={this.changecolor}>
                    changecolor
                 </button>
 
                 <h1 style={{color: this.state.color}}>{this.state.count }</h1>
                </div>
            </div>
           </div>
        </main>
    }
}