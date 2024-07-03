import { prisma } from "../lib/db"
import type { User } from "@prisma/client"

export const getAll = async (
  c: {
    json: (arg0: {
      message: string
      cart: {
        id: string
        userId: string | null
        status: string
        createdAt: Date
        updatedAt: Date
      }
    }) => any
  },
  user: User
) => {
  const existingOrderCart = await prisma.order.findFirst({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      OrderItem: true,
    },
  })

  if (!existingOrderCart) {
    const newOrderCart = await prisma.order.create({
      data: {
        userId: user.id,
      },
    })
    return c.json({
      message: "Shopping cart data",
      cart: newOrderCart,
    })
  }

  return c.json({
    message: "Shopping cart data",
    cart: existingOrderCart,
  })
}
