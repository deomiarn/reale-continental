import React from "react";

interface StatItem {
  value: string;
  label: string;
}

interface Stats19Props {
  badge: string;
  items: StatItem[];
}

const Stats19 = ({ badge, items }: Stats19Props) => {

  return (
    <section className="pb-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-6">
          <ul className="col-span-6 w-full">
            {items.map((stat, index) => (
              <li key={index} className="grid grid-cols-5 border-b py-8">
                <h3 className="col-span-2 text-3xl font-semibold">
                  {stat.value}
                </h3>
                <p className="col-span-3 text-muted-foreground">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Stats19 };
