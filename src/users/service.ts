import { prisma } from "../lib/db"

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
