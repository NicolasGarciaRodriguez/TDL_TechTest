import React from 'react'
import { IVehicle } from '../../pages/vehicles/Vehicles.interface'
import './VehicleCard.styles.scss';

const VehicleCardComponent = ({apiData}) => {
  return (
    <>
        {apiData.map((vehicle: IVehicle, index) => {
        return(
            <div key={index} className='vehicle_card'>
                <h2>{vehicle.name}</h2>
                <p>Cargo capacity: {vehicle.cargo_capacity}</p>
                <p>Consumables: {vehicle.consumables}</p>
                <p>Cost in credits: {vehicle.cost_in_credits}</p>
                <p>Model: {vehicle.model}</p>
                <p>Passengers: {vehicle.passengers}</p>
            </div>
        )
    })}
    </>
  )
}

export default VehicleCardComponent