import { OpenAPIHono } from "@hono/zod-openapi"

import * as userService from "./service"
import { UsernameUser } from "./schemas"

const API_TAG = ["User"]

export const userRoute = new OpenAPIHono()
  // GET ALL USERS
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all users",
      responses: {
        200: {
          description: "List of users",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const publisher = await userService.getAll()
      return c.json(publisher)
    }
  )

  // GET DETAIL USER BY USERNAME
  .openapi(
    {
      method: "get",
      path: "/{username}",
      request: {
        params: UsernameUser,
      },
      description: "Get detail user by slug",
      responses: {
        200: {
          description: "User details",
        },
        400: {
          description: "User not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const username = c.req.param("username")?.toString()

      const user = await userService.getDetailByUsername(username)

      if (!user) {
        c.status(404)
        return c.json({ message: "User not found" })
      }

      return c.json(user)
    }
  )
