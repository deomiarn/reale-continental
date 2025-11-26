import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GuaranteeItem {
  title: string;
  description: string;
}

interface Feature33Props {
  title: string;
  description: string;
  features: GuaranteeItem[];
}

const Feature33 = ({ title, description, features }: Feature33Props) => {

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-8 text-3xl md:text-4xl font-semibold tracking-tight lg:mb-12">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {description}
          </p>
        </div>
        <div className="bg-background mx-auto max-w-7xl rounded-lg pr-10 pt-10 lg:pr-32 lg:pt-28">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
            alt="placeholder"
            className="h-full max-h-[600px] w-full rounded-bl-lg rounded-tr-lg object-cover"
          />
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-11 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 py-3 bg-muted shadow-none">
              <CardHeader className="px-0">
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature33 };
