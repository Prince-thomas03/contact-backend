/*
  Warnings:

  - You are about to drop the `contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "contact" DROP CONSTRAINT "contact_userId_fkey";

-- DropTable
DROP TABLE "contact";
