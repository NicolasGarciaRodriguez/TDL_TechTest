import { ISpeciesExtApiResponse } from "./Species.interface";
import { SpeciesRepository } from "./Species.repository";

export const SpeciesService = async (page: number): Promise<ISpeciesExtApiResponse> => {
    try {
        const response = await SpeciesRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}