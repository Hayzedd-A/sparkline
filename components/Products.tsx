import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface ProductsProps {
  data: {
    title: string;
    categories: Array<{
      name: string;
      description: string;
      products: Array<{
        name: string;
        description: string;
        button: string;
      }>;
    }>;
  };
}

export default function Products({ data }: ProductsProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {data.title}
          </h2>
        </div>
        <div className="space-y-16">
          {data.categories.map((category, index) => (
            <div key={index}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <Button variant="outline">{product.button}</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
