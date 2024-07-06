import React from 'react'
import { IPeople } from '../../pages/people/People.interface'
import './PeopleCard.styles.scss';

const PeopleCardComponent = ({apiData}) => {
  return (
    <>
        {apiData.map((people: IPeople, index) => {
        return(
            <div key={index} className='people_card'>
                <h2>{people.name}</h2>
                <p>Birth year: {people.birth_year}</p>
                <p>Eye color: {people.eye_color}</p>
                <p>Gender: {people.gender}</p>
                <p>Height: {people.height}</p>
                <p>Skin color: {people.skin_color}</p>
            </div>
        )
    })}
    </>
  )
}

export default PeopleCardComponent