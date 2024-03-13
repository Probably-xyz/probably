/*
  Warnings:

  - A unique constraint covering the columns `[founderId]` on the table `Startup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Startup_founderId_key" ON "Startup"("founderId");
