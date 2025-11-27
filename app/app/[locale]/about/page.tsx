import type { Metadata } from 'next';
import { getTranslations, getLocale } from 'next-intl/server';
import { Hero164 } from '@/components/hero164';
import { Feature60 } from '@/components/feature60';
import { Feature23 } from '@/components/feature23';
import { Timeline10 } from '@/components/timeline10';
import { Feature167 } from '@/components/feature167';
import { Team4 } from '@/components/team4';
import { Stats19 } from '@/components/stats19';
import { Cta5 } from '@/components/cta5';
import { generatePageMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    return generatePageMetadata('about', locale);
}

export default async function AboutPage() {
    const t = await getTranslations('about');
    const tCommon = await getTranslations('common.cta');
    const locale = await getLocale();

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="w-full bg-background">
                <Hero164
                    title={t('hero.title')}
                    subtitle={t('hero.subtitle')}
                    ctaPrimary={tCommon('contactUs')}
                    ctaPrimaryHref={`/${locale}/contact`}
                />
            </section>

            {/* Mission */}
            <section className="w-full bg-muted">
                <Feature60
                    title={t('mission.title')}
                    description={t('mission.description')}
                />
            </section>

            {/* Values */}
            <section className="w-full bg-background">
                <Feature23
                    badge=""
                    title={t('values.title')}
                    subtitle=""
                    items={t.raw('values.items')}
                />
            </section>

            {/* Timeline */}
            <section className="w-full bg-muted">
                <Timeline10
                    title={t('story.title')}
                    phases={t.raw('story.timeline')}
                />
            </section>

            {/* Expertise */}
            <section className="w-full bg-background">
                <Feature167
                    title={t('expertise.title')}
                    subtitle={t('expertise.subtitle')}
                    description={t('expertise.description')}
                />
            </section>

            {/* Team */}
            <section className="w-full bg-muted">
                <Team4
                    title={t('team.title')}
                    subtitle={t('team.subtitle')}
                    members={t.raw('team.members')}
                />
            </section>

            {/* Stats */}
            <section className="w-full bg-background">
                <Stats19
                    badge=""
                    items={t.raw('stats.items')}
                />
            </section>

            {/* CTA */}
            <section className="w-full bg-background">
                <Cta5
                    title={t('cta.title')}
                    subtitle={t('cta.subtitle')}
                    ctaPrimary={t('cta.ctaPrimary')}
                    ctaSecondary={t('cta.ctaSecondary')}
                    ctaPrimaryHref={`/${locale}/contact`}
                    ctaSecondaryHref={`/${locale}/services`}
                />
            </section>
        </div>
    );
}
