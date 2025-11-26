import { Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Testimonial18Props {
    quote: string;
    description: string;
    name: string;
    role: string;
}

const Testimonial18 = ({ quote, description, name, role }: Testimonial18Props) => {
    return (
        <section>
            <div className="container">
                <div className="bg-muted mx-auto max-w-5xl rounded-2xl p-6 md:p-20">
                    <div className="mb-6 flex gap-1">
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                    </div>
                    <q className="text-xl md:text-2xl font-semibold">
                        { quote }
                    </q>
                    <p className="text-muted-foreground mt-6">
                        { description }
                    </p>
                    <div className="mt-6 flex gap-4">
                        <Avatar className="ring-input size-14 rounded-full ring-1">
                            <AvatarImage
                                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                                alt="placeholder"
                            />
                        </Avatar>
                        <div>
                            <p className="font-medium">{ name }</p>
                            <p className="text-muted-foreground text-sm">{ role }</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Testimonial18 };
