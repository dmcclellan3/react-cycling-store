import { Link } from "react-router-dom"
import axios from 'axios'
import {useEffect} from 'react' 
import {useState} from 'react'

const vehicleList = ({ vehicles }) => {
  return vehicles.list > 0 ? (
    <div>
      <h2>Vehicles</h2>
      {vehicles.map(vehicle => {
        return (
          <div key={vehicle.id}>
           {vehicle.id} - {vehicle.name}
          </div>
        )
      })}
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const NewVehicle = ({ getVehicles }) => {
  const [name, setName] = useState('')

  const createVehicle= () => {
    axios.post('http://127.0.0.1:8000/vehicles/', {
      name: name
    })
    .then(response => {
      console.log('RESPONSE: ', response)
      if(response.status === 200) {
        setName('')
        getVehicles()
      }
    })
    .catch(error => console.log('ERROR: ', error))
  }
}

  return (
    <div>
      <h2>Create A New Vehicle</h2>
      <input 
      onChange={e => setName(e.target.value)}
      placeholder='enter vehicle'
      value={vehicle}
      />
      <button onClick={() => createVehicle()}>
        Create Vehicle
      </button>
    </div>
  )

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}

function App() {
  return (
    <div className="p-5">
      <vehicleList vehicles={vehicles} />
      
    </div>
  )
}


export default App
