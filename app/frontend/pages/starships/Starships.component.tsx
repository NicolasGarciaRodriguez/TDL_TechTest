import React, { useEffect, useState } from 'react'
import './Starships.styles.scss';
import { IStarship } from './Starships.interface';
import { StarshipsService } from './Starships.service';
import StarshipCardComponent from '../../components/starshipCard/StarshipCard.component';

const StarshipsComponent = () => {

    const [Starships, setStarships] = useState<IStarship[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [isNextPage, setIsNextPage] = useState<boolean>(true);

    const getStarships = async (page: number) => {
      if (!isNextPage) {
        return;
      }
        setLoading(true)
        try {
            const response = await StarshipsService(page);
            setStarships(prevStarships => [...prevStarships, ...response.data]);
            setIsNextPage(response.next);
        } catch (error) {
          if (error.response.status === 404) {
            setIsNextPage(false);
          }
            console.error('Error fetching Starships', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getStarships(pageNum);
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
      <h1 className='starships_title'>Starships</h1>
      <div className='starships_content'>
        {Starships && <StarshipCardComponent apiData={Starships} />}
        {loading && (
          <div className='loading-spinner'></div>
        )}
      </div>
  </div>
  )
}

export default StarshipsComponent