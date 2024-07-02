import { FastifyRequest } from "fastify";

export interface ILoginRequest extends FastifyRequest{
    body: ILoginRequestDto
}

export interface ILoginRequestDto {
    email: string;
    password: string;
}