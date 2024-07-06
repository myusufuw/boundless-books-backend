import { OpenAPIHono } from "@hono/zod-openapi"
import type { User } from "@prisma/client"
import { checkUserToken } from "../middleware/check-user-token"
import { CreateOrderItem, OrderItemId, UpdateOrderItem } from "./schemas"
import {
  createOrder,
  deleteOrder,
  getAllOrder,
  updateOrderItem,
} from "./services"

const API_TAG = ["Order Item"]

type Bindings = {
  TOKEN: string
}

type Variables = {
  user: User
}

export const orderRoute = new OpenAPIHono<{
  Bindings: Bindings
  Variables: Variables
}>()

  // CREATE NEW ORDER ITEM
  .openapi(
    {
      method: "post",
      path: "/",
      description: "Create new order",
      security: [
        {
          Bearer: [],
        },
      ],
      request: {
        body: {
          content: {
            "application/json": {
              schema: CreateOrderItem,
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successfully created new order",
        },
      },
      middleware: checkUserToken(),
      tags: API_TAG,
    },
    async (c) => {
      const body = await c.req.json()
      const user = c.var.user

      return await createOrder(c, user, body.productId)
    }
  )

  // GET ALL ORDER ITEMS
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all order items",
      responses: {
        200: {
          description: "List of order items",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const orderItem = await getAllOrder()
      return c.json(orderItem)
    }
  )

  // DELETE ORDER ITEM BY ID
  .openapi(
    {
      method: "delete",
      path: "/{id}",
      request: {
        params: OrderItemId,
      },
      description: "Delete the order item by id",
      security: [
        {
          Bearer: [],
        },
      ],
      responses: {
        200: {
          description: "Successfully delete the order item",
        },
        400: {
          description: "Order item not found",
        },
      },
      middleware: checkUserToken(),
      tags: API_TAG,
    },
    async (c) => {
      const id = c.req.param("id")?.toString()

      return await deleteOrder(c, id)
    }
  )

  // UPDATE PUBLISHER BY ID
  .openapi(
    {
      method: "put",
      path: "/{id}",
      security: [
        {
          Bearer: [],
        },
      ],
      middleware: checkUserToken(),
      request: {
        params: OrderItemId,
        body: {
          content: {
            "application/json": {
              schema: UpdateOrderItem,
            },
          },
        },
      },
      description: "Update the order item",
      responses: {
        200: {
          description: "Successfully updated the order item",
        },
        400: {
          description: "Order item not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const id = c.req.param("id")?.toString()

      return await updateOrderItem(c, id)
    }
  )
