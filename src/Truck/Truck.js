import './Truck.css'
import TruckInfo from "../TruckInfo/TruckInfo";
const Truck = props => {
    
    const truck = props.truck
        return <TruckInfo truck={truck} />
}

export default Truck;