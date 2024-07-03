import { z } from "@hono/zod-openapi"

export const CreateOrderItem = z.object({
  productId: z.string().min(1),
})
