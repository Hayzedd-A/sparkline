"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavItem {
  text: string;
  link?: string;
  children?: {
    text: string;
    link: string;
  }[];
}

interface MobileMenuProps {
  data: {
    nav: NavItem[];
    cta: {
      text: string;
      link: string;
    };
  };
}

export default function MobileMenu({ data }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-foreground"
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4" aria-label="Mobile navigation">
              {data.nav.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors font-medium"
                        aria-expanded={activeDropdown === index}
                      >
                        <span>{item.text}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {activeDropdown === index && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href={child.link}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors capitalize"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.link || "#"}
                      className="block text-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="w-full">
                <Link
                  href={data.cta.link}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {data.cta.text}
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}