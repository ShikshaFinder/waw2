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

const formSchema = z.object({
  // Basic Information
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Invalid phone number"),
  alternatePhone: z.string().optional(),
  email: z.string().email().optional(),
  eventDate: z.date(),
  eventTime: z.string(),
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

export function EventBookingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      decorationStyles: [],
      foodPreferences: [],
      entertainmentChoices: [],
      additionalServices: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Submission failed");
      // Handle success (e.g., show success message, redirect)
    } catch (error) {
      // Handle error
      console.error("Submission error:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            મૂળભૂત માહિતી / Basic Information
          </h2>

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name / પૂરું નામ</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number / ફોન નંબર</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Event Date */}
          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Event Date / કાર્યક્રમની તારીખ</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant="outline">
                        {field.value
                          ? format(field.value, "PPP")
                          : "Select date"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
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

          {/* Event Type */}
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Type / કાર્યક્રમનો પ્રકાર</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
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

          {/* Expected Guests */}
          <FormField
            control={form.control}
            name="expectedGuests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Guests / અપેક્ષિત મહેમાનો</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select guest range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="0-50">0-50</SelectItem>
                    <SelectItem value="50-100">50-100</SelectItem>
                    <SelectItem value="100-200">100-200</SelectItem>
                    <SelectItem value="200-500">200-500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Decoration Styles */}
          <FormField
            control={form.control}
            name="decorationStyles"
            render={() => (
              <FormItem>
                <FormLabel>Decoration Style / સજાવટની શૈલી</FormLabel>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      id: "traditional",
                      label: "Traditional Gujarati (ટ્રેડિશનલ ગુજરાતી)",
                    },
                    { id: "floral", label: "Floral (ફ્લોરલ ડેકોર)" },
                    { id: "minimalist", label: "Minimalist (સરળ અને આકર્ષક)" },
                    { id: "royal", label: "Royal Theme (શાહી થીમ)" },
                    { id: "bollywood", label: "Bollywood Theme (બોલીવુડ થીમ)" },
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

          {/* Budget Range */}
          <FormField
            control={form.control}
            name="budgetRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget Range / બજેટ રેન્જ</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="below-50k">Below ₹50,000</SelectItem>
                    <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="1l-3l">₹1,00,000 - ₹3,00,000</SelectItem>
                    <SelectItem value="3l-5l">₹3,00,000 - ₹5,00,000</SelectItem>
                    <SelectItem value="5l+">₹5,00,000+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Special Requests */}
          <FormField
            control={form.control}
            name="specialRequests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Special Requests / વિશેષ વિનંતીઓ</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter any special requests or additional notes"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Preferred Communication */}
          <FormField
            control={form.control}
            name="preferredCommunication"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Preferred Communication / પસંદગીનું માધ્યમ
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="phone" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Phone Call (ફોન કૉલ)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="whatsapp" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        WhatsApp (વોટ્સએપ)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="email" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Email (ઇમેઇલ)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Submit Booking / બુકિંગ સબમિટ કરો</Button>
      </form>
    </Form>
  );
}
