import { IRegisterResponseDTO } from "../../dtos/IRegisterResponse.dto";
import { IRegisterResponse } from "../../interfaces/IRegisterResponse.interface";

export const RegisterAdapter = (data: IRegisterResponseDTO): IRegisterResponse => {
    return {
        message: data.message,
        isError: data.isError
    }
}