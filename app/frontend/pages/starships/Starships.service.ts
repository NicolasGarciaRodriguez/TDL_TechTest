import { IStarshipsExtApiResponse } from "./Starships.interface";
import { StarshipsRepository } from "./Starships.repository";

export const StarshipsService = async (page: number): Promise<IStarshipsExtApiResponse> => {
    try {
        const response = await StarshipsRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}