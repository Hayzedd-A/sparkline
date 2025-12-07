"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Quote } from "lucide-react";
import { Badge } from "../ui/badge";

interface PortfolioProps {
  data: {
    title: string;
    subtitle: string;
    featured: Array<{
      id: number;
      title: string;
      client: string;
      industry: string;
      category: string;
      challenge: string;
      solution: string;
      results: string[];
      technologies: string[];
      duration: string;
      year: string;
      image: string;
      testimonial: {
        quote: string;
        author: string;
        position: string;
      };
    }>;
  };
}

export default function Portfolio({ data }: PortfolioProps) {
  const [filter, setFilter] = useState<string>("All");

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(data.featured.map((item) => item.category))),
  ];

  // Filter projects
  const filteredProjects =
    filter === "All"
      ? data.featured
      : data.featured.filter((item) => item.category === filter);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Placeholder */}
                <div
                  className={`bg-gradient-to-br from-primary/20 to-accent/20 min-h-[300px] flex items-center justify-center ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-muted-foreground">
                      Project Screenshot
                      <br />
                      <span className="text-sm">{project.category}</span>
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`p-8 ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{project.industry}</Badge>
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {project.client} • {project.duration}
                  </p>

                  {/* Challenge, Solution, Results */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-red-600 mb-2">
                        THE CHALLENGE
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-blue-600 mb-2">
                        OUR SOLUTION
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-green-600 mb-2">
                        RESULTS ACHIEVED
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="text-sm flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-muted rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                    <Quote className="w-8 h-8 text-primary/30 mb-2" />
                    <p className="text-sm italic mb-4">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-sm">
                        {project.testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {project.testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
