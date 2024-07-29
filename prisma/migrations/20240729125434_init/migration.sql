-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "clientName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "initialDate" TIMESTAMP(3) NOT NULL,
    "accountNumber" INTEGER NOT NULL,
    "amount" BIGINT NOT NULL,
    "currency" TEXT NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contract_email_key" ON "Contract"("email");
