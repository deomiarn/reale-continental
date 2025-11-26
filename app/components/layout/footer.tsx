import { Footer2 } from '@/components/footer2';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('common');

  return (
    <Footer2
      logo={{
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
        alt: t('company.name'),
        title: t('company.name'),
        url: "/",
      }}
      tagline={t('footer.tagline')}
      menuItems={[
        {
          title: t('footer.sections.services.title'),
          links: [
            { text: t('footer.sections.services.bodywork'), url: '/services' },
            { text: t('footer.sections.services.windshield'), url: '/services' },
            { text: t('footer.sections.services.insurance'), url: '/services' },
          ],
        },
        {
          title: t('footer.sections.company.title'),
          links: [
            { text: t('footer.sections.company.about'), url: '/about' },
            { text: t('footer.sections.company.contact'), url: '/contact' },
          ],
        },
        {
          title: t('footer.sections.contact.title'),
          links: [
            { text: t('footer.sections.contact.phone'), url: 'tel:0764209760' },
            { text: t('footer.sections.contact.email'), url: 'mailto:luigireale@hotmail.com' },
          ],
        },
      ]}
      copyright={t('footer.copyright')}
      bottomLinks={[
        { text: t('footer.legal.termsAndConditions'), url: '/impressum' },
        { text: t('footer.legal.privacyPolicy'), url: '/datenschutz' },
      ]}
    />
  );
}
