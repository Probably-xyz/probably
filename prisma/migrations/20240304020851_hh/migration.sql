/*
  Warnings:

  - You are about to drop the column `authorId` on the `Startup` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[founderId]` on the table `Startup` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `founderId` to the `Startup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_authorId_fkey";

-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "authorId",
ADD COLUMN     "founderId" TEXT NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "logo" DROP NOT NULL,
ALTER COLUMN "tagline" DROP NOT NULL,
ALTER COLUMN "industry" DROP NOT NULL,
ALTER COLUMN "stage" DROP NOT NULL,
ALTER COLUMN "lookingFor" DROP NOT NULL,
ALTER COLUMN "pitch" DROP NOT NULL,
ALTER COLUMN "milestones" DROP NOT NULL,
ALTER COLUMN "teamSize" DROP NOT NULL,
ALTER COLUMN "desc" DROP NOT NULL,
ALTER COLUMN "development" DROP NOT NULL,
ALTER COLUMN "region" DROP NOT NULL,
ALTER COLUMN "teamDesc" DROP NOT NULL,
ALTER COLUMN "founded" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Startup_founderId_key" ON "Startup"("founderId");

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_founderId_fkey" FOREIGN KEY ("founderId") REFERENCES "Founder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
