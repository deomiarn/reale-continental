import Image, { StaticImageData } from "next/image";
import processStep01 from "@/public/services/process-step-01-damage-report.png";
import processStep02 from "@/public/services/process-step-02-assessment.png";
import processStep03 from "@/public/services/process-step-03-repair.png";
import processStep04 from "@/public/services/process-step-04-quality-handover.png";

const processImages: StaticImageData[] = [processStep01, processStep02, processStep03, processStep04];

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface Feature102Props {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

const Feature102 = ({ title, subtitle, steps }: Feature102Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
          <p className="text-muted-foreground text-lg">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
              <div className="flex gap-4 min-[960px]:max-w-md">
                <div className="relative flex flex-col items-center justify-between gap-1">
                  {/* Top line */}
                  {index === 0 && <span className="h-20 shrink-0"></span>}
                  {index > 0 && index < steps.length - 1 && <span className="bg-primary h-20 w-[3px] shrink-0 opacity-70"></span>}
                  {index === steps.length - 1 && index > 0 && <span className="bg-gradient-to-t from-transparent to-primary h-20 w-[3px] shrink-0 opacity-70"></span>}

                  {/* Number circle */}
                  <span className="bg-muted/50 flex size-10 shrink-0 items-center justify-center rounded-full border font-mono text-lg">
                    {step.number}
                  </span>

                  {/* Bottom line */}
                  {index === 0 && index < steps.length - 1 && <span className="bg-gradient-to-b from-transparent to-primary h-20 w-[3px] shrink-0 opacity-70"></span>}
                  {index > 0 && index < steps.length - 1 && <span className="bg-primary h-20 w-[3px] shrink-0 opacity-70"></span>}
                  {index === steps.length - 1 && <span className="h-20 shrink-0"></span>}
                </div>
                <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              <Image
                src={processImages[index]}
                alt={step.title}
                width={400}
                height={225}
                className="z-10 aspect-video w-full rounded-xl border object-cover min-[960px]:max-h-56 min-[960px]:w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature102 };
