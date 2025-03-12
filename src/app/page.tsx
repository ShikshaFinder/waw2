"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Transforming Event Planning Through Women Empowerment
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              We empower housewives to become professional event planners,
              creating beautiful moments while building successful careers.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => router.push("/form")}
              >
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Empowerment",
                description:
                  "Training housewives to become professional event planners",
                icon: "👑",
              },
              {
                title: "Scalability",
                description:
                  "Local talent and remote management for efficient expansion",
                icon: "📈",
              },
              {
                title: "Competitive Pricing",
                description: "High-quality services at affordable prices",
                icon: "💰",
              },
              {
                title: "Efficiency",
                description: "Professional handling with attention to detail",
                icon: "✨",
              },
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-purple-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We deliver a scalable, cost-effective approach to event planning
              that benefits both customers and the community. Our platform
              creates opportunities for women while ensuring top-quality event
              management services.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Join Our Network
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 WomenWork. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
