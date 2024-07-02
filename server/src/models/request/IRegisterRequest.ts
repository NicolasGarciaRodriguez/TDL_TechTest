import { FastifyRequest } from "fastify";

export interface IRegisterRequest extends FastifyRequest{
    body: IRegisterRequestDto
}

export interface IRegisterRequestDto {
    email: string;
    password: string;
}