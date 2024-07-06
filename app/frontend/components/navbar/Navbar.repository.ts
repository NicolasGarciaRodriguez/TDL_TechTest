import { ILogoutResponse } from './../../interfaces/ILogoutResponse.interface';
import axios from "axios"
import dotenv from 'dotenv';

dotenv.config();
const API_URL = process.env.API_URL || "http://localhost:8000";

export const NavbarRepository = async () => {
    try {
        const response = await axios.post<ILogoutResponse>(`${API_URL}/api/users/logout`,{}, {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        return response.data.isError;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data?.message || 'Failed to logout');
          } else {
            throw new Error('Failed to logout');
          }
    }
}