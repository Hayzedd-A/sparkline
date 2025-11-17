import { Linkedin, Twitter, Facebook } from "lucide-react";

interface FooterProps {
  data: {
    description: string;
    links: {
      services: Array<{ text: string; link: string }>;
      company: Array<{ text: string; link: string }>;
      resources: Array<{ text: string; link: string }>;
    };
    social: Array<{ name: string; link: string; icon: string }>;
    copyright: string;
  };
}

const iconMap = {
  Linkedin,
  Twitter,
  Facebook,
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sparkline</h3>
            <p className="text-primary-foreground/80 mb-4">{data.description}</p>
            <div className="flex space-x-4">
              {data.social.map((social, index) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={index}
                    href={social.link}
                    className="hover:text-accent transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {data.links.services.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {data.links.company.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {data.links.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
