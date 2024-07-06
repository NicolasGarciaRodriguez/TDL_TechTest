import { StarshipsRepository } from "./Starships.repository";

export const StarshipsService = async (page: number) => {
    try {
        const response = await StarshipsRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}