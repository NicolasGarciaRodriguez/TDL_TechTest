export interface IError {
    errors: IErrorDto
    code: string;
    name: string;
}

export interface IErrorDto {
    message: string;
}