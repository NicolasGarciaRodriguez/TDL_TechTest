import React from 'react'
import { IPlanet } from '../../pages/planets/Planets.interface'
import './PlanetCard.styles.scss';

const PlanetCardComponent = ({apiData}) => {
  return (
    <>
        {apiData.map((planet: IPlanet, index) => {
        return(
            <div key={index} className='planet_card'>
                <h2>{planet.name}</h2>
                <p>Climate: {planet.climate}</p>
                <p>Diameter: {planet.diameter}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Orbital period: {planet.orbital_period}</p>
                <p>Population: {planet.population}</p>
            </div>
        )
    })}
    </>
  )
}

export default PlanetCardComponent