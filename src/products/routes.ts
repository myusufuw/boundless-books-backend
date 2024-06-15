import { OpenAPIHono, z } from "@hono/zod-openapi"
import { ProductSlugSchema } from "./schemas"

import * as productService from "./services"

const API_TAG = ["Product"]

export const productsRoute = new OpenAPIHono()
  // GET ALL PRODUCTS
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all products",
      responses: {
        200: {
          description: "Successfully get all products",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const publisher = await productService.getAll()
      return c.json(publisher)
    }
  )

  // GET DETAIL PRODUCT BY ID
  .openapi(
    {
      method: "get",
      path: "/{slug}",
      request: {
        params: ProductSlugSchema,
      },
      description: "Get detail product by id",
      responses: {
        200: {
          description: "Successfully get product details",
        },
        400: {
          description: "Product not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const slug = c.req.param("slug")?.toString()

      const book = await productService.getDetailById(slug)

      if (!book) {
        c.status(404)
        return c.json({ message: "Product not found" })
      }

      return c.json(book)
    }
  )
