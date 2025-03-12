import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Convert eventDate string to Date object
    const eventDate = new Date(data.eventDate);

    // Create eventTime as DateTime by combining date and time
    const [hours, minutes] = data.eventTime.split(":");
    const eventTime = new Date(eventDate);
    eventTime.setHours(parseInt(hours), parseInt(minutes));

    // Create the event booking
    const booking = await prisma.eventBooking.create({
      data: {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        alternatePhone: data.alternatePhone,
        email: data.email,
        eventDate: eventDate,
        eventTime: eventTime,
        venueName: data.venueName,
        venueAddress: data.venueAddress,
        eventType: data.eventType,
        customEventType: data.customEventType,
        expectedGuests: data.expectedGuests,
        exactGuestCount: data.exactGuestCount,
        cateringRequired: data.cateringRequired,
        photographyPackage: data.photographyPackage,
        seatingArrangement: data.seatingArrangement,
        customSeating: data.customSeating,
        budgetRange: data.budgetRange,
        customBudget: data.customBudget,
        specialRequests: data.specialRequests,
        preferredCommunication: data.preferredCommunication,
        // Handle relations
        decorationStyles: {
          create: data.decorationStyles.map((style: string) => ({
            name: style,
          })),
        },
        foodPreferences: {
          create: data.foodPreferences.map((pref: string) => ({
            name: pref,
          })),
        },
        entertainmentChoices: {
          create: data.entertainmentChoices.map((choice: string) => ({
            name: choice,
          })),
        },
        additionalServices: {
          create: data.additionalServices.map((service: string) => ({
            name: service,
          })),
        },
        ...(data.customMenu && {
          customMenu: {
            create: {
              details: data.customMenu,
            },
          },
        }),
        ...(data.customTheme && {
          customTheme: {
            create: {
              details: data.customTheme,
            },
          },
        }),
        ...(data.customEntertainment && {
          customEntertainment: {
            create: {
              details: data.customEntertainment,
            },
          },
        }),
      },
    });

    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
