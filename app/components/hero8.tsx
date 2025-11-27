import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroServices from "@/public/services/hero-services.png";

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
    <section className="pt-16 pb-32">
      <div className="border-muted overflow-hidden border-b">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                {title}
              </h1>
              <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
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
          <Image
            src={heroServices}
            alt="Werkstatt Übersicht - Reale Continental"
            width={1400}
            height={700}
            className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero8 };
