import React from 'react'
import { ISpecie } from '../../pages/Species/Species.interface'
import './SpeciesCard.styles.scss';

const SpeciesCardComponent = ({apiData}) => {
  return (
    <>
        {apiData.map((specie: ISpecie, index) => {
        return(
            <div key={index} className='specie_card'>
                <h2>{specie.name}</h2>
                <p>Language: {specie.language}</p>
                <p>Avg Height: {specie.average_height}</p>
                <p>Classification: {specie.classification}</p>
                <p>Designation: {specie.designation}</p>
            </div>
        )
    })}
    </>
  )
}

export default SpeciesCardComponent