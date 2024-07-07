import { IVehiclesExtApiResponse } from "./Vehicles.interface";
import { VehiclesRepository } from "./Vehicles.repository";

export const VehiclesService = async (page: number): Promise<IVehiclesExtApiResponse> => {
    try {
        const response = await VehiclesRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}