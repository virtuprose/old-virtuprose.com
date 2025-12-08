"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = {
  href: string;
  label: string;
  cta?: boolean;
  ctaText?: string;
};

const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  // { href: "/services", label: "Services" }, // Hidden for now
  { href: "/pricing", label: "Pricing" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/contact", label: "Contact Us" },
  { href: "/orvia", label: "Orvia", cta: true, ctaText: "Explore Orvia →" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.offsetWidth < 1024);
      }
    };
    checkWidth();
    const resizeObserver = new ResizeObserver(checkWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  const mobileMenu = (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="group h-10 w-10 hover:bg-[var(--accent)]/15"
          variant="ghost"
          size="icon"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64 border-l border-[var(--border)] bg-[var(--bg-secondary)]">
        <SheetHeader>
          <SheetTitle>Navigate</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-2">
          {NAV_LINKS.filter((link) => !link.cta).map((link) => (
            <Fragment key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[var(--bg)]/60",
                  pathname === link.href ? "text-[var(--accent)]" : "text-[var(--text-secondary)]",
                )}
              >
                {link.label}
              </Link>
              {link.href === "/" && (
                <Link
                  href="/orvia"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-9 px-4 rounded-full text-sm font-semibold text-[var(--accent)] border border-[var(--accent)]/40 bg-[var(--accent)]/15 shadow-[0_4px_18px_rgba(99,102,241,0.25)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_6px_24px_rgba(99,102,241,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                >
                  Explore Orvia →
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  const desktopMenu = (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="items-center gap-4">
        {NAV_LINKS.filter((link) => !link.cta).map((link) => (
          <Fragment key={link.href}>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    pathname === link.href ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--accent)]",
                  )}
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {link.href === "/" && (
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/orvia"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-9 px-4 rounded-full text-sm font-semibold text-[var(--accent)] border border-[var(--accent)]/40 bg-[var(--accent)]/15 shadow-[0_4px_18px_rgba(99,102,241,0.25)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_6px_24px_rgba(99,102,241,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                  >
                    Explore Orvia →
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </Fragment>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <header
      ref={(node) => {
        containerRef.current = node;
      }}
      className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--bg)]/95 px-4 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-[2.6rem] w-36">
            <Image
              src="/newbranding/logo-light.svg"
              alt="VirtuProse logo"
              fill
              className="object-contain dark:hidden"
              sizes="128px"
              priority
            />
            <Image
              src="/newbranding/logo-dark.svg"
              alt="VirtuProse logo"
              fill
              className="hidden object-contain dark:block"
              sizes="128px"
              priority
            />
          </div>
        </Link>

        {!isMobile && desktopMenu}

        <div className="flex items-center gap-1.5">
          {isMobile && mobileMenu}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
