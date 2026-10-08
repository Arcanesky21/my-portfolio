"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="flex gap-8">
      {links.map((link) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={link.path}
            aria-current={isActive ? "page" : undefined}
            className={`capitalize font-medium py-1 border-b-2 transition-colors ${
              isActive
                ? "text-primary border-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
