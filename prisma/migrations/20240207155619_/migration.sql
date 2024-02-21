/*
  Warnings:

  - You are about to drop the `_InvestorToStartup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Founder" DROP CONSTRAINT "Founder_userId_fkey";

-- DropForeignKey
ALTER TABLE "_InvestorToStartup" DROP CONSTRAINT "_InvestorToStartup_A_fkey";

-- DropForeignKey
ALTER TABLE "_InvestorToStartup" DROP CONSTRAINT "_InvestorToStartup_B_fkey";

-- AlterTable
ALTER TABLE "Startup" ADD COLUMN     "investorId" TEXT;

-- DropTable
DROP TABLE "_InvestorToStartup";

-- AddForeignKey
ALTER TABLE "Founder" ADD CONSTRAINT "Founder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "Investor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
