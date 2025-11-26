'use client';

import {
  CalendarClock,
  ChartNoAxesCombined,
  PocketKnife,
  SquarePen,
} from "lucide-react";
import { useTranslations } from 'next-intl';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Feature167Item {
  title: string;
  description: string;
  icon?: any;
  image?: string;
}

interface Feature167Props {
  title: string;
  subtitle: string;
  description: string;
  items?: Feature167Item[];
}

const Feature167 = ({ title, subtitle, description, items }: Feature167Props) => {
  const t = useTranslations('components.feature167');

  const FEATURES_DATA: Feature167Item[] = items || [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      icon: SquarePen,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      icon: CalendarClock,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      icon: ChartNoAxesCombined,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
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
            <div className="h-[300px] lg:h-[400px]">
              {FEATURES_DATA.map((item, index) => (
                <TabsContent
                  key={index}
                  value={item.title}
                  className="absolute inset-0 m-0 rounded-none p-6 transition-all duration-500 data-[state=inactive]:pointer-events-none data-[state=inactive]:opacity-0 lg:p-12"
                >
                  <div className="flex h-full items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="bg-muted h-full w-full object-contain p-6 lg:p-12 dark:invert"
                    />
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Feature167 };
