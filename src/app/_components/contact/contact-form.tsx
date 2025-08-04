"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        console.error("Form submission failed:", result);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="contact"
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6 w-full max-w-md mx-auto", className)}
    >
      {/* Name Field */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name *
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white",
            errors.name &&
              "border-red-500 focus:ring-red-500 focus:border-red-500"
          )}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email *
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white",
            errors.email &&
              "border-red-500 focus:ring-red-500 focus:border-red-500"
          )}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Subject *
        </label>
        <input
          {...register("subject")}
          type="text"
          id="subject"
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white",
            errors.subject &&
              "border-red-500 focus:ring-red-500 focus:border-red-500"
          )}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message *
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white resize-vertical",
            errors.message &&
              "border-red-500 focus:ring-red-500 focus:border-red-500"
          )}
          placeholder="Tell me more about your project or inquiry..."
        />
        {errors.message && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200",
          isSubmitting && "opacity-50 cursor-not-allowed"
        )}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-3 text-sm text-green-700 bg-green-100 border border-green-400 rounded-md dark:bg-green-900 dark:text-green-300 dark:border-green-600">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md dark:bg-red-900 dark:text-red-300 dark:border-red-600">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
}
