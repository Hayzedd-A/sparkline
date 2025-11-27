import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface NavItem {
  text: string;
  link?: string;
  children?: {
    text: string;
    link: string;
  }[];
}

interface HeaderProps {
  data: {
    logo: {
      image: string;
      link: string;
    };
    nav: NavItem[];
    cta: {
      text: string;
      link: string;
    };
  };
}

export default function Header({ data }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={data.logo.link} className="flex-shrink-0" aria-label="Home">
            <div className="relative w-32 h-10 lg:w-40 lg:h-12">
              <Image
                src={data.logo.image}
                alt="Company Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            {data.nav.map((item, index) => (
              <div key={index} className="relative group">
                {item.children ? (
                  <>
                    <button 
                      className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>{item.text}</span>
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <div 
                      className="absolute left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      role="menu"
                    >
                      <div className="py-2">
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.link}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors capitalize"
                            role="menuitem"
                          >
                            {child.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.link || "#"}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href={data.cta.link}>{data.cta.text}</Link>
            </Button>
          </div>

          {/* Mobile Menu - Client Component */}
          <MobileMenu data={data} />
        </div>
      </div>
    </header>
  );
}