import React, { useCallback, useEffect, useState } from 'react'
import { ISpecie } from './Species.interface';
import { SpeciesService } from './Species.service';
import SpecieCardComponent from '../../components/speciesCard/SpeciesCard.component';
import './Species.styles.scss';

const SpeciesComponent = () => {

    const [Species, setSpecies] = useState<ISpecie[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const getSpecies = async (page: number) => {
      if (page > 4) {
        return;
      }
        setLoading(true)
        try {
            const response = await SpeciesService(page);
            setSpecies(prevSpecies => [...prevSpecies, ...response]);
        } catch (error) {
            console.error('Error fetching Species', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getSpecies(pageNum);
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
      <h1 className='species_title'>Species</h1>
      <div className='species_content'>
        {Species && <SpecieCardComponent apiData={Species} />}
        {loading && (
          <div className='loading-spinner'></div>
        )}
      </div>
  </div>
  )
}

export default SpeciesComponent