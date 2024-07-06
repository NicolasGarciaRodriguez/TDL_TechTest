import React, { useCallback, useEffect, useState } from 'react'
import { IPeople } from './People.interface';
import { PeopleService } from './People.service';
import PeopleCardComponent from '../../components/peopleCard/PeopleCard.component';
import './People.styles.scss';

const PeopleComponent = () => {

    const [People, setPeople] = useState<IPeople[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const getPeople = async (page: number) => {
      if (page > 9) {
        return;
      }
        setLoading(true)
        try {
            const response = await PeopleService(page);
            setPeople(prevPeople => [...prevPeople, ...response]);
        } catch (error) {
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
      <h1 className='people_title'>People</h1>
      <div className='people_content'>
        {loading && <p>Loading...</p>}
        {People && <PeopleCardComponent apiData={People} />}
      </div>
  </div>
  )
}

export default PeopleComponent