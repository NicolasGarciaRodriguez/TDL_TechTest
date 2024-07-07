import dotenv from 'dotenv';
import axios from "axios";
import { IVehiclesExtApiResponse } from './Vehicles.interface';

dotenv.config()

const EXT_API_URL = process.env.EXT_API_URL || "https://swapi.dev/api/"

export const VehiclesRepository = async (page: number): Promise<IVehiclesExtApiResponse> => {
    try {
        const response = await axios.get(`${EXT_API_URL}vehicles/?page=${page}`);
        return {
            data: response.data.results,
            next: !!response.data.next
        };
    } catch (error) {
        throw error;
    }
}
