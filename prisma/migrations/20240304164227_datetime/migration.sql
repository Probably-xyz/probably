/*
  Warnings:

  - The `founded` column on the `Startup` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "founded",
ADD COLUMN     "founded" TIMESTAMP(3);
