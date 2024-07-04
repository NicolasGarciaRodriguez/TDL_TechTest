import { ILoginResponse } from './../../interfaces/ILoginResponse.interface';
import { ILoginRequest } from './../../interfaces/ILoginRequest.interface';
import { LoginAdapter } from './Login.adapter';
import { LoginRepository } from './Login.repository';


export const LoginService = async (data: ILoginRequest): Promise<ILoginResponse> => {
    try {
      const response = await LoginRepository(data);
      return LoginAdapter(response);
    } catch (error) {
      throw error;
    }
  };
  