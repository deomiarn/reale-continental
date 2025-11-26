interface Feature60Props {
  title: string;
  description: string;
}

const Feature60 = ({ title, description }: Feature60Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <div className="mb-6 md:mb-8 lg:mb-0">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder hero"
                className="aspect-4/3 border-border w-full rounded-md border object-cover"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
            <div>
              <h2 className="mb-3 text-3xl md:text-4xl font-semibold tracking-tight md:mb-4 lg:mb-6">
                {title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature60 };
