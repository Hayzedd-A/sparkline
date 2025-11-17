interface StatsProps {
  data: {
    title: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
  };
}

export default function Stats({ data }: StatsProps) {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {metric.value}
              </div>
              <div className="text-lg opacity-90">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
