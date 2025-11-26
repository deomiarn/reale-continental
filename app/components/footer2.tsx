'use client';

import { useTranslations } from 'next-intl';

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo,
  tagline,
  menuItems,
  copyright,
  bottomLinks,
}: Footer2Props) => {
  const t = useTranslations('components.footer2');

  const defaultLogo = logo || {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "Reale Continental GmbH",
    title: t('logo'),
    url: "/de",
  };

  const defaultTagline = tagline ?? t('tagline');

  const defaultMenuItems = menuItems || [
    {
      title: t('menu.services'),
      links: [
        { text: t('menu.services_bodywork'), url: "/de/services" },
        { text: t('menu.services_windshield'), url: "/de/services" },
        { text: t('menu.services_insurance'), url: "/de/services" },
      ],
    },
    {
      title: t('menu.contact'),
      links: [
        { text: "076 420 97 60", url: "tel:0764209760" },
        { text: "luigireale@hotmail.com", url: "mailto:luigireale@hotmail.com" },
      ],
    },
  ];

  const defaultCopyright = copyright ?? t('copyright');

  const defaultBottomLinks = bottomLinks || [
    { text: t('menu.impressum'), url: "/de/impressum" },
    { text: t('menu.datenschutz'), url: "/de/datenschutz" },
  ];
  return (
    <section className="bg-foreground text-background py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={defaultLogo.url} className="text-xl font-semibold tracking-tighter">
                  {defaultLogo.title}
                </a>
              </div>
              <p className="mt-4 font-bold">{defaultTagline}</p>
            </div>
            {defaultMenuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-background/70 space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-accent font-medium transition-colors"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-background/60 mt-24 flex flex-col justify-between gap-4 border-t border-background/20 pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{defaultCopyright}</p>
            <ul className="flex gap-4">
              {defaultBottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-accent underline transition-colors">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
