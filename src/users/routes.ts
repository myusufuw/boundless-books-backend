import { OpenAPIHono } from "@hono/zod-openapi"

import * as userService from "./service"
import { UsernameUser, CreateUser, LoginUser } from "./schemas"
import { prisma } from "../lib/db"
import { verifyPassword } from "../lib/password"
import { createToken, validateToken } from "../lib/jwt"

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

  // POST ADD NEW USER
  .openapi(
    {
      method: "post",
      path: "/auth/register",
      request: {
        body: {
          content: {
            "application/json": {
              schema: CreateUser,
            },
          },
        },
      },
      description: "Create new user",
      responses: {
        200: {
          description: "Successfully created new user",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const body = await c.req.json()

      try {
        const createNewUser = await userService.createNewUser(body)

        return c.json({
          message: "Successfully created new user",
          newUSer: {
            id: createNewUser.id,
            username: createNewUser.username,
          },
        })
      } catch (error) {
        c.status(400)
        return c.json({
          message: "Failed to create new user",
        })
      }
    }
  )

  // POST USER LOGIN
  .openapi(
    {
      method: "post",
      path: "/auth/login",
      request: {
        body: {
          content: {
            "application/json": {
              schema: LoginUser,
            },
          },
        },
      },
      description: "Login Boundless Books",
      responses: {
        200: {
          description: "Successfully login",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const body = await c.req.json()

      const foundUser = await prisma.user.findUnique({
        where: { username: body.username },
        include: { password: true },
      })

      if (!foundUser) {
        c.status(404)
        return c.json({
          message: "User not found, failed to login",
        })
      }

      if (!foundUser?.password?.hash) {
        c.status(400)
        return c.json({
          message: "Cannot login because user doesn't have a password",
        })
      }

      const validPassword = await verifyPassword(
        foundUser.password?.hash,
        body.password
      )

      if (!validPassword) {
        c.status(400)
        return c.json({
          message: "Password incorrect",
        })
      }

      const token = await createToken(foundUser.id)

      if (!token) {
        c.status(400)
        return c.json({ message: "Failed to create a token" })
      }

      return c.json({
        message: `Successfully login as ${foundUser.username}`,
        token,
      })
    }
  )

  // GET MY PROFILE
  .openapi(
    {
      method: "get",
      path: "/auth/me",
      description: "Get my profile information",
      security: [
        {
          Bearer: [],
        },
      ],
      responses: {
        200: {
          description: "Information details",
        },
        400: {
          description: "Information not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const authHeader = c.req.header("Authorization")

      if (!authHeader) {
        c.status(401)
        return c.json({ message: "Authorization header is missing" })
      }

      const token = authHeader.split(" ")[1]

      const decodedToken = await validateToken(token)
      if (!token || !decodedToken) {
        c.status(401)
        return c.json({ message: "Invalid or expired token" })
      }

      const userId = decodedToken.subject

      if (!userId) {
        c.status(401)
        return c.json({ message: "User not found" })
      }

      const user = await prisma.user.findUnique({
        where: { id: userId },
      })

      return c.json({ user })
    }
  )
