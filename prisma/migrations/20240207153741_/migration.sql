/*
  Warnings:

  - Added the required column `authorId` to the `Startup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Startup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Startup" ADD COLUMN     "authorId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Founder" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "number" TEXT,
    "status" TEXT,
    "title" TEXT,
    "shortDesc" TEXT,
    "summary" TEXT,
    "github" TEXT,
    "linkedin" TEXT,
    "twitter" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Founder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investor" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "number" TEXT,
    "status" TEXT,
    "type" TEXT,
    "firm" TEXT,
    "stage" TEXT[],
    "sectors" TEXT[],
    "regions" TEXT[],
    "portfolio" TEXT,
    "website" TEXT,
    "twitter" TEXT,
    "linkedin" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Investor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_InvestorToStartup" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Founder_userId_key" ON "Founder"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Investor_userId_key" ON "Investor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_InvestorToStartup_AB_unique" ON "_InvestorToStartup"("A", "B");

-- CreateIndex
CREATE INDEX "_InvestorToStartup_B_index" ON "_InvestorToStartup"("B");

-- AddForeignKey
ALTER TABLE "Founder" ADD CONSTRAINT "Founder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investor" ADD CONSTRAINT "Investor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Founder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InvestorToStartup" ADD CONSTRAINT "_InvestorToStartup_A_fkey" FOREIGN KEY ("A") REFERENCES "Investor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InvestorToStartup" ADD CONSTRAINT "_InvestorToStartup_B_fkey" FOREIGN KEY ("B") REFERENCES "Startup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
