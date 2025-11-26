"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

interface Services4Props {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

const Services4 = ({ title, subtitle, items }: Services4Props) => {
  const icons = [
    <Cog key="icon1" className="h-6 w-6" />,
    <PenTool key="icon2" className="h-6 w-6" />,
    <Code key="icon3" className="h-6 w-6" />,
    <Shrub key="icon4" className="h-6 w-6" />,
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-background border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full p-3">
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services4 };
