"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactMethods = [
  {
    title: "Email",
    value: "contact@womenwork.com",
    icon: "📧",
  },
  {
    title: "Phone",
    value: "+1 (555) 123-4567",
    icon: "📞",
  },
  {
    title: "Address",
    value: "123 Event Street, Suite 100, New York, NY 10001",
    icon: "📍",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8">
            Have questions about our services or interested in joining our
            network? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Your message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{method.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">
                            {method.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
