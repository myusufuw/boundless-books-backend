import { z } from "zod"

export const AuthorSlug = z.object({
  slug: z.string().min(1).openapi({ example: "james-clear" }),
})

export const CreateAuthor = z.object({
  name: z.string().min(3).openapi({ example: "James Clear" }),
  slug: z.string().min(3).openapi({ example: "james-clear" }),
  about: z
    .string()
    .min(10)
    .openapi({
      example:
        "James Clear adalah seorang penulis dan pembicara. Dia adalah penulis buku terlaris #1 New York Times, Atomic Habits, dan buletin 3-2-1 yang populer.",
    })
    .optional(),
  imageUrl: z
    .string()
    .url()
    .openapi({
      example:
        "https://cdn.gramedia.com/uploads/authors/James_Clear_Author1__w200_hauto.jpg",
    })
    .optional(),
})

export const UpdateAuthor = z.object({
  name: z.string().min(3).openapi({ example: "James Clear" }).optional(),
  slug: z.string().min(3).openapi({ example: "james-clear" }).optional(),
  about: z
    .string()
    .min(10)
    .openapi({
      example:
        "James Clear adalah seorang penulis dan pembicara. Dia adalah penulis buku terlaris #1 New York Times, Atomic Habits, dan buletin 3-2-1 yang populer.",
    })
    .optional(),
  imageUrl: z
    .string()
    .url()
    .openapi({
      example:
        "https://cdn.gramedia.com/uploads/authors/James_Clear_Author1__w200_hauto.jpg",
    })
    .optional(),
})
