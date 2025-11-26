import { Hero175 } from '@/components/hero175';
import { getTranslations } from 'next-intl/server';

export default async function DatenschutzPage() {
    const t = await getTranslations('datenschutz');

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
                    <h2>{t('sections.intro.title')}</h2>
                    <p>{t('sections.intro.text')}</p>

                    <h2>{t('sections.collection.title')}</h2>
                    <h3>{t('sections.collection.contact.title')}</h3>
                    <p>{t('sections.collection.contact.text')}</p>

                    <h3>{t('sections.collection.logs.title')}</h3>
                    <p>{t('sections.collection.logs.intro')}</p>
                    <ul>
                        {(t.raw('sections.collection.logs.items') as string[]).map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2>{t('sections.rights.title')}</h2>
                    <p>{t('sections.rights.text')}</p>

                    <h2>{t('sections.contact.title')}</h2>
                    <p>{t('sections.contact.text')}</p>
                </div>
            </div>
        </div>
    );
}
