import { prisma } from "../lib/db"
import { CreateUser } from "./schemas"
import { z } from "@hono/zod-openapi"
import { hashPassword } from "../lib/password"

export const getAll = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      username: true,
    },
  })
}

export const getDetailByUsername = async (username: string | undefined) => {
  return await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      createdAt: true,
      updatedAt: true,
    },
  })
}

export const createNewUser = async (body: z.infer<typeof CreateUser>) => {
  return prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: {
        create: {
          hash: await hashPassword(body.password),
        },
      },
    },
  })
}
