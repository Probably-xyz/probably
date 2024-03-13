/*
  Warnings:

  - Changed the type of `founded` on the `Startup` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "founded",
ADD COLUMN     "founded" INTEGER NOT NULL;
