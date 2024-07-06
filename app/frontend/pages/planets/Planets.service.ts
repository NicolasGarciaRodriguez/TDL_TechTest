import { PlanetsRepository } from "./Planets.repository";

export const PlanetsService = async (page: number) => {
    try {
        const response = await PlanetsRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}