import React from "react";

interface StatItem {
  value: string;
  label: string;
}

interface About16Props {
  badge: string;
  title: string;
  subtitle: string;
  stats: StatItem[];
}

const About16 = ({ badge, title, subtitle, stats }: About16Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-6">
          <div className="col-span-6 space-y-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {title}
            </h2>

            <p className="text-muted-foreground text-lg max-w-3xl">
              {subtitle}
            </p>

            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img11.png"
              alt=""
              className="h-110 pointer-events-none w-full object-cover"
            />
            <ul className="mt-14">
              {stats.map((stat, index) => (
                <li key={index} className="grid grid-cols-5 border-b py-8">
                  <h3 className="col-span-2 text-3xl font-semibold">
                    {stat.value}
                  </h3>
                  <p className="col-span-3">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About16 };
