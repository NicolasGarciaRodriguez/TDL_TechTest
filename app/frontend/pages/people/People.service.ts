import { IPeopleExtApiResponse } from "./People.interface";
import { PeopleRepository } from "./People.repository";

export const PeopleService = async (page: number): Promise<IPeopleExtApiResponse> => {
    try {
        const response = await PeopleRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}