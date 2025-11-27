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
    <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-10 lg:py-18 overflow-hidden">
      {/* Background image (fixed + blurred) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          aria-hidden
          className="absolute inset-0 bg-center bg-cover bg-fixed filter blur scale-105 opacity-50"
          style={{ backgroundImage: `url(${data.illustration})` }}
        />
        {/* subtle overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>

      {/* Content (above background) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
              {data.headline}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {data.subtext}
            </p>
            <Button size="lg" variant="outline" className=" text-lg px-8 py-4">
              {data.cta.text}
            </Button>
          </div>

          {/* Optional: keep a smaller decorative image or remove entirely.
              Here we keep an empty space to preserve layout; content stays above the blurred fixed bg. */}
          <div className="relative" aria-hidden>
            <div className="aspect-square bg-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
