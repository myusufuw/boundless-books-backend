import { prisma } from "../lib/db"
import type { User } from "@prisma/client"

import type { Context } from "hono"

export const updateOrderItem = async (c: Context, id: string | undefined) => {
  const body = await c.req.json()

  const orderItem = await prisma.orderItem.findUnique({
    where: { id },
  })

  if (!orderItem) {
    c.status(404)
    return c.json({ message: "Order item not found" })
  }

  const updatedOrderItem = await prisma.orderItem.update({
    where: { id },
    data: {
      ...orderItem,
      quantity: body.quantity,
    },
  })

  return c.json({
    message: "Successfully updated the order item",
    updatedOrderItem,
  })
}

export const deleteOrder = async (c: Context, id: string | undefined) => {
  const order = await prisma.orderItem.findUnique({
    where: { id },
  })

  if (!order) {
    c.status(404)
    return c.json({ message: "Order item not found" })
  }

  const deletedOrder = await prisma.orderItem.delete({
    where: { id },
  })

  return c.json({
    message: "Successfully deleted the order item",
    deletedOrder,
  })
}

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

export const getAllOrder = async () => {
  return await prisma.orderItem.findMany()
}
