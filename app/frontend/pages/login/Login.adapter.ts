import { ILoginResponseDTO } from './../../dtos/ILoginResponse.dto';
import { ILoginResponse } from "../../interfaces/ILoginResponse.interface"

export const LoginAdapter = (data: ILoginResponseDTO): ILoginResponse => {
    return {
        message: data.message,
        isError: data.isError,
        sessionToken: data.sessionToken
    }
}