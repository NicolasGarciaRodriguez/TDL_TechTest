import dotenv from 'dotenv';
import axios from "axios";
import { ISpeciesExtApiResponse } from './Species.interface';

dotenv.config()

const EXT_API_URL = process.env.EXT_API_URL || "https://swapi.dev/api/"

export const SpeciesRepository = async (page: number): Promise<ISpeciesExtApiResponse> => {
    try {
        const response = await axios.get(`${EXT_API_URL}species/?page=${page}`);
        return {
            data: response.data.results,
            next: !!response.data.next
        }
    } catch (error) {
        throw error;
    }
}
