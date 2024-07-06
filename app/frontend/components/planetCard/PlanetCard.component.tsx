import React from 'react'
import { IPlanet } from '../../pages/planets/Planets.interface'
import './PlanetCard.styles.scss';

const PlanetCardComponent = ({apiData}) => {
  return (
    <>
      {apiData.map((planet: IPlanet, index) => (
        <div key={index} className='planet_card'>
          <h2 className='planet_name'>{planet.name}</h2>
          <div className='planet_info'>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Diameter:</strong> {planet.diameter}</p>
            <p><strong>Gravity:</strong> {planet.gravity}</p>
            <p><strong>Orbital Period:</strong> {planet.orbital_period}</p>
            <p><strong>Population:</strong> {planet.population}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default PlanetCardComponent