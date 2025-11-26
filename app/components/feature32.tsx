interface Testimonial {
  name: string;
  text: string;
  role: string;
}

interface Feature32Props {
  title: string;
  items: Testimonial[];
}

const Feature32 = ({ title, items }: Feature32Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-14 text-center text-4xl font-medium lg:text-7xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.length > 0 && (
            <div className="bg-accent rounded-lg p-16 md:col-span-2 lg:col-span-2 lg:row-span-2">
              <div className="flex h-full flex-col justify-between gap-14">
                <q className="pt-8 text-2xl font-medium lg:pt-14 lg:text-4xl">
                  {items[0].text}
                </q>
                <div className="text-sm">
                  <p className="font-semibold">{items[0].name}</p>
                  <p>{items[0].role}</p>
                </div>
              </div>
            </div>
          )}
          {items.slice(1, 3).map((testimonial, index) => (
            <div key={index} className="bg-accent rounded-lg p-10">
              <div className="flex flex-col gap-14">
                <q className="text-lg font-medium">
                  {testimonial.text}
                </q>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature32 };
