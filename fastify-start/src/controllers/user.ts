import type { FastifyReply, FastifyRequest } from 'fastify'

const users = [{
  id: Math.random(),
}]

export async function getAllUsers(request: FastifyRequest, reply: FastifyReply) {
  reply.send(users)
}
