import './TruckInfo.css'
const TruckInfo = props => {
    const truck = props.truck
    return (
        <ul className="list">
            <li>{`id:${truck.id}`}</li>
            <li>{`parcels:${truck.load} Parcels`}</li>
            <li>{`Weight:${truck.weight} Kg`}</li>
        </ul>
    )
}

export default TruckInfo