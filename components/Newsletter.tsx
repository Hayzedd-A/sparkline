import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface NewsletterProps {
  data: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
  };
}

export default function Newsletter({ data }: NewsletterProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{data.title}</CardTitle>
            <p className="text-muted-foreground">{data.subtitle}</p>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder={data.placeholder}
                className="flex-1"
              />
              <Button>{data.button}</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
