import { z } from "@hono/zod-openapi"
import { prisma } from "../lib/db"
import { CreateAuthor, UpdateAuthor } from "./schemas"
import type { Author } from "@prisma/client"

export const getAll = async () => {
  return await prisma.author.findMany({
    include: {
      books: true,
    },
  })
}

export const getDetailBySlug = async (slug: string | undefined) => {
  return await prisma.author.findUnique({
    where: { slug },
    include: {
      books: {
        include: {
          author: true,
        },
      },
    },
  })
}

export const deleteAll = async () => {
  return await prisma.author.deleteMany()
}

export const deleteBySlug = async (slug: string | undefined) => {
  return await prisma.author.delete({
    where: { slug },
  })
}

export const createProduct = async (body: z.infer<typeof CreateAuthor>) => {
  return await prisma.author.create({
    data: {
      name: body.name ?? null,
      about: body.about ?? null,
      imageUrl: body.imageUrl ?? null,
      slug: body.slug ?? null,
    },
  })
}

export const updateProduct = async (
  slug: string | undefined,
  body: z.infer<typeof UpdateAuthor>,
  author: Author
) => {
  return await prisma.author.update({
    where: { slug },
    data: {
      name: body.name ?? author.name,
      about: body.about ?? author.about,
      imageUrl: body.imageUrl ?? author.imageUrl,
      slug: body.slug ?? author.slug,
    },
  })
}
