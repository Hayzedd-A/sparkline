import Image from "next/image";
import { Button } from "./ui/button";

interface HeroProps {
  data: {
    headline: string;
    subtext: string;
    cta: {
      text: string;
      link: string;
    };
    illustration: string;
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
              {data.headline}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {data.subtext}
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              {data.cta.text}
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
              <Image
                src={data.illustration}
                alt="Technology illustration"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
