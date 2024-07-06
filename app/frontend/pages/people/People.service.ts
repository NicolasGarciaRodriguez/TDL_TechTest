import { PeopleRepository } from "./People.repository";

export const PeopleService = async (page: number) => {
    try {
        const response = await PeopleRepository(page);
        return response;
    } catch (error) {
        throw error;
    }
}