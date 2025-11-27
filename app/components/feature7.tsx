import Image from "next/image";
import { Check } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
}

interface Feature7Props {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

const Feature7 = ({ title, subtitle, items }: Feature7Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Image
              src="/homepage/Luigi-Reale-Lachen.webp"
              alt="Luigi Reale - Inhaber Reale Continental GmbH"
              width={400}
              height={300}
              className="w-full h-auto max-h-96 rounded-md object-contain"
            />
          </div>
          <div className="order-1 flex flex-col lg:order-2 lg:items-start lg:text-left">
            <h2 className="my-6 text-3xl md:text-4xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl text-lg">
              {subtitle}
            </p>
            <ul className="ml-4 space-y-4 text-left">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="size-5" />
                  <p className="text-muted-foreground">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature7 };
