"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface TimelinePhase {
  year: string;
  title: string;
  description: string;
}

interface Timeline10Props {
  title: string;
  phases: TimelinePhase[];
}

const Timeline10 = ({ title, phases }: Timeline10Props) => {
  const currentPhase = phases.length - 1;

  const timelinePhases = phases.map((phase, index) => ({
    id: index,
    date: phase.year,
    title: phase.title,
    description: phase.description,
  }));

  return (
    <section className="bg-background py-32">
      <div className="container flex flex-col items-center">
        <h2 className="mb-10 text-center text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
        <Card className="bg-background relative w-full border-none shadow-none md:py-16">
          <CardContent className="p-0">
            <div className="relative flex flex-col items-center md:mt-12">
              <Separator className="absolute -top-8 left-0 hidden md:block" />
              {currentPhase && (
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${(currentPhase / timelinePhases.length) * 104}%`,
                  }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                  className={cn(
                    "bg-foreground absolute -top-[32px] left-0 hidden h-0.5 md:block",
                  )}
                />
              )}

              <div className="grid gap-6 md:grid-cols-4">
                {timelinePhases.map((phase, index) => (
                  <div key={phase.id} className="relative space-y-2">
                    <Separator
                      orientation="vertical"
                      className="absolute left-0 top-6 block md:hidden"
                    />
                    {index == 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{
                          height: currentPhase * 112,
                        }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        className={cn(
                          "bg-foreground absolute left-0 z-10 w-0.5 md:hidden",
                        )}
                      />
                    )}
                    <div className="bg-foreground absolute -left-[9px] top-0 z-10 mb-5 flex size-5 items-center justify-center rounded-full p-1 md:-top-10 md:left-0">
                      <div className="bg-background size-full rounded-full" />
                    </div>

                    <div className="pl-7 md:pl-0">
                      <p className="text-muted-foreground text-sm">
                        {phase.date}
                      </p>
                      <h3 className="text-lg font-semibold">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Timeline10 };
