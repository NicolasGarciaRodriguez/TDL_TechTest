import { VehiclesRepository } from "./Vehicles.repository";

export const VehiclesService = async (page: number) => {
    try {
        const response = await VehiclesRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}