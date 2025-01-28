"use client";

import * as React from "react";
import { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { cn } from "@/app/lib/utils";
import { Check } from "lucide-react";
import { contactFormAction } from "@/app/lib/actions";

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [state, formAction, pending] = React.useActionState(contactFormAction, {
    defaultValues: {
      teamName: "",
      memberName: "",
      institution: "",
      teamDescription: "",
      email: "",
    },
    success: false,
    errors: null,
  });

  // State to track whether the checkbox is checked
  const [isAgreed, setIsAgreed] = React.useState(false);

  // Simple Terms and Conditions text
  const termsAndConditions = `
    **Terms and Conditions for the Competition**

    1. **Eligibility**: 
       - Participants must be at least 18 years old.
       - Teams must consist of 2-5 members.

    2. **Registration**:
       - All team members must provide accurate information during registration.
       - Each team can only register once.

    3. **Submission**:
       - All submissions must be original work.
       - Plagiarism will result in immediate disqualification.

    4. **Judging**:
       - Entries will be judged based on creativity, innovation, and adherence to the competition guidelines.
       - The judges' decisions are final and binding.

    5. **Prizes**:
       - Prizes are non-transferable and cannot be exchanged for cash.
       - Winners will be notified via email.

    6. **Liability**:
       - The organizers are not responsible for any loss or damage to participants' property.
       - Participants agree to indemnify the organizers against any claims arising from their participation.

    7. **Amendments**:
       - The organizers reserve the right to modify these terms and conditions at any time.

    By participating in this competition, you agree to abide by these terms and conditions.
  `;

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle>Join the Competition</CardTitle>
        <CardDescription>Fill out the form to register your team for the competition.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="flex flex-col gap-6">
          {state.success ? (
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <Check className="size-4" />
              Your registration has been submitted. Thank you!
            </p>
          ) : null}

          {/* Team Name */}
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.teamName}>
            <Label htmlFor="teamName" className="group-data-[invalid=true]/field:text-destructive">
              Team Name <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="teamName"
              name="teamName"
              placeholder="Team Alpha"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.teamName}
              aria-errormessage="error-teamName"
              defaultValue={state.defaultValues.teamName}
            />
            {state.errors?.teamName && (
              <p id="error-teamName" className="text-destructive text-sm">
                {state.errors.teamName}
              </p>
            )}
          </div>

          {/* Member Name */}
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.memberName}>
            <Label htmlFor="memberName" className="group-data-[invalid=true]/field:text-destructive">
              Member Names <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="memberName"
              name="memberName"
              placeholder="Albert Einstein, Marie Curie, Isaac Newton"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.memberName}
              aria-errormessage="error-memberName"
              defaultValue={state.defaultValues.memberName}
            />
            {state.errors?.memberName && (
              <p id="error-memberName" className="text-destructive text-sm">
                {state.errors.memberName}
              </p>
            )}
          </div>

          {/* Institution/Company */}
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.institution}>
            <Label htmlFor="institution" className="group-data-[invalid=true]/field:text-destructive">
              Institution/Company <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="institution"
              name="institution"
              placeholder="Acme University"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.institution}
              aria-errormessage="error-institution"
              defaultValue={state.defaultValues.institution}
            />
            {state.errors?.institution && (
              <p id="error-institution" className="text-destructive text-sm">
                {state.errors.institution}
              </p>
            )}
          </div>

          {/* Team Description */}
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.teamDescription}>
            <Label htmlFor="teamDescription" className="group-data-[invalid=true]/field:text-destructive">
              Team Description (Optional)
            </Label>
            <Textarea
              id="teamDescription"
              name="teamDescription"
              placeholder="A brief description of your team's expertise or experience..."
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.teamDescription}
              aria-errormessage="error-teamDescription"
              defaultValue={state.defaultValues.teamDescription}
            />
            {state.errors?.teamDescription && (
              <p id="error-teamDescription" className="text-destructive text-sm">
                {state.errors.teamDescription}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.email}>
            <Label htmlFor="email" className="group-data-[invalid=true]/field:text-destructive">
              Email <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.email}
              aria-errormessage="error-email"
              defaultValue={state.defaultValues.email}
            />
            {state.errors?.email && (
              <p id="error-email" className="text-destructive text-sm">
                {state.errors.email}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex flex-col gap-2">
            <Label>Terms and Conditions</Label>
            <div className="border p-4 rounded-md max-h-40 overflow-y-auto">
              <pre className="text-sm whitespace-pre-wrap">{termsAndConditions}</pre>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="size-4"
              />
              <Label htmlFor="agree">I agree with the terms and conditions</Label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" size="sm" disabled={pending || !isAgreed}>
            {pending ? "Submitting..." : "Submit Registration"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}