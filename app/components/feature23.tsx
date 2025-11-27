import Image, { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import valuesQuality from "@/public/about/values-quality.png";
import valuesReliability from "@/public/about/values-reliability.png";
import valuesTransparency from "@/public/about/values-transparency.png";

const valuesImages: StaticImageData[] = [valuesQuality, valuesReliability, valuesTransparency];

interface ValueItem {
  title: string;
  description: string;
}

interface Feature23Props {
  badge: string;
  title: string;
  subtitle: string;
  items: ValueItem[];
}

const Feature23 = ({ badge, title, subtitle, items }: Feature23Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {subtitle}
          </p>
        </div>
        <div className="mt-20 grid gap-10 lg:grid-cols-3 xl:gap-20">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col lg:block">
              <div className="bg-muted rounded-lg border p-3">
                <Image
                  src={valuesImages[index]}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-1 font-semibold">{item.title}</div>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature23 };
