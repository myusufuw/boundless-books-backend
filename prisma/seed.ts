import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

import { productList } from "./data/products"
import { publisherList } from "./data/publishers"
import { authorList } from "./data/authors"

async function main() {
  // SEED THE PUBLISHER DATA
  await prisma.publisher.deleteMany()
  await prisma.publisher.createMany({
    data: publisherList,
  })
  // SEED THE AUTHORS DATA
  await prisma.author.deleteMany()
  await prisma.author.createMany({
    data: authorList,
  })
  // SEED THE PRODUCTS DATA
  for (const product of productList) {
    const authorSlug = product.authorSlug
    const publisherSlug = product.publisherSlug

    delete product.authorSlug
    delete product.publisherSlug

    const newProductResult = await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        ...product,
        publisher: { connect: { slug: publisherSlug } },
        author: { connect: { slug: authorSlug } },
      },
      create: {
        ...product,
        publisher: { connect: { slug: publisherSlug } },
        author: { connect: { slug: authorSlug } },
      },
    })

    console.log(`Product: ${newProductResult.title}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
