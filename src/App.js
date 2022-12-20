import './App.css'
import Trucks from './Trucks/Trucks';
import Form from "./Form/Form";
import {useState} from "react";

const trucks = []

function App() {

    const [myTrucks, setMyTrucks] = useState(trucks)

    return (
        <>
            <h1>Trucks</h1>
            <Trucks trucks={myTrucks}/>
            <Form trucks={myTrucks} refresher={setMyTrucks}/>
        </>
    );
}

export default App;
