/*
  Warnings:

  - You are about to drop the column `investorId` on the `Startup` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_investorId_fkey";

-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "investorId";

-- CreateTable
CREATE TABLE "_InvestorToStartup" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_InvestorToStartup_AB_unique" ON "_InvestorToStartup"("A", "B");

-- CreateIndex
CREATE INDEX "_InvestorToStartup_B_index" ON "_InvestorToStartup"("B");

-- AddForeignKey
ALTER TABLE "_InvestorToStartup" ADD CONSTRAINT "_InvestorToStartup_A_fkey" FOREIGN KEY ("A") REFERENCES "Investor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InvestorToStartup" ADD CONSTRAINT "_InvestorToStartup_B_fkey" FOREIGN KEY ("B") REFERENCES "Startup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
