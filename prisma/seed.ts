import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

import { productList } from "./data/products"

async function main() {
  for (const product of productList) {
    const newProductResult = await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
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
