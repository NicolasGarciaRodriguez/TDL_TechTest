import { FastifyReply } from 'fastify';
import { IReplyBase } from './iReplyBase.js';

export interface ILoginReply extends IReplyBase, FastifyReply {
    sessionToken: string;
}