import { Button } from "../ui/button";

interface PageCTAProps {
  data: {
    title: string;
    subtitle: string;
    primaryButton: {
      text: string;
      link: string;
    };
    secondaryButton: {
      text: string;
      link: string;
    };
  };
}

export default function PageCTA({ data }: PageCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{data.title}</h2>
        <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {data.subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="font-semibold"
          >
            <a href={data.primaryButton.link}>{data.primaryButton.text}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-semibold bg-transparent hover:bg-white/10 text-white border-white"
          >
            <a href={data.secondaryButton.link}>
              {data.secondaryButton.text}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
