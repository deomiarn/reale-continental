import { Building, ChevronRight, Mail, Phone } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactMethod {
  title: string;
  description: string;
  contact: string;
}

interface FormFields {
  name: {
    label: string;
    placeholder: string;
  };
  email: {
    label: string;
    placeholder: string;
  };
  message: {
    label: string;
    placeholder: string;
  };
}

interface Contact9Props {
  badge?: string;
  title: string;
  subtitle: string;
  methods: ContactMethod[];
  fields: FormFields;
  terms: string;
  termsLink: string;
  submit: string;
}

const Contact9 = ({ badge, title, subtitle, methods, fields, terms, termsLink, submit }: Contact9Props) => {
  const icons = [Mail, Phone, Building];
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          {badge && (
            <Badge
              variant="outline"
              className="bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm"
            >
              <Mail className="size-4" />
              <span>{badge}</span>
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            {subtitle}
          </p>
        </div>

        <div className="flex justify-between gap-10 py-12 max-md:flex-col">
          <form className="flex flex-1 flex-col gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-normal" htmlFor="name">
                {fields.name.label}
              </Label>
              <Input
                id="name"
                type="text"
                placeholder={fields.name.placeholder}
                required
                className="border-border bg-card"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-normal" htmlFor="email">
                {fields.email.label}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={fields.email.placeholder}
                required
                className="border-border bg-card"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-normal" htmlFor="message">
                {fields.message.label}
              </Label>
              <Textarea
                id="message"
                placeholder={fields.message.placeholder}
                required
                className="border-border bg-card"
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="terms"
                  className="text-sm font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {terms}{" "}
                  <a href="/terms" className="underline">
                    {termsLink}
                  </a>
                </Label>
              </div>
            </div>

            <Button type="submit">{submit}</Button>
          </form>

          <div className="grid flex-1 gap-6 self-start lg:grid-cols-2">
            {methods.map((method, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon className="size-5" />
                    <h3 className="text-xl font-semibold">
                      {method.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      {method.description}
                    </p>
                    <div className="text-muted-foreground text-sm">
                      {method.contact}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact9 };
