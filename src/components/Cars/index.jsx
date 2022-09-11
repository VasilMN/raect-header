import { Component } from "react";
import styles from "./Cars.module.scss";
import { withSearch} from "../../hocs/withFilter"

const cars = 
[{name: "BMW", id: 1},
 {name: "Lada", id: 2},
 {name: "Audi", id: 3},
 {name: "Opel", id: 4},
 {name: "GAZ", id: 5},
 {name: "Lexus", id: 6},
 {name: "Porsche", id: 7},
 {name: "Tesla", id: 8},
 {name: "Mazda", id: 9}
 ]
class Cars extends Component {
    render () {
  const { filtereditems } = this.props
        
        return <div className={styles.conteiner}>
                   {filtereditems.map((car,index ) => 
                <div key={car.id} className={  styles.flex}>    
                  <h1>{index +1}.</h1> 
                <h2>{ car.name}</h2>
                </div>
              
                   )}
        </div>
    }
}
export default withSearch(Cars, cars)