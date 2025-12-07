"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChevronDown, CheckCircle2 } from "lucide-react";

interface ServicesDetailedProps {
  data: {
    title: string;
    subtitle: string;
    categories: Array<{
      id: string;
      name: string;
      tagline: string;
      description: string;
      icon: string;
      color: string;
      features: Array<{
        title: string;
        description: string;
        icon: string;
      }>;
      benefits: string[];
      useCases: Array<{
        industry: string;
        challenge: string;
        solution: string;
        result: string;
      }>;
    }>;
  };
}

export default function ServicesDetailed({ data }: ServicesDetailedProps) {
  const [expandedService, setExpandedService] = useState<string | null>(
    data.categories[0]?.id || null
  );

  const colorClasses: { [key: string]: string } = {
    blue: "from-blue-500/10 to-blue-600/5 border-blue-500/20",
    purple: "from-purple-500/10 to-purple-600/5 border-purple-500/20",
    red: "from-red-500/10 to-red-600/5 border-red-500/20",
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {data.categories.map((category) => (
            <Card
              key={category.id}
              className={`overflow-hidden transition-all duration-300 ${
                expandedService === category.id ? "shadow-xl" : "shadow-md"
              }`}
            >
              {/* Service Header */}
              <CardHeader
                className={`cursor-pointer bg-gradient-to-r ${
                  colorClasses[category.color]
                } border-l-4`}
                onClick={() =>
                  setExpandedService(
                    expandedService === category.id ? null : category.id
                  )
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      {category.name}
                    </CardTitle>
                    <p className="text-sm font-semibold text-blue-600 mb-2">
                      {category.tagline}
                    </p>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${
                      expandedService === category.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CardHeader>

              {/* Expanded Content */}
              <AnimatePresence initial={false}>
                {expandedService === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <CardContent className="pt-6">
                  {/* Features Grid */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.features.map((feature, index) => (
                        <div
                          key={index}
                          className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {feature.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Business Benefits
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Real-World Applications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.useCases.map((useCase, index) => (
                        <Card key={index} className="border-2">
                          <CardHeader>
                            <CardTitle className="text-lg">
                              {useCase.industry}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <p className="text-xs font-semibold text-red-600 mb-1">
                                CHALLENGE
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {useCase.challenge}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-blue-600 mb-1">
                                SOLUTION
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {useCase.solution}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-green-600 mb-1">
                                RESULT
                              </p>
                              <p className="text-sm font-medium">
                                {useCase.result}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
