interface PageHeroProps {
  data: {
    title: string;
    subtitle: string;
    breadcrumb: Array<{
      text: string;
      link: string;
    }>;
  };
}

export default function PageHero({ data }: PageHeroProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          {/* <nav className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-6">
            {data.breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                <a
                  href={item.link}
                  className="hover:text-primary transition-colors"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </nav> */}

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            {data.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
