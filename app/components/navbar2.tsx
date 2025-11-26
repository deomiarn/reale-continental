"use client";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import React from "react";
import { useTranslations } from 'next-intl';

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar2 = ({
  logo,
  menu,
  auth,
}: Navbar2Props) => {
  const t = useTranslations('components.navbar2');

  const defaultLogo = logo || {
    url: "/de",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Reale Continental",
  };

  const defaultMenu = menu || [
    { title: t('menu.home'), url: "/de" },
    {
      title: t('menu.products'),
      url: "#",
      items: [
        {
          title: t('menu.products_items.blog'),
          description: t('menu.products_items.blog_desc'),
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: t('menu.products_items.company'),
          description: t('menu.products_items.company_desc'),
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: t('menu.products_items.careers'),
          description: t('menu.products_items.careers_desc'),
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: t('menu.products_items.support'),
          description: t('menu.products_items.support_desc'),
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: t('menu.resources'),
      url: "#",
      items: [
        {
          title: t('menu.resources_items.help'),
          description: t('menu.resources_items.help_desc'),
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: t('menu.resources_items.contact'),
          description: t('menu.resources_items.contact_desc'),
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: t('menu.resources_items.status'),
          description: t('menu.resources_items.status_desc'),
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: t('menu.resources_items.terms'),
          description: t('menu.resources_items.terms_desc'),
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: t('menu.pricing'),
      url: "#",
    },
    {
      title: t('menu.blog'),
      url: "#",
    },
  ];

  const defaultAuth = auth || {
    login: { title: t('auth.login'), url: "#" },
    signup: { title: t('auth.signup'), url: "#" },
  };
  return (
    <section className="py-4">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          {/* Logo */}
          <a href={defaultLogo.url} className="flex items-center gap-2">
            {defaultLogo.src && <img src={defaultLogo.src} className="max-h-8" alt={defaultLogo.alt} />}
            <span className="text-lg font-semibold tracking-tighter">
              {defaultLogo.title}
            </span>
          </a>
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <NavigationMenuWithoutViewport>
                <NavigationMenuList className="relative">
                  {defaultMenu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenuWithoutViewport>
            </div>
          </div>
          <div className="flex gap-2">
            {defaultAuth.login.title && (
              <Button asChild variant="outline" size="sm">
                <a href={defaultAuth.login.url}>{defaultAuth.login.title}</a>
              </Button>
            )}
            {defaultAuth.signup.title && (
              <Button asChild size="sm">
                <a href={defaultAuth.signup.url}>{defaultAuth.signup.title}</a>
              </Button>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={defaultLogo.url} className="flex items-center gap-2">
              {defaultLogo.src && <img src={defaultLogo.src} className="max-h-8" alt={defaultLogo.alt} />}
              {!defaultLogo.src && <span className="text-lg font-semibold tracking-tighter">{defaultLogo.title}</span>}
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={defaultLogo.url} className="flex items-center gap-2">
                      {defaultLogo.src && <img src={defaultLogo.src} className="max-h-8" alt={defaultLogo.alt} />}
                      {!defaultLogo.src && <span className="text-lg font-semibold tracking-tighter">{defaultLogo.title}</span>}
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {defaultMenu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    {defaultAuth.login.title && (
                      <Button asChild variant="outline">
                        <a href={defaultAuth.login.url}>{defaultAuth.login.title}</a>
                      </Button>
                    )}
                    {defaultAuth.signup.title && (
                      <Button asChild>
                        <a href={defaultAuth.signup.url}>{defaultAuth.signup.title}</a>
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="origin-top-center data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 bg-popover relative top-11 w-full overflow-hidden rounded-md border shadow md:absolute md:left-1/2 md:w-80 md:-translate-x-1/2">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-full">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}
    >
      <div className="text-muted-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

const NavigationMenuWithoutViewport = ({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) => {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
      {/* The Viewport needs to be removed to center align submenus under their parents. You could remove this from the shadcn/ui component */}
      {/* {viewport && <NavigationMenuViewport />} */}
    </NavigationMenuPrimitive.Root>
  );
};

export { Navbar2 };
