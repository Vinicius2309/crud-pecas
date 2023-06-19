/*
  Warnings:

  - Added the required column `tipoId` to the `produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tipo" DROP CONSTRAINT "tipo_produtoId_fkey";

-- AlterTable
ALTER TABLE "produto" ADD COLUMN     "tipoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
