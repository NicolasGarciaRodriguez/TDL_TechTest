import dotenv from 'dotenv';
import axios from "axios";
import { IStarshipsExtApiResponse } from './Starships.interface';

dotenv.config()

const EXT_API_URL = process.env.EXT_API_URL || "https://swapi.dev/api/"

export const StarshipsRepository = async (page: number): Promise<IStarshipsExtApiResponse> => {
    try {
        const response = await axios.get(`${EXT_API_URL}starships/?page=${page}`);
        return {
            data: response.data.results,
            next: !!response.data.next
        };
    } catch (error) {
        throw error;
    }
}
