export const data = {
  // theme: {
  //   primary: "#1a365d", // Dark blue
  //   accent: "#3182ce", // Blue
  //   background: "#ffffff", // White
  //   text: "#2d3748", // Dark gray
  // },
  header: {
    logo: {
      image: "/headers/logo.png",
      link: "/",
    },
    nav: [
      {
        text: "About us",
        children: [
          {
            text: "Who we are",
            link: "/about-us#who-we-are",
          },
          {
            text: "Our Teams",
            link: "/about-us#our-teams",
          },
          {
            text: "awards",
            link: "/about-us#awards",
          },
        ],
      },
      {
        text: "Products & Services",
        link: "/products-services",
      },
      {
        text: "Partners",
        link: "/partners",
      },
      {
        text: "Clients",
        link: "/clients",
      },
      {
        text: "Media",
        children: [
          {
            text: "News",
            link: "/media-news",
          },
          {
            text: "Blogs",
            link: "/media-blogs",
          },
        ],
      },
    ],
    cta: {
      text: "Contact Us",
      link: "#contact",
    },
  },
  hero: {
    headline: "Empowering Your Business with Technology Solutions",
    subtext:
      "Sparkline delivers innovative IT services that drive growth, security, and efficiency for modern enterprises.",
    cta: {
      text: "Get Started Today",
      link: "#contact",
    },
    illustration: "/about-team.jpg", // Placeholder
  },
  whyChooseUs: {
    title: "Why Choose Sparkline?",
    subtitle:
      "We provide comprehensive technology solutions tailored to your business needs.",
    cards: [
      {
        title: "Expertise & Innovation",
        description:
          "Our team of certified professionals brings years of experience and stays ahead of the latest technology trends.",
        icon: "Zap",
      },
      {
        title: "Reliable Support",
        description:
          "24/7 technical support ensures your systems run smoothly with minimal downtime.",
        icon: "Shield",
      },
      {
        title: "Customized Solutions",
        description:
          "We design solutions that fit your unique business requirements and scale with your growth.",
        icon: "Target",
      },
    ],
  },
  stats: {
    title: "Our Impact in Numbers",
    metrics: [
      {
        value: "98%",
        label: "Customer Satisfaction",
      },
      {
        value: "500+",
        label: "Projects Completed",
      },
      {
        value: "50+",
        label: "Team Members",
      },
      {
        value: "150%",
        label: "Growth Rate",
      },
    ],
  },
  about: {
    title: "About Sparkline",
    description:
      "Founded in 2015, Sparkline has been at the forefront of technological innovation, helping businesses transform their operations through cutting-edge IT solutions. Our mission is to empower organizations with reliable, secure, and efficient technology infrastructure.",
    image: "/about-team.jpg", // Placeholder
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive IT solutions to meet all your technology needs.",
    categories: [
      {
        name: "Managed Services",
        description: "Comprehensive IT management and support.",
        services: [
          "Remote technical support",
          "Network monitoring",
          "Strategic IT planning",
          "Outsourced IT support",
        ],
      },
      {
        name: "Software Services",
        description: "Development and deployment solutions.",
        services: [
          "Deployment services",
          "Microsoft & Google licensing",
          "Custom software development",
        ],
      },
      {
        name: "Security Solutions",
        description: "Advanced protection for your digital assets.",
        services: [
          "Cybersecurity strengthening",
          "Advanced threat protection",
          "Compliance & risk mitigation",
        ],
      },
    ],
  },
  products: {
    title: "Explore Our Products",
    categories: [
      {
        name: "Cloud Solutions",
        description: "Scalable cloud infrastructure and services.",
        products: [
          {
            name: "Cloud Migration Suite",
            description: "Seamless migration to cloud platforms.",
            button: "Learn More",
          },
          {
            name: "Cloud Security Platform",
            description: "Comprehensive cloud security solutions.",
            button: "Get Started",
          },
        ],
      },
      {
        name: "Productivity Tools",
        description: "Enhance team collaboration and efficiency.",
        products: [
          {
            name: "Unified Communication System",
            description: "Integrated communication and collaboration tools.",
            button: "Explore",
          },
          {
            name: "Project Management Dashboard",
            description: "Streamline project tracking and reporting.",
            button: "Try Now",
          },
        ],
      },
    ],
  },
  cta: {
    title: "Have an IT Solution Need?",
    subtitle:
      "Let's discuss how we can help transform your business with our expert technology solutions.",
    button: {
      text: "Contact Us",
      link: "#contact",
    },
  },
  awards: {
    title: "Awards & Recognition",
    items: [
      {
        name: "Best IT Services Provider 2023",
        issuer: "Tech Excellence Awards",
        year: "2023",
      },
      {
        name: "Cybersecurity Innovation Award",
        issuer: "Security Summit",
        year: "2022",
      },
      {
        name: "Top Managed Services Company",
        issuer: "IT World Awards",
        year: "2021",
      },
      {
        name: "Digital Transformation Leader",
        issuer: "Innovation Forum",
        year: "2020",
      },
    ],
  },
  newsletter: {
    title: "Stay Updated",
    subtitle:
      "Subscribe to our newsletter for the latest technology insights and company updates.",
    placeholder: "Enter your email address",
    button: "Subscribe",
  },
  footer: {
    description:
      "Empowering businesses with innovative technology solutions since 2015.",
    links: {
      services: [
        { text: "Managed Services", link: "#services" },
        { text: "Software Services", link: "#services" },
        { text: "Security Solutions", link: "#services" },
      ],
      company: [
        { text: "About Us", link: "#about" },
        { text: "Careers", link: "#careers" },
        { text: "Contact", link: "#contact" },
      ],
      resources: [
        { text: "Blog", link: "#blog" },
        { text: "Case Studies", link: "#case-studies" },
        { text: "Support", link: "#support" },
      ],
    },
    social: [
      {
        name: "LinkedIn",
        link: "https://linkedin.com/company/sparkline",
        icon: "Linkedin",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/sparkline",
        icon: "Twitter",
      },
      {
        name: "Facebook",
        link: "https://facebook.com/sparkline",
        icon: "Facebook",
      },
    ],
    copyright: "© 2024 Sparkline. All rights reserved.",
  },
};
