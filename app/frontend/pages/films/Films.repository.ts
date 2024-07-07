import dotenv from 'dotenv';
import axios from "axios";
import { IFilmsExtApiResponse } from './Films.interface';

dotenv.config()

const EXT_API_URL = process.env.EXT_API_URL || "https://swapi.dev/api/"

export const FilmsRepository = async (page: number): Promise<IFilmsExtApiResponse> => {
    try {
        const response = await axios.get(`${EXT_API_URL}films/?page=${page}`);
        return {
            data: response.data.results,
            next: !!response.data.next
        }
    } catch (error) {
        throw error;
    }
}
