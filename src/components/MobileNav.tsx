"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

const links = [
  { name: "home", href: "/" },
  { name: "services", href: "/services" },
  { name: "resume", href: "/resume" },
  { name: "work", href: "/work" },
  { name: "contact", href: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className="flex size-11 items-center justify-center rounded-lg text-primary"
      >
        <Menu className="size-7" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <div className="mt-24 mb-16 text-center">
          <Link href="/" className="inline-block">
            <span className="text-4xl font-bold tracking-tight">
              Mikarlo<span className="text-primary">.</span>
            </span>
          </Link>
        </div>
        <nav aria-label="Mobile" className="flex flex-col items-center gap-2">
          {links.map((link) => {
            const isActive = link.href === pathname;
            return (
              <Link
                href={link.href}
                key={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-11 w-full max-w-xs items-center justify-center rounded-lg text-xl capitalize transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground font-bold"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
