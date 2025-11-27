import Image from "next/image";
import { ChevronRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Cta5Props {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Cta5 = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryHref = "/de/contact",
  ctaSecondaryHref = "/de/services",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  imageAlt = "CTA image",
}: Cta5Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="bg-background border-border flex w-full flex-col overflow-hidden rounded-lg border transition-shadow md:rounded-xl lg:flex-row lg:items-center">
          <div className="w-full shrink-0 self-stretch lg:w-1/2 relative aspect-[3/2]">
            <Image
              src="/homepage/cta-home.png"
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full shrink-0 px-4 py-6 md:p-8 lg:w-1/2 lg:px-16">
            <h3 className="mb-3 text-2xl md:text-3xl font-semibold tracking-tight md:mb-4 lg:mb-6">
              {title}
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={ctaPrimaryHref}>{ctaPrimary} <ChevronRight className="ml-1 size-4" /></a>
              </Button>
              {ctaSecondary && (
                <Button asChild variant="outline" size="lg">
                  <a href={ctaSecondaryHref}>{ctaSecondary} <Info className="ml-1 size-4" /></a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta5 };
