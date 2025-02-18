"use server";

import { contactFormSchema } from "@/app/lib/schema";
import { appendToSheet } from "@/app/lib/sheets";
import { z } from "zod";

export async function contactFormAction(_prevState: unknown, formData: FormData) {
  const defaultValues = z.record(z.string(), z.string()).parse(Object.fromEntries(formData.entries()));

  try {
    const data = contactFormSchema.parse({
      ...Object.fromEntries(formData),
      feedback: formData.get('feedback') || '' // Handle empty feedback
    });

    const result = await appendToSheet(data);
    console.log("Form submission successful:", result);

    return {
      defaultValues: {
        teamName: "",
        memberName: "",
        institution: "",
        teamDescription: "",
        email: "",
        feedback: "",
      },
      success: true,
      errors: null,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        defaultValues,
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [key, value?.join(", ")]),
        ),
      };
    }

    console.error("Form submission error:", error);
    return {
      defaultValues,
      success: false,
      errors: {
        form: "Failed to submit form. Please try again later.",
      },
    };
  }
}