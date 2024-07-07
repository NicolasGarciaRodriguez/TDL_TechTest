import React, { useCallback, useEffect, useState } from 'react'
import { IVehicle } from './Vehicles.interface';
import { VehiclesService } from './Vehicles.service';
import VehicleCardComponent from '../../components/vehicleCard/VehicleCard.component';
import './Vehicles.styles.scss';

const VehiclesComponent = () => {

    const [Vehicles, setVehicles] = useState<IVehicle[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [isNextPage, setIsNextPage] = useState<boolean>(true);

    const getVehicles = async (page: number) => {
      if (!isNextPage) {
        return;
      }
        setLoading(true)
        try {
            const response = await VehiclesService(page);
            setVehicles(prevVehicles => [...prevVehicles, ...response.data]);
            setIsNextPage(response.next);
        } catch (error) {
          if (error.response.status === 404) {
            setIsNextPage(false);
          }
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
        <h1 className="vehicles__title">Vehicles</h1>
        <div className="vehicles__content">
          {Vehicles && <VehicleCardComponent apiData={Vehicles} />}
          {loading && (
            <div className="vehicles__loading-spinner"></div>
          )}
        </div>
      </div>
  )
}

export default VehiclesComponent