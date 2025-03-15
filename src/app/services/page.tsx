"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "Wedding Planning",
    description:
      "Complete wedding planning services from venue selection to day-of coordination.",
    features: [
      "Venue Selection",
      "Vendor Management",
      "Timeline Planning",
      "Budget Management",
      "Day-of Coordination",
    ],
    icon: "💒",
  },
  {
    title: "Corporate Events",
    description:
      "Professional corporate event planning for conferences, seminars, and team building.",
    features: [
      "Venue Booking",
      "Catering Services",
      "Audio/Visual Setup",
      "Registration Management",
      "Corporate Branding",
    ],
    icon: "🏢",
  },
  {
    title: "Birthday Parties",
    description: "Creative and fun birthday party planning for all ages.",
    features: [
      "Theme Development",
      "Decoration Setup",
      "Entertainment Booking",
      "Catering Coordination",
      "Party Favors",
    ],
    icon: "🎂",
  },
  {
    title: "Social Gatherings",
    description:
      "Memorable social events from intimate gatherings to large celebrations.",
    features: [
      "Event Design",
      "Guest List Management",
      "Menu Planning",
      "Entertainment",
      "Setup & Cleanup",
    ],
    icon: "🎉",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            We offer a comprehensive range of event planning services, each
            delivered with professionalism and attention to detail by our
            trained event planners.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
              asChild
            >
              <Link href="/form">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
