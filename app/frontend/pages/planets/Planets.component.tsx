import React, { useCallback, useEffect, useState } from 'react'
import { IPlanet } from './Planets.interface';
import { PlanetsService } from './Planets.service';
import PlanetCardComponent from '../../components/planetCard/PlanetCard.component';
import './Planets.styles.scss';

const PlanetsComponent = () => {

    const [planets, setPlanets] = useState<IPlanet[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [isNextPage, setIsNextPage] = useState<boolean>(true);

    const getPlanets = async (page: number) => {
      if (!isNextPage) {
        return;
      }
        setLoading(true)
        try {
            const response = await PlanetsService(page);
            setPlanets(prevPlanets => [...prevPlanets, ...response.data]);
            setIsNextPage(response.next);
        } catch (error) {
          if (error.response.status === 404) {
            setIsNextPage(false);
          }
            console.error('Error fetching planets', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getPlanets(pageNum);
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
    <div className='planets'>
      <h1 className='planets__title'>Planets</h1>
      <div className='planets__content'>
        {planets && <PlanetCardComponent apiData={planets} />}
        {loading && (
          <div className='planets__loading-spinner'></div>
        )}
      </div>
    </div>

  )
}

export default PlanetsComponent