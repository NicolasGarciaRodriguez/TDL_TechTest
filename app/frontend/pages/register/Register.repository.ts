import { IRegisterResponseDTO } from '../../dtos/IRegisterResponse.dto';
import { IRegisterRequest } from '../../interfaces/IRegisterRequest.interface';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users/register';

export const RegisterRepository = async (data: IRegisterRequest): Promise<IRegisterResponseDTO> => {
  try {
    const response = await axios.post<IRegisterResponseDTO>(API_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Failed to register');
    } else {
      throw new Error('Failed to register');
    }
  }
};
