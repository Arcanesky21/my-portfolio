import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-10 text-foreground">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="rounded-md">
          <span className="text-3xl font-bold tracking-tight">
            Mikarlo<span className="text-primary">.</span>
          </span>
        </Link>
        {/* Desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button asChild>
            <Link href="/contact">Hire me</Link>
          </Button>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
