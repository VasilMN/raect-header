import { Component } from "react";
import styles from "./Phons.module.scss";
import {withSearch  } from "../../hocs/withFilter"
const phons = 
[{name: "Samsung", id: 1},
 {name: "Iphon", id: 2},
 {name: "Soni", id: 3},
 {name: "Xiaomi", id: 4},
 {name: "Asus", id: 5},
 {name: "Motorola", id: 6},
 {name: "Nokia", id: 7},
 {name: "Huawei", id: 8},
 {name: "Vertu", id: 9}
 ]

 class Phons extends Component {
  
    render () {
  const { filtereditems } = this.props
  console.log (this.props)
        return <div className={styles.conteiner}>
        
                {filtereditems.map((phone, index )=> 
                <div key={phone.id} className={styles.Phons}> 
                     <h2>{index +1 }.</h2>
                    <h2>{ phone.name}</h2> 
                </div>
               )}
        </div>
    }
}
export default withSearch(Phons,phons);