"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface PortfolioStatsProps {
  data: {
    title: string;
    metrics: Array<{
      value: string;
      label: string;
      description: string;
    }>;
  };
}

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  // Extract number from value string
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      const controls = animate(motionValue, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, numericValue, motionValue]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold mb-2">
      {isInView ? (
        <>
          <motion.span>{rounded}</motion.span>
          <span>{suffix}</span>
        </>
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  );
}

export default function PortfolioStats({ data }: PortfolioStatsProps) {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl lg:text-3xl font-bold text-center mb-12"
        >
          {data.title}
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter value={metric.value} />
              <div className="text-lg font-semibold mb-1">{metric.label}</div>
              <div className="text-sm opacity-80">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
