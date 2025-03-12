"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const formSchema = z.object({
  // Basic Information
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Invalid phone number"),
  alternatePhone: z.string().optional(),
  email: z.string().email().optional(),
  eventDate: z.date(),
  eventTime: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
  venueName: z.string().min(2, "Venue name is required"),
  venueAddress: z.string().min(10, "Please provide complete venue address"),

  // Event Type
  eventType: z.string(),
  customEventType: z.string().optional(),
  expectedGuests: z.string(),
  exactGuestCount: z.number().optional(),

  // Selections
  decorationStyles: z.array(z.string()),
  customTheme: z.string().optional(),
  foodPreferences: z.array(z.string()),
  customMenu: z.string().optional(),
  cateringRequired: z.string(),
  entertainmentChoices: z.array(z.string()),
  customEntertainment: z.string().optional(),
  photographyPackage: z.string(),
  seatingArrangement: z.string(),
  customSeating: z.string().optional(),
  additionalServices: z.array(z.string()),

  // Budget and Additional Info
  budgetRange: z.string(),
  customBudget: z.number().optional(),
  specialRequests: z.string().optional(),
  preferredCommunication: z.string(),
});

export default function EventBookingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      alternatePhone: "",
      email: "",
      eventTime: "",
      venueName: "",
      venueAddress: "",
      eventType: "",
      customEventType: "",
      expectedGuests: "",
      decorationStyles: [],
      customTheme: "",
      foodPreferences: [],
      customMenu: "",
      cateringRequired: "",
      entertainmentChoices: [],
      customEntertainment: "",
      photographyPackage: "",
      seatingArrangement: "",
      customSeating: "",
      additionalServices: [],
      budgetRange: "",
      specialRequests: "",
      preferredCommunication: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit booking");
      }

      const result = await response.json();
      console.log("Submission successful:", result);

      // Show success message using toast or alert
      alert("Booking submitted successfully! We will contact you soon.");

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to submit booking. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto py-12 px-6"
      >
        <div className="space-y-10">
          <h2 className="text-3xl font-bold mb-8 text-center">
            મૂળભૂત માહિતી / Basic Information
          </h2>

          <div className="grid gap-8">
            {/* Basic Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base">
                      Full Name / પૂરું નામ
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        className="p-6"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base">
                      Phone Number / ફોન નંબર
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter phone number"
                        className="p-6"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Event Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base">
                      Event Date / કાર્યક્રમની તારીખ
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className="w-full p-6">
                            {field.value
                              ? format(field.value, "PPP")
                              : "Select date"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eventTime"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base">
                      Event Time / કાર્યક્રમનો સમય
                    </FormLabel>
                    <FormControl>
                      <Input type="time" className="p-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base">
                      Event Type / કાર્યક્રમનો પ્રકાર
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="p-6">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding (લગ્ન)</SelectItem>
                        <SelectItem value="engagement">
                          Engagement (સગાઈ)
                        </SelectItem>
                        <SelectItem value="birthday">
                          Birthday Party (જન્મદિવસ)
                        </SelectItem>
                        <SelectItem value="babyShower">
                          Baby Shower (ગોધ ભરાઈ)
                        </SelectItem>
                        <SelectItem value="housewarming">
                          Housewarming (ગ્રહપ્રવેશ)
                        </SelectItem>
                        <SelectItem value="anniversary">
                          Anniversary (લગ્નની વર્ષગાંઠ)
                        </SelectItem>
                        <SelectItem value="religious">
                          Religious Function (ધાર્મિક વિધિ)
                        </SelectItem>
                        <SelectItem value="corporate">
                          Corporate Event (કોર્પોરેટ ઇવેન્ટ)
                        </SelectItem>
                        <SelectItem value="other">Other (અન્ય)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Decoration Styles Section */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="decorationStyles"
                render={() => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-lg font-semibold">
                      Decoration Style / સજાવટની શૈલી
                    </FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 p-4 bg-gray-50 rounded-lg">
                      {[
                        {
                          id: "traditional",
                          label: "Traditional Gujarati (ટ્રેડિશનલ ગુજરાતી)",
                        },
                        { id: "floral", label: "Floral (ફ્લોરલ ડેકોર)" },
                        {
                          id: "minimalist",
                          label: "Minimalist (સરળ અને આકર્ષક)",
                        },
                        { id: "royal", label: "Royal Theme (શાહી થીમ)" },
                        {
                          id: "bollywood",
                          label: "Bollywood Theme (બોલીવુડ થીમ)",
                        },
                      ].map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="decorationStyles"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    const current = field.value || [];
                                    const updated = checked
                                      ? [...current, item.id]
                                      : current.filter(
                                          (value) => value !== item.id
                                        );
                                    field.onChange(updated);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {/* Budget and Special Requests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="budgetRange"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base">
                      Budget Range / બજેટ રેન્જ
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="p-6">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="below-50k">Below ₹50,000</SelectItem>
                        <SelectItem value="50k-1l">
                          ₹50,000 - ₹1,00,000
                        </SelectItem>
                        <SelectItem value="1l-3l">
                          ₹1,00,000 - ₹3,00,000
                        </SelectItem>
                        <SelectItem value="3l-5l">
                          ₹3,00,000 - ₹5,00,000
                        </SelectItem>
                        <SelectItem value="5l+">₹5,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base">
                      Special Requests / વિશેષ વિનંતીઓ
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter any special requests or additional notes"
                        className="min-h-[120px] p-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            onClick={(e) => {
              e.preventDefault();
              form.handleSubmit(onSubmit)(e);
            }}
            className="w-full md:w-auto mt-10 p-6 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Submitting...
              </>
            ) : (
              "Submit Booking / બુકિંગ સબમિટ કરો"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
