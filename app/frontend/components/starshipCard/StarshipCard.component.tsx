import React from 'react'
import './StarshipCard.styles.scss';
import { IStarship } from '../../pages/starships/Starships.interface';

const StarshipCardComponent = ({apiData}) => {
  return (
    <>
      {apiData.map((starship: IStarship, index) => (
          <div key={index} className='starship_card'>
              <h2 className='starship_name'>{starship.name}</h2>
              <div className='starship_info'>
                <p><strong>Cargo capacity:</strong>{starship.cargo_capacity}</p>
                <p><strong>Cost in credits:</strong>{starship.cost_in_credits}</p>
                <p><strong>Crew:</strong>{starship.crew}</p>
                <p><strong>Manufacturer:</strong>{starship.manufacturer}</p>
                <p><strong>Passengers:</strong>{starship.passengers}</p>
              </div>
          </div>
    ))}
    </>
  )
}

export default StarshipCardComponent