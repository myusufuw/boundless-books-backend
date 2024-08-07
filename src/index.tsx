import { swaggerUI } from "@hono/swagger-ui"
import { OpenAPIHono } from "@hono/zod-openapi"
import { cors } from "hono/cors"
import { authorRoute } from "./authors/routes"
import { HomePage } from "./home-page"
import { cartRoute } from "./carts/routes"
import { productsRoute } from "./products/routes"
import { publisherRoute } from "./publishers/routes"
import { userRoute } from "./users/routes"
import { orderRoute } from "./order-items/routes"

const app = new OpenAPIHono()
// HANDLE CORS
app.use("/*", cors())

// AUTH
app.openAPIRegistry.registerComponent("securitySchemes", "Bearer", {
  type: "http",
  scheme: "bearer",
})

// OPEN API
app.doc31("/docs", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Boundless Books REST API",
    description:
      "Boundless Books API is a backend application that provides various information about simple online book store.",
  },
})

// ROUTES
app.route("/users", userRoute)
app.route("/products", productsRoute)
app.route("/orders", orderRoute)
app.route("/cart", cartRoute)
app.route("/authors", authorRoute)
app.route("/publishers", publisherRoute)

// SWAGGER UI
app.get("/ui", swaggerUI({ url: "/docs" }))

// HOME PAGE
app.get("/", (c) => {
  return c.html(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boundless Books API</title>
        <meta name="description" content="Web API about books" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <HomePage />
      </body>
    </html>
  )
})

export default app
