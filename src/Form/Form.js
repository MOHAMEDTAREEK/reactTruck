import {useState} from "react";
import './Form.css'

const Form = props => {

    

    
 const [enterdId, setEnterdId] = useState('')
 const [enterdParc, setEnterdParc] = useState('')
 const [enterdWeight, setEnterdWeight] = useState('')

    const idInputHandler = (event) => {
        setEnterdId(event.target.value)
      }
      const parcInputHandler = (event) => {
        setEnterdParc(event.target.value)
      }
      const weightInputHandler = (event) => {
        setEnterdWeight(event.target.value)
      }

    const addParcels  = (event) => {
      event.preventDefault()
      const truck = props.trucks.find(truck => truck.id === Number(enterdId))

      if (truck) {
        truck.load += Number(enterdParc)
        truck.weight += Number(enterdParc) * Number(enterdWeight)

          const editedTrucks = [...props.trucks]

          props.refresher(editedTrucks)
      } 
      else {

          const newTruck = {
              id: Number(enterdId),
              load: Number(enterdParc),
              weight: Number(enterdParc) * Number(enterdWeight)
          }

          const newTrucks = [...props.trucks, newTruck]
          props.refresher(newTrucks)

      }
    }
       
    const removeParcels = (event) => {
      event.preventDefault()
      const truck = props.trucks.find(truck => truck.id === Number(enterdId))

      try {
          if (truck) {

              if (truck.load > 0) {
                  if (Number(enterdParc) <= truck.load && Number(enterdParc) * Number(enterdWeight) <= truck.weight) {

                    truck.load -= Number(enterdParc)
                    truck.weight -= Number(enterdParc) * Number(enterdWeight)

          const editedTrucks = [...props.trucks]
            props.refresher(editedTrucks)

                  }
                   else {
                      throw Error('Please,try smaller numbers')
                  }
              } 
              else {
                truck.load = 0
                truck.weight = 0
                  throw Error("Truck is Empty")
              }
          }
           else {
              throw Error("Truck Not Found")
          }

      } 
      catch (err) {
          console.log(err.message)
      }
  }



    return (
        <div className='form-container '>
        <label htmlFor={"id"}>id</label>
        <input id='id' placeholder='id' onChange={idInputHandler} type="number"/>
        <label htmlFor={"parcels"}>parcels</label>
        <input id='parcels' placeholder='parcels' onChange={parcInputHandler} type="number"/>
        <label htmlFor={"weight"}>weight</label>
        <input  id='weight' placeholder='weight' onChange={weightInputHandler} type="number"/>
        <div className='btn-container'>
         <button id="add" onClick={addParcels }>load</button>
         <button id="remove" onClick={removeParcels}>unload</button>
        </div>
       </div>
    )
}

export default Form