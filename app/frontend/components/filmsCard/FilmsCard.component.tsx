import React from 'react'
import { IFilm } from '../../pages/films/Films.interface'
import './FilmsCard.styles.scss';

const filmCardComponent = ({apiData}) => {
  return (
    <>
        {apiData.map((film: IFilm, index) => {
        return(
            <div key={index} className='film_card'>
                <h2>{film.title}</h2>
                <p>Director: {film.director}</p>
                <p>Producer: {film.producer}</p>
                <p>Release date: {film.release_date}</p>
            </div>
        )
    })}
    </>
  )
}

export default filmCardComponent