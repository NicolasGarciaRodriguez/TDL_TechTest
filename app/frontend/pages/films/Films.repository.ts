import dotenv from 'dotenv';
import axios from "axios";

dotenv.config()

const EXT_API_URL = process.env.EXT_API_URL || "https://swapi.dev/api/"

export const FilmsRepository = async (page: number) => {
    try {
        const response = await axios.get(`${EXT_API_URL}films/?page=${page}`);
        return response.data.results;
    } catch (error) {
        throw error;
    }
}
