import { CreatePublisher, PublisherSlug, UpdatePublisher } from "./schemas"
import { OpenAPIHono, z } from "@hono/zod-openapi"
import * as publisherService from "./services"
import { prisma } from "../lib/db"

const API_TAG = ["Publisher"]

export const publisherRoute = new OpenAPIHono()
  // GET ALL PUBLISHER
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all publishers",
      responses: {
        200: {
          description: "List of publishers",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const publisher = await publisherService.getAll()
      return c.json(publisher)
    }
  )

  // GET DETAIL PUBLISHER BY SLUG
  .openapi(
    {
      method: "get",
      path: "/{slug}",
      request: {
        params: PublisherSlug,
      },
      description: "Get detail publisher by slug",
      responses: {
        200: {
          description: "Publiser details",
        },
        400: {
          description: "Publisher not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const slug = c.req.param("slug")?.toString()

      const publisher = await publisherService.getDetailBySlug(slug)

      if (!publisher) {
        c.status(404)
        return c.json({ message: "Publisher not found" })
      }

      return c.json(publisher)
    }
  )

  // POST ADD NEW PUBLISHER
  .openapi(
    {
      method: "post",
      path: "/",
      request: {
        body: {
          content: {
            "application/json": {
              schema: CreatePublisher,
            },
          },
        },
      },
      description: "Create new publisher",
      responses: {
        200: {
          description: "Successfully created the publisher",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const body = await c.req.json()

      const createNewPublisher = await publisherService.createPublisher(body)

      return c.json({ publisher: createNewPublisher })
    }
  )

  // DELETE ALL PUBLISHER
  .openapi(
    {
      method: "delete",
      path: "/",
      description: "Delete all publishers",
      responses: {
        200: {
          description: "Successfully deleted all publishers data.",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const result = await publisherService.deleteAll()

      return c.json({
        message: "Successfully deleted all publishers data.",
        result,
      })
    }
  )

  // DELETE PUBLISHER BY SLUG
  .openapi(
    {
      method: "delete",
      path: "/{slug}",
      request: {
        params: PublisherSlug,
      },
      description: "Delete the publisher by id",
      responses: {
        200: {
          description: "Successfully delete the publisher",
        },
        400: {
          description: "Publisher not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const slug = c.req.param("slug")?.toString()

      const publisher = await publisherService.getDetailBySlug(slug)

      if (!publisher) {
        c.status(404)
        return c.json({ message: "Publisher not found" })
      }

      const deletedPublisher = await publisherService.deleteBySlug(slug)

      return c.json({
        message: `Successfully deleted ${deletedPublisher.name}`,
        deletedPublisher,
      })
    }
  )

  // UPDATE PUBLISHER BY SLUG
  .openapi(
    {
      method: "put",
      path: "/{slug}",
      request: {
        params: PublisherSlug,
        body: {
          content: {
            "application/json": {
              schema: UpdatePublisher,
            },
          },
        },
      },
      description: "Update the publisher",
      responses: {
        200: {
          description: "Successfully updated the publisher",
        },
        400: {
          description: "Publisher not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const slug = c.req.param("slug")?.toString()
      const body = await c.req.json()

      const publisher = await prisma.publisher.findUnique({
        where: { slug },
      })

      if (!publisher) {
        c.status(404)
        return c.json({ message: "Publisher not found" })
      }

      const updatedPublisher = await publisherService.updatePublisher(
        slug,
        body,
        publisher
      )

      return c.json({
        message: "Successfully updated the publisher",
        updatedPublisher,
      })
    }
  )
