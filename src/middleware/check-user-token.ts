import { createMiddleware } from "hono/factory"
import { prisma } from "../lib/db"
import { validateToken } from "../lib/jwt"

export const checkUserToken = () => {
  return createMiddleware(async (c, next) => {
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

    c.set("user", user)

    await next()
  })
}
