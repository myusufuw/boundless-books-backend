import { z } from "@hono/zod-openapi"
import { prisma } from "../lib/db"

import { CreateProduct, UpdateProduct } from "./schemas"

import type { Product } from "@prisma/client"

export const getAll = async () => {
  return await prisma.product.findMany({
    include: {
      publisher: true,
      author: true,
    },
  })
}

export const getDetailBySlug = async (slug: string | undefined) => {
  return await prisma.product.findUnique({
    where: { slug },
    include: {
      publisher: true,
      author: true,
    },
  })
}

export const deleteAll = async () => {
  return await prisma.product.deleteMany()
}

export const deleteBySlug = async (slug: string | undefined) => {
  return await prisma.product.delete({ where: { slug } })
}

export const createProduct = async (
  body: z.infer<typeof CreateProduct> & {
    publisherSlug: string
    authorSlug: string
  }
) => {
  return await prisma.product.create({
    data: {
      title: body.title ?? null,
      slug: body.slug ?? null,
      publicationDate: body.publicationDate ?? null,
      numberOfPages: body.numberOfPages ?? null,
      length: body.length ?? null,
      width: body.width ?? null,
      weight: body.weight ?? null,
      description: body.description ?? null,
      imageUrl: body.imageUrl ?? null,
      isbn: body.isbn ?? null,
      price: body?.price ?? null,
      // author: { connect: { slug: body?.authorSlug } },
      // publisher: { connect: { slug: body?.publisherSlug } },
    },
  })
}

export const updateProduct = async (
  slug: string | undefined,
  body: z.infer<typeof UpdateProduct> & {
    publisherSlug: string | undefined
    authorSlug: string | undefined
  },
  product: Product
  // currentPublisherSlug: string,
  // currentAuthorSlug: string
) => {
  return await prisma.product.update({
    where: { slug },
    data: {
      title: body.title ?? product.title,
      slug: body.slug ?? product.slug,
      publicationDate: body.publicationDate ?? product.publicationDate,
      numberOfPages: body.numberOfPages ?? product.numberOfPages,
      length: body.length ?? product.length,
      width: body.width ?? product.width,
      weight: body.weight ?? product.weight,
      description: body.description ?? product.description,
      imageUrl: body.imageUrl ?? product.imageUrl,
      isbn: body.isbn ?? product.isbn,
      price: body?.price ?? product.price,
      // author: { connect: { slug: body?.authorSlug } },
      // publisher: { connect: { slug: body?.publisherSlug } },
    },
  })
}
