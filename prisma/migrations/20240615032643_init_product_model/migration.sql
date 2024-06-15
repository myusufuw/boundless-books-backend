-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "isbn" VARCHAR(255),
    "slug" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "publicationDate" TIMESTAMPTZ,
    "numberOfPages" INTEGER,
    "length" INTEGER,
    "width" INTEGER,
    "weight" INTEGER,
    "language" VARCHAR(255),
    "description" TEXT NOT NULL,
    "imageUrl" VARCHAR(255),
    "publisher" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_title_key" ON "Product"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Product_isbn_key" ON "Product"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
