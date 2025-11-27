import { Card, CardContent } from "./ui/card";
import { Trophy } from "lucide-react";

interface AwardsProps {
  data: {
    title: string;
    items: Array<{
      name: string;
      issuer: string;
      year: string;
    }>;
  };
}

export default function Awards({ data }: AwardsProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {data.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((award, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-1">{award.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{award.issuer}</p>
                <p className="text-xs text-muted-foreground">{award.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
