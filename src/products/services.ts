import { prisma } from "../lib/db"

export const getAll = async () => {
  return await prisma.product.findMany()
}

export const getDetailById = async (slug: string | undefined) => {
  return await prisma.product.findUnique({
    where: { slug },
  })
}
