'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={locale === 'de' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => switchLocale('de')}
        className="px-2 py-1 h-auto text-xs"
      >
        DE
      </Button>
      <Button
        variant={locale === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => switchLocale('en')}
        className="px-2 py-1 h-auto text-xs"
      >
        EN
      </Button>
    </div>
  );
}
