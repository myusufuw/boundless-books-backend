import { z } from "zod"

export const ProductSlug = z.object({
  slug: z.string().min(1).openapi({ example: "atomic-habits" }),
})

export const CreateProduct = z.object({
  title: z.string().min(5).openapi({ example: "Atomic Habits" }),
  slug: z.string().min(5).openapi({ example: "atomic-habits" }),
  authorSlug: z.string().min(3).openapi({ example: "james-clear" }).optional(),
  publicationDate: z
    .string()
    .datetime()
    .openapi({ example: "2024-05-27T03:57:00.438Z" })
    .optional(),
  numberOfPages: z.number().int().min(1).openapi({ example: 352 }).optional(),
  length: z.number().int().min(1).openapi({ example: 230 }).optional(),
  width: z.number().int().min(1).openapi({ example: 150 }).optional(),
  weight: z.number().int().openapi({ example: 500 }).optional(),
  language: z.string().min(3).openapi({ example: "Indonesian" }).optional(),
  description: z.string().min(15).openapi({
    example:
      "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa adalah buku kategori self improvement karya James Clear.",
  }),
  imageUrl: z
    .string()
    .url()
    .openapi({
      example:
        "https://cdn.gramedia.com/uploads/items/Atomic_Habits_C-FRONT_HC_-_Mockup.png",
    })
    .optional(),
  isbn: z.string().min(5).openapi({ example: "9786020667188" }).optional(),
  publisherSlug: z.string().min(1).openapi({ example: "gramedia" }).optional(),
  price: z.number().int().min(1).openapi({ example: 120000 }),
})

export const UpdateProduct = z.object({
  title: z.string().min(5).openapi({ example: "Atomic Habits" }).optional(),
  slug: z.string().min(5).openapi({ example: "atomic-habits" }).optional(),
  authorSlug: z.string().min(3).openapi({ example: "james-clear" }).optional(),
  publicationDate: z
    .string()
    .datetime()
    .openapi({ example: "2024-05-27T03:57:00.438Z" })
    .optional(),
  numberOfPages: z.number().int().min(1).openapi({ example: 352 }).optional(),
  length: z.number().int().min(1).openapi({ example: 230 }).optional(),
  width: z.number().int().min(1).openapi({ example: 150 }).optional(),
  weight: z.number().int().openapi({ example: 500 }).optional(),
  language: z.string().min(3).openapi({ example: "Indonesian" }).optional(),
  description: z
    .string()
    .min(15)
    .openapi({
      example:
        "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa adalah buku kategori self improvement karya James Clear.",
    })
    .optional(),
  imageUrl: z
    .string()
    .url()
    .openapi({
      example:
        "https://cdn.gramedia.com/uploads/items/Atomic_Habits_C-FRONT_HC_-_Mockup.png",
    })
    .optional(),
  isbn: z.string().min(5).openapi({ example: "9786020667188" }).optional(),
  publisherSlug: z.string().min(1).openapi({ example: "gramedia" }).optional(),
  price: z.number().int().min(1).openapi({ example: 120000 }).optional(),
})
