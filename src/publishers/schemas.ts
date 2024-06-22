import { z } from "@hono/zod-openapi"

export const PublisherSlug = z.object({
  slug: z.string().min(1).openapi({ example: "gramedia" }),
})

export const CreatePublisher = z.object({
  name: z.string().min(3).openapi({ example: "Gramedia" }),
  address: z.string().min(10).openapi({ example: "Jl HOS Cokroaminoto N0 45" }),
  slug: z.string().min(3).openapi({ example: "gramedia" }),
})

export const UpdatePublisher = z.object({
  name: z.string().min(3).openapi({ example: "Gramedia" }).optional(),
  address: z
    .string()
    .min(10)
    .openapi({ example: "Jl HOS Cokroaminoto N0 45" })
    .optional(),
  slug: z.string().min(3).openapi({ example: "gramedia" }).optional(),
})
