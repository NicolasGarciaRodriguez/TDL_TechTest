import React, { useCallback, useEffect, useState } from 'react'
import { IFilm } from './Films.interface';
import { FilmsService } from './Films.service';
import FilmCardComponent from '../../components/filmsCard/FilmsCard.component';
import './Films.styles.scss';

const FilmsComponent = () => {

    const [Films, setFilms] = useState<IFilm[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const getFilms = async (page: number) => {
      if (page > 6) {
        return;
      }
        setLoading(true)
        try {
            const response = await FilmsService(page);
            setFilms(prevFilms => [...prevFilms, ...response]);
        } catch (error) {
            console.error('Error fetching Films', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getFilms(pageNum);
    }, [pageNum]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
          setPageNum(prevPageNum => prevPageNum + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [loading]);

  return (
    <div>
      <h1 className='films_title'>Films</h1>
      <div className='films_content'>
        {Films && <FilmCardComponent apiData={Films} />}
        {loading && (
          <div className='loading-spinner'></div>
        )}
      </div>
  </div>
  )
}

export default FilmsComponent