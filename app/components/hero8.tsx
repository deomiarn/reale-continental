import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero8Props {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryHref?: string;
}

const Hero8 = ({
  title,
  subtitle,
  ctaPrimary,
  ctaPrimaryHref = "/de/contact",
}: Hero8Props) => {
  return (
    <section className="py-32">
      <div className="border-muted overflow-hidden border-b">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-6xl font-bold">
                {title}
              </h1>
              <p className="text-muted-foreground mx-auto max-w-3xl lg:text-xl">
                {subtitle}
              </p>
              <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button asChild>
                  <a href={ctaPrimaryHref}>
                    {ctaPrimary}
                    <ChevronRight className="ml-2 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero8 };
