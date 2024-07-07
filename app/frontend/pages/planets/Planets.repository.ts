import dotenv from 'dotenv';
import axios from "axios";
import { IPlanetsExtApiResponse } from './Planets.interface';

dotenv.config()

const EXT_API_URL = process.env.EXT_API_URL || "https://swapi.dev/api/"

export const PlanetsRepository = async (page: number): Promise<IPlanetsExtApiResponse> => {
    try {
        const response = await axios.get(`${EXT_API_URL}planets/?page=${page}`);
        return {
            data: response.data.results,
            next: !!response.data.next
        };
    } catch (error) {
        throw error;
    }
}
