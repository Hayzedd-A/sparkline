import { Button } from "./ui/button";

interface CTAProps {
  data: {
    title: string;
    subtitle: string;
    button: {
      text: string;
      link: string;
    };
  };
}

export default function CTA({ data }: CTAProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{data.title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {data.subtitle}
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
          {data.button.text}
        </Button>
      </div>
    </section>
  );
}
