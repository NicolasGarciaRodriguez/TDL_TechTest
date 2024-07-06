import { FilmsRepository } from "./Films.repository";

export const FilmsService = async (page: number) => {
    try {
        const response = await FilmsRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}