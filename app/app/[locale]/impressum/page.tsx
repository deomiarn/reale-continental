import { Hero175 } from '@/components/hero175';
import { getTranslations } from 'next-intl/server';

export default async function ImpressumPage() {
    const t = await getTranslations('impressum');

    return (
        <div className="flex flex-col items-center">
            <div className="w-full">
                <Hero175
                    badge={t('hero.badge')}
                    title={t('hero.title')}
                    subtitle={t('hero.subtitle')}
                    ctaPrimary=""
                    ctaSecondary=""
                />
            </div>
            <div className="container mx-auto max-w-4xl px-4 py-16">
                <div className="prose prose-neutral max-w-none dark:prose-invert">
                    <h2>{t('sections.company.title')}</h2>
                    <p>
                        <strong>{t('sections.company.name')}</strong><br />
                        {t('sections.company.owner')}<br />
                        {t('sections.company.phone')}<br />
                        {t('sections.company.email')}
                    </p>

                    <h2>{t('sections.liability.title')}</h2>
                    <h3>{t('sections.liability.content.title')}</h3>
                    <p>{t('sections.liability.content.text')}</p>

                    <h3>{t('sections.liability.links.title')}</h3>
                    <p>{t('sections.liability.links.text')}</p>

                    <h2>{t('sections.copyright.title')}</h2>
                    <p>{t('sections.copyright.text')}</p>
                </div>
            </div>
        </div>
    );
}
