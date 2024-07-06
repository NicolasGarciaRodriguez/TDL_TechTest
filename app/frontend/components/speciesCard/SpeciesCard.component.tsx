import React from 'react'
import { ISpecie } from '../../pages/Species/Species.interface'
import './SpeciesCard.styles.scss';

const SpeciesCardComponent = ({apiData}) => {
  return (
    <>
      {apiData.map((specie: ISpecie, index) => (
          <div key={index} className='specie_card'>
              <h2 className='specie_name'>{specie.name}</h2>
              <div className='specie_info'>
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