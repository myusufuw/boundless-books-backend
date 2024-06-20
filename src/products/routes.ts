import { OpenAPIHono, z } from "@hono/zod-openapi"
import { CreateProduct, ProductSlug, UpdateProduct } from "./schemas"

import { prisma } from "../lib/db"

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

  // GET DETAIL PRODUCT BY SLUG
  .openapi(
    {
      method: "get",
      path: "/{slug}",
      request: {
        params: ProductSlug,
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

      const product = await productService.getDetailBySlug(slug)

      if (!product) {
        c.status(404)
        return c.json({ message: "Product not found" })
      }

      return c.json(product)
    }
  )

  // POST ADD NEW PRODUCT
  .openapi(
    {
      method: "post",
      path: "/",
      request: {
        body: {
          content: {
            "application/json": {
              schema: CreateProduct,
            },
          },
        },
      },
      description: "Create new product",
      responses: {
        200: {
          description: "Successfully created the product",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const body = await c.req.json()

      const createNewProduct = await productService.createProduct(body)

      return c.json({ product: createNewProduct })
    }
  )

  // DELETE ALL PRODUCT
  .openapi(
    {
      method: "delete",
      path: "/",
      description: "Delete all products",
      responses: {
        200: {
          description: "Successfully deleted all products data.",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const result = await productService.deleteAll()

      return c.json({
        message: "Successfully deleted all products data.",
        result,
      })
    }
  )

  // DELETE PRODUCT BY SLUG
  .openapi(
    {
      method: "delete",
      path: "/{slug}",
      request: {
        params: ProductSlug,
      },
      description: "Delete the product by slug",
      responses: {
        200: {
          description: "Successfully delete the product",
        },
        400: {
          description: "Product not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const slug = c.req.param("slug")?.toString()

      const book = await productService.getDetailBySlug(slug)

      if (!book) {
        c.status(404)
        return c.json({ message: "Book not found" })
      }

      const deletedProduct = await productService.deleteBySlug(slug)

      return c.json({
        message: `Successfully deleted ${deletedProduct.title}`,
        deletedProduct,
      })
    }
  )

  // UPDATE BOOK BY SLUG
  .openapi(
    {
      method: "put",
      path: "/{slug}",
      request: {
        params: ProductSlug,
        body: {
          content: {
            "application/json": {
              schema: UpdateProduct,
            },
          },
        },
      },
      description: "Update the product",
      responses: {
        200: {
          description: "Successfully updated the product",
        },
        400: {
          description: "Product not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const slug = c.req.param("slug")?.toString()
      const body = await c.req.json()

      const product = await prisma.product.findUnique({
        where: { slug },
      })

      const currentProduct = await prisma.product.findUnique({
        where: { slug },
        include: {
          publisher: true,
          author: true,
        },
      })

      if (!product) {
        c.status(404)
        return c.json({ message: "Product not found" })
      }

      const updatedPublisher = await productService.updateProduct(
        slug,
        body,
        product
        // currentProduct?.publisher?.slug,
        // currentProduct?.author?.slug
      )

      return c.json({
        message: "Successfully updated the product",
        updatedPublisher,
      })
    }
  )
