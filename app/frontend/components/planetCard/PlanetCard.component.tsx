import React from 'react'
import { IPlanet } from '../../pages/planets/Planets.interface'
import './PlanetCard.styles.scss';

const PlanetCardComponent = ({apiData}) => {
  return (
      <>
        {apiData.map((planet: IPlanet, index) => (
          <div key={index} className="planet-card">
            <h2 className="planet-card__name">{planet.name}</h2>
            <div className="planet-card__info">
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