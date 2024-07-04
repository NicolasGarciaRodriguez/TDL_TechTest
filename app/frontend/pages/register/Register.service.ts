import { RegisterAdapter } from './Register.adapter';
import { IRegisterRequest } from '../../interfaces/IRegisterRequest.interface';
import { IRegisterResponse } from '../../interfaces/IRegisterResponse.interface';
import { RegisterRepository } from './Register.repository';

export const RegisterService = async (data: IRegisterRequest): Promise<IRegisterResponse> => {
  try {
    const response = await RegisterRepository(data);
    return RegisterAdapter(response);
  } catch (error) {
    console.error('Error in service:', error);
    throw error;
  }
};
