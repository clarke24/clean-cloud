"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { serviceInterests } from "@/lib/content";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  restaurantName: string;
  locations: string;
  postcode: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
}

interface FormErrors {
  name?: string;
  restaurantName?: string;
  email?: string;
  phone?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    restaurantName: "",
    locations: "1",
    postcode: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.restaurantName.trim()) {
      newErrors.restaurantName = "Restaurant name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Thank you! We'll be in touch within 24 hours.", {
        description: "Check your email for confirmation.",
      });

      // Reset form
      setFormData({
        name: "",
        restaurantName: "",
        locations: "1",
        postcode: "",
        email: "",
        phone: "",
        services: [],
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, serviceId]
        : prev.services.filter((s) => s !== serviceId),
    }));
  };

  return (
    <Card className="border-2 border-border">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Restaurant Name */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-navy font-medium">
                Your Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`mt-2 ${errors.name ? "border-destructive" : ""}`}
                placeholder="John Smith"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="restaurantName" className="text-navy font-medium">
                Restaurant Name *
              </Label>
              <Input
                id="restaurantName"
                type="text"
                value={formData.restaurantName}
                onChange={(e) =>
                  setFormData({ ...formData, restaurantName: e.target.value })
                }
                className={`mt-2 ${errors.restaurantName ? "border-destructive" : ""}`}
                placeholder="The Golden Fork"
              />
              {errors.restaurantName && (
                <p className="text-destructive text-sm mt-1">
                  {errors.restaurantName}
                </p>
              )}
            </div>
          </div>

          {/* Locations and Postcode */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="locations" className="text-navy font-medium">
                Number of Locations
              </Label>
              <Input
                id="locations"
                type="number"
                min="1"
                value={formData.locations}
                onChange={(e) =>
                  setFormData({ ...formData, locations: e.target.value })
                }
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="postcode" className="text-navy font-medium">
                Postcode
              </Label>
              <Input
                id="postcode"
                type="text"
                value={formData.postcode}
                onChange={(e) =>
                  setFormData({ ...formData, postcode: e.target.value })
                }
                className="mt-2"
                placeholder="SW1A 1AA"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email" className="text-navy font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`mt-2 ${errors.email ? "border-destructive" : ""}`}
                placeholder="john@restaurant.co.uk"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone" className="text-navy font-medium">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`mt-2 ${errors.phone ? "border-destructive" : ""}`}
                placeholder="07XXX XXXXXX"
              />
              {errors.phone && (
                <p className="text-destructive text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <Label className="text-navy font-medium block mb-4">
              Interested Services
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {serviceInterests.map((service) => (
                <div key={service.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={service.id}
                    checked={formData.services.includes(service.id)}
                    onCheckedChange={(checked) =>
                      handleServiceChange(service.id, checked as boolean)
                    }
                  />
                  <Label
                    htmlFor={service.id}
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    {service.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-navy font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-2 min-h-[120px]"
              placeholder="Tell us about your current setup, challenges, or any specific requirements..."
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-teal hover:bg-teal-light text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Enquiry
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

