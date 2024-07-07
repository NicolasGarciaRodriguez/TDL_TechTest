import dotenv from 'dotenv';
import axios from "axios";
import { IPeopleExtApiResponse } from './People.interface';

dotenv.config()

const EXT_API_URL = process.env.EXT_API_URL || "https://swapi.dev/api/"

export const PeopleRepository = async (page: number): Promise<IPeopleExtApiResponse> => {
    try {
        const response = await axios.get(`${EXT_API_URL}people/?page=${page}`);
        return {
            data: response.data.results,
            next: !!response.data.next
        }
    } catch (error) {
        throw error;
    }
}
