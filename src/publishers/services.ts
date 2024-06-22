import { prisma } from "../lib/db"
import { CreatePublisher, UpdatePublisher } from "./schemas"
import { z } from "@hono/zod-openapi"

import type { Publisher } from "@prisma/client"

export const getAll = async () => {
  return await prisma.publisher.findMany({
    include: {
      books: true,
    },
  })
}

export const getDetailBySlug = async (slug: string | undefined) => {
  return await prisma.publisher.findUnique({
    where: { slug },
    include: { books: true },
  })
}

export const createPublisher = async (
  body: z.infer<typeof CreatePublisher>
) => {
  return await prisma.publisher.create({
    data: {
      name: body?.name ?? null,
      address: body?.address ?? null,
      slug: body?.slug ?? null,
    },
  })
}

export const deleteAll = async () => {
  return await prisma.publisher.deleteMany()
}

export const deleteBySlug = async (slug: string | undefined) => {
  return await prisma.publisher.delete({ where: { slug } })
}

export const updatePublisher = async (
  slug: string | undefined,
  body: z.infer<typeof UpdatePublisher>,
  publisher: Publisher
) => {
  return await prisma.publisher.update({
    where: { slug },
    data: {
      name: body?.name ?? publisher.name,
      address: body?.address ?? publisher.address,
      slug: body?.slug ?? publisher.slug,
    },
  })
}
