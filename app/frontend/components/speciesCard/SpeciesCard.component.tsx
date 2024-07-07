import React from 'react'
import { ISpecie } from '../../pages/Species/Species.interface'
import './SpeciesCard.styles.scss';

const SpeciesCardComponent = ({apiData}) => {
  return (
      <>
        {apiData.map((specie: ISpecie, index) => (
          <div key={index} className="specie-card">
            <h2 className="specie-card__name">{specie.name}</h2>
            <div className="specie-card__info">
              <p><strong>Language:</strong> {specie.language}</p>
              <p><strong>Avg Height:</strong> {specie.average_height}</p>
              <p><strong>Classification:</strong> {specie.classification}</p>
              <p><strong>Designation:</strong> {specie.designation}</p>
            </div>
          </div>
        ))}
      </>
  )
}

export default SpeciesCardComponent