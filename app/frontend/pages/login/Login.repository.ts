import axios from "axios";
import { ILoginRequest } from "./../../interfaces/ILoginRequest.interface";
import { ILoginResponseDTO } from "../../dtos/ILoginResponse.dto";

const API_URL = 'http://localhost:8000/api/users/login';

export const LoginRepository = async (data: ILoginRequest): Promise<ILoginResponseDTO> => {
  try {
    const response = await axios.post<ILoginResponseDTO>(API_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
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