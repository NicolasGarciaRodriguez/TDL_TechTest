import { RegisterAdapter } from './Register.adapter';
import { IRegisterRequest } from '../../interfaces/IRegisterRequest.interface';
import { IRegisterResponse } from '../../interfaces/IRegisterResponse.interface';
import { registerRepository } from './Register.repository';

export const registerService = async (data: IRegisterRequest): Promise<IRegisterResponse> => {
  try {
    const response = await registerRepository(data);
    return RegisterAdapter(response);
  } catch (error) {
    console.error('Error in service:', error);
    throw error;
  }
};