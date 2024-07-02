import { FastifyReply } from "fastify";
import { IReplyBase } from "./iReplyBase.js";

export interface IRegisterReply extends IReplyBase, FastifyReply{

}