import { CornerDownRight } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

interface ProcessStep {
  title: string;
  description: string;
}

interface Process1Props {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  steps: ProcessStep[];
}

const Process1 = ({ title, subtitle, ctaText, ctaHref = "/de/contact", steps }: Process1Props) => {

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              {subtitle}
            </p>

            <Button
              asChild
              variant="ghost"
              className="flex items-center justify-start gap-2"
            >
              <a href={ctaHref}>
                <CornerDownRight className="text-primary" />
                {ctaText}
              </a>
            </Button>
          </div>
          <ul className="lg:pl-22 relative col-span-4 w-full">
            {steps.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute right-0 top-4" />

                <div className="bg-muted flex size-12 items-center justify-center px-4 py-1 tracking-tighter">
                  0{index + 1}
                </div>
                <div className="">
                  <h3 className="mb-4 text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Process1 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
    </svg>
  );
};
