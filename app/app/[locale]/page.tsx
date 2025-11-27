import { getTranslations, getLocale } from 'next-intl/server';
import { Cta14 } from '@/components/cta14';
import { Services4 } from '@/components/services4';
import { Feature7 } from '@/components/feature7';
import { Process1 } from '@/components/process1';
import { About16 } from '@/components/about16';
import { Testimonial18 } from '@/components/testimonial18';
import { Cta5 } from '@/components/cta5';

export default async function HomePage() {
    const t = await getTranslations('home');
    const tCommon = await getTranslations('common.cta');
    const locale = await getLocale();

    return (
        <div className="flex flex-col">
            {/* Hero - Full width, white bg */ }
            <section className="w-full bg-background">
                <Cta14
                    title={ t('hero.title') }
                    subtitle={ t('hero.subtitle') }
                    ctaPrimary={ t('hero.ctaPrimary') }
                    ctaSecondary={ t('hero.ctaSecondary') }
                    ctaPrimaryHref={ `/${locale}/contact` }
                    ctaSecondaryHref={ `/${locale}/services` }
                />
            </section>

            {/* Services - Muted bg */ }
            <section className="w-full bg-muted">
                <Services4
                    title={ t('services.title') }
                    subtitle={ t('services.subtitle') }
                    items={ t.raw('services.items') }
                />
            </section>

            {/* Features - White bg */ }
            <section className="w-full bg-background">
                <Feature7
                    title={ t('features.title') }
                    subtitle={ t('features.subtitle') }
                    items={ t.raw('features.items') }
                />
            </section>

            {/* Process - Muted bg */ }
            <section className="w-full bg-muted">
                <Process1
                    title={ t('process.title') }
                    subtitle={ t('process.subtitle') }
                    ctaText={ tCommon('contactUs') }
                    ctaHref={ `/${locale}/contact` }
                    steps={ t.raw('process.steps') }
                />
            </section>

            {/* About/Stats - White bg */ }
            <section className="w-full bg-background">
                <About16
                    badge={ t('about.badge') }
                    title={ t('about.title') }
                    subtitle={ t('about.description') }
                    stats={ t.raw('about.stats') }
                />
            </section>

            {/* Testimonials - Muted bg */ }
            <section className="w-full bg-muted">
                <Testimonial18
                    quote={ t('testimonials.items.0.text') }
                    description=""
                    name={ t('testimonials.items.0.name') }
                    role={ t('testimonials.items.0.role') }
                />
            </section>

            <section className="w-full bg-background">
                <Cta5
                    title={ t('finalCta.title') }
                    subtitle={ t('finalCta.subtitle') }
                    ctaPrimary={ t('finalCta.ctaPrimary') }
                    ctaSecondary={ t('finalCta.ctaSecondary') }
                    ctaPrimaryHref={ `/${locale}/contact` }
                    ctaSecondaryHref={ `/${locale}/services` }
                />
            </section>
        </div>
    );
}
