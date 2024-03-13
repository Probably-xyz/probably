/*
  Warnings:

  - You are about to drop the `Founder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Investor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Founder" DROP CONSTRAINT "Founder_userId_fkey";

-- DropForeignKey
ALTER TABLE "Investor" DROP CONSTRAINT "Investor_userId_fkey";

-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_id_fkey";

-- AlterTable
ALTER TABLE "Startup" ADD COLUMN     "coreTeam" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3),
ADD COLUMN     "founded" INTEGER,
ADD COLUMN     "invStage" TEXT,
ADD COLUMN     "milestones" TEXT,
ADD COLUMN     "teamSize" TEXT,
ALTER COLUMN "founderId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT;

-- DropTable
DROP TABLE "Founder";

-- DropTable
DROP TABLE "Investor";
