import { ILogoutResponse } from "../../interfaces/ILogoutResponse.interface";
import { NavbarRepository } from "./Navbar.repository";

export const NavbarService = async () => {
    try {
        const response = await NavbarRepository();
        return response;
    } catch (error) {
        console.error('Error in service:', error);
        throw error;
    }
}