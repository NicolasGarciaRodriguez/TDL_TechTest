import React from 'react'
import { IFilm } from '../../pages/films/Films.interface'
import './FilmsCard.styles.scss';

const filmCardComponent = ({apiData}) => {
  return (
    <>
      {apiData.map((film: IFilm, index) => (
          <div key={index} className='film_card'>
              <h2 className='film_name'>{film.title}</h2>
              <div className='film_info'>
                <p><strong>Director:</strong>{film.director}</p>
                <p><strong>Producer:</strong>{film.producer}</p>
                <p><strong>Release date:</strong>{film.release_date}</p>
              </div>
          </div>
      ))}
    </>
  )
}

export default filmCardComponent