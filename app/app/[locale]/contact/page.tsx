import { getTranslations } from 'next-intl/server';
import { Hero164 } from '@/components/hero164';
import { Contact9 } from '@/components/contact9';
import { Stats19 } from '@/components/stats19';
import { Cta5 } from '@/components/cta5';
import ctaContact from '@/public/contact/cta-contact.png';

export default async function ContactPage() {
    const t = await getTranslations('contact');
    const tCommon = await getTranslations('common.cta');

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="w-full bg-background">
                <Hero164
                    title={t('hero.title')}
                    subtitle={t('hero.subtitle')}
                    ctaPrimary={tCommon('contactUs')}
                    image={ctaContact}
                    imageAlt="Kundengespräch in der Werkstatt"
                />
            </section>

            {/* Contact Form */}
            <section className="w-full bg-muted">
                <Contact9
                    title={t('form.title')}
                    subtitle={t('form.subtitle')}
                    methods={[
                        {
                            title: t('methods.email.title'),
                            description: t('methods.email.description'),
                            contact: t('methods.email.contact')
                        },
                        {
                            title: t('methods.phone.title'),
                            description: t('methods.phone.description'),
                            contact: t('methods.phone.contact')
                        },
                        {
                            title: t('methods.office.title'),
                            description: t('methods.office.description'),
                            contact: t('methods.office.contact')
                        }
                    ]}
                    fields={{
                        name: {
                            label: t('form.fields.name.label'),
                            placeholder: t('form.fields.name.placeholder')
                        },
                        email: {
                            label: t('form.fields.email.label'),
                            placeholder: t('form.fields.email.placeholder')
                        },
                        message: {
                            label: t('form.fields.message.label'),
                            placeholder: t('form.fields.message.placeholder')
                        }
                    }}
                    terms={t('form.terms')}
                    termsLink={t('form.termsLink')}
                    submit={t('form.submit')}
                />
            </section>

            {/* Stats */}
            <section className="w-full bg-muted">
                <Stats19
                    badge="Stats"
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
                />
            </section>
        </div>
    );
}
