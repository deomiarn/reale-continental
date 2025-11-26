import { getTranslations } from 'next-intl/server';
import { Hero8 } from '@/components/hero8';
import { Services6 } from '@/components/services6';
import { Feature60 } from '@/components/feature60';
import { Feature102 } from '@/components/feature102';
import { Feature33 } from '@/components/feature33';
import { Feature32 } from '@/components/feature32';
import { Cta5 } from '@/components/cta5';

export default async function ServicesPage() {
    const t = await getTranslations('services');
    const tCommon = await getTranslations('common.cta');

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="w-full bg-background">
                <Hero8
                    title={t('hero.title')}
                    subtitle={t('hero.subtitle')}
                    ctaPrimary={t('hero.ctaPrimary')}
                />
            </section>

            {/* Services Overview */}
            <section className="w-full bg-muted">
                <Services6
                    title={t('overview.title')}
                    subtitle={t('overview.subtitle')}
                    items={t.raw('overview.items')}
                />
            </section>

            {/* Bodywork */}
            <section className="w-full bg-background">
                <Feature60
                    title={t('bodywork.title')}
                    description={t('bodywork.description')}
                />
            </section>

            {/* Windshield */}
            <section className="w-full bg-muted">
                <Feature60
                    title={t('windshield.title')}
                    description={t('windshield.description')}
                />
            </section>

            {/* Process */}
            <section className="w-full bg-background">
                <Feature102
                    title={t('process.title')}
                    subtitle={t('process.subtitle')}
                    steps={t.raw('process.steps')}
                />
            </section>

            {/* Guarantees */}
            <section className="w-full bg-muted">
                <Feature33
                    title={t('guarantees.title')}
                    description=""
                    features={t.raw('guarantees.items')}
                />
            </section>

            {/* Testimonials */}
            <section className="w-full bg-background">
                <Feature32
                    title={t('testimonials.title')}
                    items={t.raw('testimonials.items')}
                />
            </section>

            {/* CTA */}
            <section className="w-full bg-background">
                <Cta5
                    title={t('cta.title')}
                    subtitle={t('cta.subtitle')}
                    ctaPrimary={t('cta.ctaPrimary')}
                    ctaSecondary={t('cta.ctaSecondary')}
                />
            </section>
        </div>
    );
}
