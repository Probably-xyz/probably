/*
  Warnings:

  - You are about to drop the column `coreTeam` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `extraTwo` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `fileExtra` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `founderId` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `goal` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `invStage` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `Startup` table. All the data in the column will be lost.
  - Added the required column `desc` to the `Startup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `development` to the `Startup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Startup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamDesc` to the `Startup` table without a default value. This is not possible if the table is not empty.
  - Made the column `founded` on table `Startup` required. This step will fail if there are existing NULL values in that column.
  - Made the column `milestones` on table `Startup` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamSize` on table `Startup` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "coreTeam",
DROP COLUMN "createdAt",
DROP COLUMN "extraTwo",
DROP COLUMN "fileExtra",
DROP COLUMN "founderId",
DROP COLUMN "goal",
DROP COLUMN "invStage",
DROP COLUMN "summary",
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "development" TEXT NOT NULL,
ADD COLUMN     "fundGoal" TEXT,
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "teamDesc" TEXT NOT NULL,
ADD COLUMN     "twitter" TEXT,
ADD COLUMN     "video" TEXT,
ALTER COLUMN "founded" SET NOT NULL,
ALTER COLUMN "founded" SET DATA TYPE TEXT,
ALTER COLUMN "milestones" SET NOT NULL,
ALTER COLUMN "teamSize" SET NOT NULL;
