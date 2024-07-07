import React from 'react'
import { IPeople } from '../../pages/people/People.interface'
import './PeopleCard.styles.scss';

const PeopleCardComponent = ({apiData}) => {
  return (
    <>
      {apiData.map((people: IPeople, index) => (
        <div key={index} className="people-card">
          <h2 className="people-card__name">{people.name}</h2>
          <div className="people-card__info">
            <p><strong>Birth year:</strong> {people.birth_year}</p>
            <p><strong>Eye color:</strong> {people.eye_color}</p>
            <p><strong>Gender:</strong> {people.gender}</p>
            <p><strong>Height:</strong> {people.height}</p>
            <p><strong>Skin color:</strong> {people.skin_color}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default PeopleCardComponent