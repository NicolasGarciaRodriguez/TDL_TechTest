import { IPlanetsExtApiResponse } from "./Planets.interface";
import { PlanetsRepository } from "./Planets.repository";

export const PlanetsService = async (page: number): Promise<IPlanetsExtApiResponse> => {
    try {
        const response = await PlanetsRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}