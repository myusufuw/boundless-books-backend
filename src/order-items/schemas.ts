import { z } from "@hono/zod-openapi"

export const CreateOrderItem = z.object({
  productId: z
    .string()
    .min(1)
    .openapi({ example: "clxotdkb00005db67h7bczs3u" }),
})

export const UpdateOrderItem = z.object({
  quantity: z.number().min(1).openapi({ example: 1 }),
})

export const OrderItemId = z.object({
  id: z.string().min(1),
})
