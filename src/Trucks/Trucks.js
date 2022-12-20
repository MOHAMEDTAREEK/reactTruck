import './Trucks.css'
import Truck from "../Truck/Truck"


const Trucks = props => {

    const truckList = props.trucks.filter(truck => truck.load > 0)

    return (
        <div id='trucks'>
            { truckList.map(truck => <Truck truck={truck} key={truck.id}/>) }
        </div>
    )
}

export default Trucks