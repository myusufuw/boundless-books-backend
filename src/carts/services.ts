import { prisma } from "../lib/db"

export const getOrderCart = async (userId: string) => {
  return await prisma.order.findMany({
    where: { userId },
    include: {
      OrderItem: {
        include: {
          product: {
            include: {
              author: true,
            },
          },
        },
      },
    },
  })
}
