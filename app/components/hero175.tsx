'use client';

import { ArrowRight, CirclePlay } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

interface Hero175Props {
    title?: string;
    subtitle?: string;
    ctaPrimary?: string;
    ctaSecondary?: string;
    ctaPrimaryHref?: string;
    ctaSecondaryHref?: string;
}

const Hero175 = ({
                     title,
                     subtitle,
                     ctaPrimary,
                     ctaSecondary,
                     ctaPrimaryHref = "#",
                     ctaSecondaryHref = "#",
                 }: Hero175Props) => {
    const t = useTranslations('components.hero175');

    const titleText = title ?? t('title');
    const subtitleText = subtitle ?? t('subtitle');
    const ctaPrimaryText = ctaPrimary ?? t('ctaPrimary');
    const ctaSecondaryText = ctaSecondary ?? t('ctaSecondary');
    return (
        <section
            className="font-public_sans bg-background before:bg-linear-to-b before:from-muted dark relative py-12 before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-[15rem] before:w-full before:to-transparent before:content-[''] md:py-32">
            <div className="container relative z-20">
                <div className="relative z-20 mx-auto flex max-w-[56.25rem] flex-col items-center gap-6">
                    <h1 className="text-foreground w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold break-words">
                        { titleText }
                    </h1>
                    <p className="text-muted-foreground text-center text-lg">
                        { subtitleText }
                    </p>
                    { (ctaPrimaryText || ctaSecondaryText) && (
                        <div className="mt-4 flex items-center gap-2">
                            { ctaPrimaryText && (
                                <Button
                                    asChild
                                    className="flex h-fit items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium"
                                >
                                    <a href={ ctaPrimaryHref }>
                                        <div>{ ctaPrimaryText }</div>
                                        <ArrowRight className="size-5!" />
                                    </a>
                                </Button>
                            ) }
                            { ctaSecondaryText && (
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="flex h-fit items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium text-white"
                                >
                                    <a href={ ctaSecondaryHref }>
                                        <div>{ ctaSecondaryText }</div>
                                        <CirclePlay className="size-5! stroke-white" />
                                    </a>
                                </Button>
                            ) }
                        </div>
                    ) }
                </div>
            </div>
        </section>
    );
};

export { Hero175 };
