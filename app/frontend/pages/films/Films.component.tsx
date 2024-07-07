import React, { useCallback, useEffect, useState } from 'react'
import { IFilm } from './Films.interface';
import { FilmsService } from './Films.service';
import FilmCardComponent from '../../components/filmsCard/FilmsCard.component';
import './Films.styles.scss';

const FilmsComponent = () => {

    const [Films, setFilms] = useState<IFilm[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [isNextPage, setIsNextPage] = useState<boolean>(true);

    const getFilms = async (page: number) => {
      if (!isNextPage) {
        return;
      }
        setLoading(true)
        try {
            const response = await FilmsService(page);
            setFilms(prevFilms => [...prevFilms, ...response.data]);
            setIsNextPage(response.next);
        } catch (error) {
          if (error.response.status === 404) {
            setIsNextPage(false);
          }
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
      <div className='films'>
        <h1 className='films__title'>Films</h1>
        <div className='films__content'>
          {Films && <FilmCardComponent apiData={Films} />}
          {loading && (
            <div className='films__loading-spinner'></div>
          )}
        </div>
      </div>
  )
}

export default FilmsComponent