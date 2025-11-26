import { Button } from "@/components/ui/button";

interface Hero164Props {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryHref?: string;
}

const Hero164 = ({ title, subtitle, ctaPrimary, ctaPrimaryHref = "/de/contact" }: Hero164Props) => {
  return (
    <section className="py-12 md:py-28">
      <div className="container">
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <div className="flex h-full flex-col justify-center gap-12">
              <div className="flex max-w-[41.25rem] flex-col gap-9">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                  {title}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {subtitle}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-fit"
                >
                  <a href={ctaPrimaryHref}>{ctaPrimary}</a>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt=""
              className="aspect-[4/3] max-h-[400px] w-full rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero164 };
