import React from 'react'
import { IVehicle } from '../../pages/vehicles/Vehicles.interface'
import './VehicleCard.styles.scss';

const VehicleCardComponent = ({apiData}) => {
  return (
    <>
      {apiData.map((vehicle: IVehicle, index) => (
          <div key={index} className='vehicle_card'>
              <h2 className='vehicle_name'>{vehicle.name}</h2>
              <div className='vehicle_info'>
                <p><strong>Cargo capacity:</strong>{vehicle.cargo_capacity}</p>
                <p><strong>Consumables:</strong>{vehicle.consumables}</p>
                <p><strong>Cost in credits:</strong>{vehicle.cost_in_credits}</p>
                <p><strong>Model:</strong>{vehicle.model}</p>
                <p><strong>Passengers:</strong>{vehicle.passengers}</p>
              </div>
          </div>
    ))}
    </>
  )
}

export default VehicleCardComponent