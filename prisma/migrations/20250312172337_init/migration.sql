-- CreateTable
CREATE TABLE "EventBooking" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "alternatePhone" TEXT,
    "email" TEXT,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventTime" TIMESTAMP(3) NOT NULL,
    "venueName" TEXT NOT NULL,
    "venueAddress" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "customEventType" TEXT,
    "expectedGuests" TEXT NOT NULL,
    "exactGuestCount" INTEGER,
    "cateringRequired" TEXT NOT NULL,
    "photographyPackage" TEXT NOT NULL,
    "seatingArrangement" TEXT NOT NULL,
    "customSeating" TEXT,
    "budgetRange" TEXT NOT NULL,
    "customBudget" DOUBLE PRECISION,
    "specialRequests" TEXT,
    "preferredCommunication" TEXT NOT NULL,

    CONSTRAINT "EventBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DecorationStyle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "customTheme" TEXT,

    CONSTRAINT "DecorationStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodPreference" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FoodPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomMenu" (
    "id" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "CustomMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entertainment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Entertainment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomEntertainment" (
    "id" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "CustomEntertainment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomTheme" (
    "id" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "CustomTheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdditionalService" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "customDetail" TEXT,

    CONSTRAINT "AdditionalService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventBookingToFoodPreference" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EventBookingToFoodPreference_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_DecorationStyleToEventBooking" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DecorationStyleToEventBooking_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_EntertainmentToEventBooking" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EntertainmentToEventBooking_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_AdditionalServiceToEventBooking" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdditionalServiceToEventBooking_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomMenu_eventId_key" ON "CustomMenu"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomEntertainment_eventId_key" ON "CustomEntertainment"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomTheme_eventId_key" ON "CustomTheme"("eventId");

-- CreateIndex
CREATE INDEX "_EventBookingToFoodPreference_B_index" ON "_EventBookingToFoodPreference"("B");

-- CreateIndex
CREATE INDEX "_DecorationStyleToEventBooking_B_index" ON "_DecorationStyleToEventBooking"("B");

-- CreateIndex
CREATE INDEX "_EntertainmentToEventBooking_B_index" ON "_EntertainmentToEventBooking"("B");

-- CreateIndex
CREATE INDEX "_AdditionalServiceToEventBooking_B_index" ON "_AdditionalServiceToEventBooking"("B");

-- AddForeignKey
ALTER TABLE "CustomMenu" ADD CONSTRAINT "CustomMenu_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "EventBooking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomEntertainment" ADD CONSTRAINT "CustomEntertainment_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "EventBooking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomTheme" ADD CONSTRAINT "CustomTheme_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "EventBooking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventBookingToFoodPreference" ADD CONSTRAINT "_EventBookingToFoodPreference_A_fkey" FOREIGN KEY ("A") REFERENCES "EventBooking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventBookingToFoodPreference" ADD CONSTRAINT "_EventBookingToFoodPreference_B_fkey" FOREIGN KEY ("B") REFERENCES "FoodPreference"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DecorationStyleToEventBooking" ADD CONSTRAINT "_DecorationStyleToEventBooking_A_fkey" FOREIGN KEY ("A") REFERENCES "DecorationStyle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DecorationStyleToEventBooking" ADD CONSTRAINT "_DecorationStyleToEventBooking_B_fkey" FOREIGN KEY ("B") REFERENCES "EventBooking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntertainmentToEventBooking" ADD CONSTRAINT "_EntertainmentToEventBooking_A_fkey" FOREIGN KEY ("A") REFERENCES "Entertainment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntertainmentToEventBooking" ADD CONSTRAINT "_EntertainmentToEventBooking_B_fkey" FOREIGN KEY ("B") REFERENCES "EventBooking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdditionalServiceToEventBooking" ADD CONSTRAINT "_AdditionalServiceToEventBooking_A_fkey" FOREIGN KEY ("A") REFERENCES "AdditionalService"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdditionalServiceToEventBooking" ADD CONSTRAINT "_AdditionalServiceToEventBooking_B_fkey" FOREIGN KEY ("B") REFERENCES "EventBooking"("id") ON DELETE CASCADE ON UPDATE CASCADE;
