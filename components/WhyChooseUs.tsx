import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Zap, Shield, Target } from "lucide-react";

interface WhyChooseUsProps {
  data: {
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

const iconMap = {
  Zap,
  Shield,
  Target,
};

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.cards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
