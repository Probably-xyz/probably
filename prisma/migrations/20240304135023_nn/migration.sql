-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_founderId_fkey";

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_founderId_fkey" FOREIGN KEY ("founderId") REFERENCES "Founder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
