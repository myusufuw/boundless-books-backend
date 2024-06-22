import { OpenAPIHono } from "@hono/zod-openapi"
import { AuthorSlug, CreateAuthor, UpdateAuthor } from "./schemas"
import * as authorService from "./services"
import { prisma } from "../lib/db"

const API_TAG = ["Authors"]

export const authorRoute = new OpenAPIHono()
  // GET ALL AUTHORS
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all authors",
      responses: {
        200: {
          description: "Successfully get all authors",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const author = await authorService.getAll()
      return c.json(author)
    }
  )

  // GET DETAIL PRODUCT BY SLUG
  .openapi(
    {
      method: "get",
      path: "/{slug}",
      request: {
        params: AuthorSlug,
      },
      description: "Get detail author by id",
      responses: {
        200: {
          description: "Successfully get author details",
        },
        400: {
          description: "Author not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const slug = c.req.param("slug")?.toString()

      const product = await authorService.getDetailBySlug(slug)

      if (!product) {
        c.status(404)
        return c.json({ message: "Author not found" })
      }

      return c.json(product)
    }
  )

  // POST ADD NEW AUTHOR
  .openapi(
    {
      method: "post",
      path: "/",
      request: {
        body: {
          content: {
            "application/json": {
              schema: CreateAuthor,
            },
          },
        },
      },
      description: "Create new author",
      responses: {
        200: {
          description: "Successfully created the author",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const body = await c.req.json()

      const createNewProduct = await authorService.createProduct(body)

      return c.json({ author: createNewProduct })
    }
  )

  // DELETE ALL AUTHORS
  .openapi(
    {
      method: "delete",
      path: "/",
      description: "Delete all authors",
      responses: {
        200: {
          description: "Successfully deleted all authors data.",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const result = await authorService.deleteAll()

      return c.json({
        message: "Successfully deleted all author data.",
        result,
      })
    }
  )

  // DELETE AUTHOR BY SLUG
  .openapi(
    {
      method: "delete",
      path: "/{slug}",
      request: {
        params: AuthorSlug,
      },
      description: "Delete the author by slug",
      responses: {
        200: {
          description: "Successfully delete the author",
        },
        400: {
          description: "Author not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const slug = c.req.param("slug")?.toString()

      const author = await authorService.getDetailBySlug(slug)

      if (!author) {
        c.status(404)
        return c.json({ message: "Author not found" })
      }

      const deletedAuthor = await authorService.deleteBySlug(slug)

      return c.json({
        message: `Successfully deleted ${deletedAuthor.name}`,
        deletedAuthor,
      })
    }
  )

  // UPDATE AUTHOR BY SLUG
  .openapi(
    {
      method: "put",
      path: "/{slug}",
      request: {
        params: AuthorSlug,
        body: {
          content: {
            "application/json": {
              schema: UpdateAuthor,
            },
          },
        },
      },
      description: "Update the author",
      responses: {
        200: {
          description: "Successfully updated the author",
        },
        400: {
          description: "Author not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const slug = c.req.param("slug")?.toString()
      const body = await c.req.json()

      const author = await prisma.author.findUnique({
        where: { slug },
      })

      if (!author) {
        c.status(404)
        return c.json({ message: "Author not found" })
      }

      const updatedAuthor = await authorService.updateProduct(
        slug,
        body,
        author
      )

      return c.json({
        message: "Successfully updated the author",
        updatedAuthor,
      })
    }
  )
