import { IFilmsExtApiResponse } from "./Films.interface";
import { FilmsRepository } from "./Films.repository";

export const FilmsService = async (page: number): Promise<IFilmsExtApiResponse> => {
    try {
        const response = await FilmsRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}