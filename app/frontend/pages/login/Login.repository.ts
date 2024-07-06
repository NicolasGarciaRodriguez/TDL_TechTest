import axios from "axios";
import { ILoginRequest } from "./../../interfaces/ILoginRequest.interface";
import { ILoginResponseDTO } from "../../dtos/ILoginResponse.dto";
import dotenv from 'dotenv';

dotenv.config();
const API_URL = process.env.API_URL || "http://localhost:8000";

export const LoginRepository = async (data: ILoginRequest): Promise<ILoginResponseDTO> => {
  try {
    const response = await axios.post<ILoginResponseDTO>(`${API_URL}/api/users/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Failed to Login');
    } else {
      throw new Error('Failed to Login');
    }
  }
};