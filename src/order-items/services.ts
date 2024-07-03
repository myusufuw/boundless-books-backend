import { prisma } from "../lib/db"
import type { User } from "@prisma/client"

import type { Context } from "hono"

export const createOrder = async (
  c: Context,
  user: User,
  productId: string
) => {
  const existingOrderCart = await prisma.order.findFirst({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  if (!existingOrderCart) {
    const newOrderCart = await prisma.order.create({
      data: {
        userId: user.id,
      },
    })

    const createNewOrder = await prisma.orderItem.create({
      data: {
        productId: productId,
        orderId: newOrderCart.id,
      },
    })

    if (!createNewOrder) {
      c.status(400)
      c.json({
        message: "Failed to add the order item",
      })
    }

    return c.json({
      message: "Successfully added the order item",
    })
  }

  const createNewOrder = await prisma.orderItem.create({
    data: {
      productId: productId,
      orderId: existingOrderCart?.id,
    },
  })

  if (!createNewOrder) {
    c.status(400)
    c.json({
      message: "Failed to add the order item",
    })
  }

  return c.json({
    message: "Successfully added the order item",
  })
}
