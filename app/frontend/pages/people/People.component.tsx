import React, { useCallback, useEffect, useState } from 'react'
import { IPeople } from './People.interface';
import { PeopleService } from './People.service';
import PeopleCardComponent from '../../components/peopleCard/PeopleCard.component';
import './People.styles.scss';
import EntityCardComponent from '../../components/entityCard/entityCard.component';

const PeopleComponent = () => {

    const [People, setPeople] = useState<IPeople[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [isNextPage, setIsNextPage] = useState<boolean>(true);

    const getPeople = async (page: number) => {
      if (!isNextPage) {
        return;
      }
        setLoading(true)
        try {
            const response = await PeopleService(page);
            setPeople(prevPeople => [...prevPeople, ...response.data]);
            setIsNextPage(response.next);
        } catch (error) {
          if (error.response.status === 404) {
            setIsNextPage(false);
          }
            console.error('Error fetching People', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getPeople(pageNum);
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
      <h1 className='people__title'>People</h1>
      <div className='people__content'>
        {People && <EntityCardComponent apiData={People} entityIndex={1} />}
        {loading && (
          <div className='people__loading-spinner'></div>
        )}
      </div>
    </div>
  )
}

export default PeopleComponent