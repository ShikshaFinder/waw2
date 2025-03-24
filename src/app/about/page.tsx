"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About WomenAtWork
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              WomenAtWork is a revolutionary platform that bridges the gap between
              talented housewives and the event planning industry. We believe in
              empowering women by providing them with the tools, training, and
              opportunities to build successful careers while maintaining the
              flexibility they need.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To create economic opportunities for women by transforming
                  their natural talent for organization and hospitality into
                  professional event planning careers, while providing clients
                  with exceptional service at competitive prices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To become the leading platform that empowers women through
                  flexible career opportunities in event planning, creating a
                  network of skilled professionals who deliver outstanding
                  experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Empowerment",
                description:
                  "We believe in the potential of every woman to achieve professional success.",
              },
              {
                title: "Excellence",
                description:
                  "We maintain high standards in our training and service delivery.",
              },
              {
                title: "Community",
                description:
                  "We foster a supportive network of women helping women succeed.",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
