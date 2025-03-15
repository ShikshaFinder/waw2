"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const benefits = [
  {
    title: "Flexible Hours",
    description:
      "Work on your own schedule while maintaining work-life balance",
    icon: "⏰",
  },
  {
    title: "Professional Training",
    description:
      "Comprehensive training program to develop event planning skills",
    icon: "📚",
  },
  {
    title: "Supportive Community",
    description: "Join a network of like-minded women entrepreneurs",
    icon: "👥",
  },
  {
    title: "Earning Potential",
    description: "Competitive compensation with opportunity for growth",
    icon: "💰",
  },
];

const steps = [
  {
    title: "Apply",
    description:
      "Fill out our online application form to express your interest",
  },
  {
    title: "Interview",
    description: "Meet with our team to discuss your goals and expectations",
  },
  {
    title: "Train",
    description: "Complete our comprehensive training program",
  },
  {
    title: "Start Planning",
    description: "Begin working with clients and creating beautiful events",
  },
];

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Join Our Network
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8">
            Turn your passion for organizing and creativity into a rewarding
            career in event planning. Join our network of successful women
            entrepreneurs.
          </p>
          <div className="text-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
              asChild
            >
              <Link href="/form">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of Joining
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Join</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join our network of successful event planners and start building
              your career today.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
              asChild
            >
              <Link href="/form">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
