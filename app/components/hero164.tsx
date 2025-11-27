import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import heroAbout from "@/public/about/hero-about.png";

interface Hero164Props {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryHref?: string;
  image?: StaticImageData;
  imageAlt?: string;
}

const Hero164 = ({ title, subtitle, ctaPrimary, ctaPrimaryHref = "/de/contact", image = heroAbout, imageAlt = "Werkstatt Interior - Reale Continental" }: Hero164Props) => {
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
            <Image
              src={image}
              alt={imageAlt}
              width={800}
              height={600}
              className="aspect-[4/3] max-h-[400px] w-full rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero164 };
