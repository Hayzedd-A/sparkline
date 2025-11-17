import Image from "next/image";

interface AboutProps {
  data: {
    title: string;
    description: string;
    image: string;
  };
}

export default function About({ data }: AboutProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {data.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.description}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={data.image}
                alt="Team photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
