import { z } from "zod";

export const contactFormSchema = z.object({
  teamName: z
    .string()
    .min(2, { message: "Team name must be at least 2 characters" })
    .max(32, { message: "Team name must be at most 32 characters" }),
  memberName: z
    .string()
    .min(2, { message: "Member name must be at least 2 characters" })
    .max(32, { message: "Member name must be at most 32 characters" }),
  institution: z
    .string()
    .min(2, { message: "Institution/Company must be at least 2 characters" })
    .max(64, { message: "Institution/Company must be at most 64 characters" }),
  teamDescription: z
    .string()
    .max(500, { message: "Team description must be at most 500 characters" })
    .optional(),
  email: z.string().email({ message: "Invalid email address" }),
});