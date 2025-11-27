import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Cta14Props {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
}

const Cta14 = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryHref = "/de/contact",
  ctaSecondaryHref = "/de/services",
}: Cta14Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative flex min-h-[500px] md:h-[620px] items-center justify-center overflow-hidden rounded-2xl">
          <Image
            src="/homepage/hero-home.png"
            alt="Reale Continental Autowerkstatt"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col gap-6 p-6 md:p-4 md:gap-8 text-center max-w-[90%] md:max-w-none">
            <h1 className="text-primary-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {title}
            </h1>
            <p className="text-primary-foreground text-base md:text-lg">
              {subtitle}
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button asChild size="lg" variant="default">
                <a href={ctaPrimaryHref}>{ctaPrimary}</a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={ctaSecondaryHref}>{ctaSecondary}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta14 };
