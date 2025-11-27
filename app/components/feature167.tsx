'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  CalendarClock,
  ChartNoAxesCombined,
  PocketKnife,
  SquarePen,
} from "lucide-react";
import { useTranslations } from 'next-intl';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import expertiseBodywork from "@/public/about/expertise-bodywork.png";
import expertiseWindshield from "@/public/about/expertise-windshield.png";
import expertiseInsurance from "@/public/about/expertise-insurance.png";

import type { StaticImageData } from "next/image";

interface Feature167Item {
  title: string;
  description: string;
  icon?: any;
  image?: StaticImageData;
}

interface Feature167Props {
  title: string;
  subtitle: string;
  description: string;
  items?: Feature167Item[];
}

const Feature167 = ({ title, subtitle, description, items }: Feature167Props) => {
  const t = useTranslations('components.feature167');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const FEATURES_DATA: Feature167Item[] = items || [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      icon: SquarePen,
      image: expertiseBodywork,
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      icon: CalendarClock,
      image: expertiseWindshield,
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      icon: ChartNoAxesCombined,
      image: expertiseInsurance,
    },
  ];
  return (
    <section className="py-32">
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="container border-x px-0">
        {mounted ? (
          <Tabs
            defaultValue={FEATURES_DATA[0].title}
            className="flex flex-col items-stretch gap-0 divide-y rounded-none lg:flex-row lg:divide-x lg:divide-y-0"
          >
            <TabsList className="flex h-auto w-full flex-col rounded-none border-b bg-transparent p-0 lg:w-1/3 lg:border-b-0 lg:border-r">
              {FEATURES_DATA.map((item, index, array) => (
                <TabsTrigger
                  key={item.title}
                  value={item.title}
                  className={`group relative flex w-full whitespace-normal rounded-none px-4 py-4 text-start data-[state=active]:shadow-none lg:px-6 lg:py-5 ${
                    index !== array.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="bg-linear-to-r absolute bottom-[-1px] left-0 z-10 h-[2px] w-0 from-primary via-primary/50 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2" />
                  <div className="flex w-full flex-col">
                    <div className="flex items-center gap-1.5">
                      <item.icon className="size-4" />
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground mt-2.5">
                      {item.description}
                    </p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="relative flex-1">
              <div className="h-[350px] md:h-[450px] lg:h-[500px]">
                {FEATURES_DATA.map((item, index) => (
                  <TabsContent
                    key={index}
                    value={item.title}
                    className="absolute inset-0 m-0 rounded-none p-6 transition-all duration-500 data-[state=inactive]:pointer-events-none data-[state=inactive]:opacity-0 lg:p-12"
                  >
                    <div className="relative h-full w-full">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-[center_70%]"
                        />
                      )}
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        ) : (
          <div className="flex flex-col items-stretch gap-0 divide-y rounded-none lg:flex-row lg:divide-x lg:divide-y-0">
            <div className="flex h-auto w-full flex-col rounded-none border-b bg-transparent p-0 lg:w-1/3 lg:border-b-0 lg:border-r">
              {FEATURES_DATA.map((item, index, array) => (
                <div
                  key={item.title}
                  className={`group relative flex w-full whitespace-normal rounded-none px-4 py-4 text-start lg:px-6 lg:py-5 ${
                    index !== array.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex w-full flex-col">
                    <div className="flex items-center gap-1.5">
                      <item.icon className="size-4" />
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground mt-2.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative flex-1">
              <div className="h-[350px] md:h-[450px] lg:h-[500px]">
                <div className="absolute inset-0 m-0 rounded-none p-6 lg:p-12">
                  <div className="relative h-full w-full">
                    {FEATURES_DATA[0].image && (
                      <Image
                        src={FEATURES_DATA[0].image}
                        alt={FEATURES_DATA[0].title}
                        fill
                        className="object-cover object-[center_70%]"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Feature167 };
