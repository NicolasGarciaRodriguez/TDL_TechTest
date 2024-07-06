import React, { useCallback, useEffect, useState } from 'react'
import { IVehicle } from './Vehicles.interface';
import { VehiclesService } from './Vehicles.service';
import VehicleCardComponent from '../../components/VehicleCard/VehicleCard.component';
import './Vehicles.styles.scss';

const VehiclesComponent = () => {

    const [Vehicles, setVehicles] = useState<IVehicle[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const getVehicles = async (page: number) => {
      if (page > 4) {
        return;
      }
        setLoading(true)
        try {
            const response = await VehiclesService(page);
            setVehicles(prevVehicles => [...prevVehicles, ...response]);
        } catch (error) {
            console.error('Error fetching Vehicles', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getVehicles(pageNum);
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
      <h1 className='vehicles_title'>Vehicles</h1>
      <div className='vehicles_content'>
        {loading && <p>Loading...</p>}
        {Vehicles && <VehicleCardComponent apiData={Vehicles} />}
      </div>
  </div>
  )
}

export default VehiclesComponent