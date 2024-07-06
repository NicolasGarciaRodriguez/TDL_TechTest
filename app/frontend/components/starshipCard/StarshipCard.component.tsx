import React from 'react'
import './StarshipCard.styles.scss';
import { IStarship } from '../../pages/starships/Starships.interface';

const StarshipCardComponent = ({apiData}) => {
  return (
    <>
        {apiData.map((starship: IStarship, index) => {
        return(
            <div key={index} className='starship_card'>
                <h2>{starship.name}</h2>
                <p>Cargo capacity: {starship.cargo_capacity}</p>
                <p>Cost in credits: {starship.cost_in_credits}</p>
                <p>Crew: {starship.crew}</p>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Passengers: {starship.passengers}</p>
            </div>
        )
    })}
    </>
  )
}

export default StarshipCardComponent