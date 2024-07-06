import { SpeciesRepository } from "./Species.repository";

export const SpeciesService = async (page: number) => {
    try {
        const response = await SpeciesRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}