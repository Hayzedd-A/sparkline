// theme: {
//   primary: "#1a365d", // Dark blue
//   accent: "#3182ce", // Blue
//   background: "#ffffff", // White
//   text: "#2d3748", // Dark gray
// },
export const data = {
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
  productsServicesPage: {
    hero: {
      title: "Products & Services",
      subtitle:
        "Comprehensive technology solutions designed to accelerate your digital transformation and drive business excellence.",
      breadcrumb: [
        { text: "Home", link: "/" },
        { text: "Products & Services", link: "/products-services" },
      ],
    },
    servicesDetailed: {
      title: "Our Comprehensive Services",
      subtitle:
        "End-to-end IT solutions tailored to meet your unique business challenges and goals.",
      categories: [
        {
          id: "managed-services",
          name: "Managed Services",
          tagline: "Your IT Department, Outsourced",
          description:
            "Focus on your core business while we handle all your IT infrastructure, maintenance, and support needs with proactive monitoring and strategic planning.",
          icon: "Settings",
          color: "blue",
          features: [
            {
              title: "24/7 Remote Technical Support",
              description:
                "Round-the-clock expert assistance to resolve IT issues quickly, minimizing downtime and maximizing productivity.",
              icon: "Headphones",
            },
            {
              title: "Proactive Network Monitoring",
              description:
                "Continuous monitoring of your network infrastructure to detect and prevent issues before they impact your business.",
              icon: "Activity",
            },
            {
              title: "Strategic IT Planning & Consulting",
              description:
                "Align your technology roadmap with business objectives through expert guidance and strategic planning sessions.",
              icon: "Map",
            },
            {
              title: "Comprehensive IT Support",
              description:
                "Complete outsourced IT department including help desk, system administration, and infrastructure management.",
              icon: "Users",
            },
          ],
          benefits: [
            "Reduce IT costs by up to 40% compared to in-house teams",
            "Access to certified IT professionals with diverse expertise",
            "Predictable monthly costs with no surprise expenses",
            "Faster issue resolution with dedicated support team",
            "Focus internal resources on strategic initiatives",
          ],
          useCases: [
            {
              industry: "Healthcare",
              challenge:
                "Hospital needed HIPAA-compliant IT infrastructure with 99.9% uptime",
              solution:
                "Implemented redundant systems, proactive monitoring, and compliance management",
              result: "Zero downtime incidents in 18 months, passed all audits",
            },
            {
              industry: "Finance",
              challenge:
                "Growing fintech startup required scalable IT without large capital investment",
              solution:
                "Provided managed services with flexible scaling and security-first approach",
              result:
                "Supported 300% growth with seamless infrastructure scaling",
            },
          ],
        },
        {
          id: "software-services",
          name: "Software Services",
          tagline: "Build, Deploy, Scale",
          description:
            "From custom application development to cloud deployment and software licensing, we deliver solutions that drive innovation and efficiency.",
          icon: "Code",
          color: "purple",
          features: [
            {
              title: "Custom Software Development",
              description:
                "Bespoke applications tailored to your unique business processes, built with modern frameworks and best practices.",
              icon: "Layers",
            },
            {
              title: "Cloud Deployment & DevOps",
              description:
                "Streamlined deployment pipelines, containerization, and orchestration for scalable, reliable applications.",
              icon: "Cloud",
            },
            {
              title: "Enterprise Software Licensing",
              description:
                "Microsoft 365, Google Workspace, and other enterprise software licensing with setup and training included.",
              icon: "Key",
            },
            {
              title: "API Development & Integration",
              description:
                "Build robust APIs and integrate third-party services to create connected, efficient business ecosystems.",
              icon: "Link",
            },
          ],
          benefits: [
            "Accelerate time-to-market with agile development practices",
            "Reduce operational costs through automation and optimization",
            "Improve user experience with intuitive, responsive interfaces",
            "Ensure scalability and reliability with cloud-native architecture",
            "Maximize software ROI with proper licensing and management",
          ],
          useCases: [
            {
              industry: "Retail",
              challenge:
                "E-commerce company needed integrated inventory management system",
              solution:
                "Developed custom platform connecting POS, warehouse, and online store",
              result: "Reduced inventory discrepancies by 95%, increased efficiency 60%",
            },
            {
              industry: "Manufacturing",
              challenge:
                "Factory required real-time production tracking and quality control",
              solution:
                "Built IoT-integrated dashboard with mobile app for floor managers",
              result: "Improved product quality by 35%, reduced waste by 25%",
            },
          ],
        },
        {
          id: "security-solutions",
          name: "Security Solutions",
          tagline: "Protect What Matters Most",
          description:
            "Comprehensive cybersecurity services to safeguard your digital assets, ensure compliance, and maintain business continuity in an evolving threat landscape.",
          icon: "Shield",
          color: "red",
          features: [
            {
              title: "Advanced Threat Protection",
              description:
                "Multi-layered security including firewalls, intrusion detection, and endpoint protection to defend against sophisticated attacks.",
              icon: "ShieldCheck",
            },
            {
              title: "Security Assessment & Penetration Testing",
              description:
                "Identify vulnerabilities before attackers do with comprehensive security audits and ethical hacking services.",
              icon: "Search",
            },
            {
              title: "Compliance & Risk Management",
              description:
                "Navigate GDPR, HIPAA, PCI-DSS, and other regulatory requirements with expert guidance and implementation support.",
              icon: "FileCheck",
            },
            {
              title: "Incident Response & Recovery",
              description:
                "Rapid response team and disaster recovery planning to minimize damage and ensure business continuity.",
              icon: "AlertTriangle",
            },
          ],
          benefits: [
            "Protect sensitive data from breaches and cyber attacks",
            "Maintain customer trust with robust security measures",
            "Avoid costly fines and legal issues from compliance violations",
            "Reduce insurance premiums with proven security practices",
            "Ensure business continuity with disaster recovery planning",
          ],
          useCases: [
            {
              industry: "Legal Services",
              challenge:
                "Law firm needed to secure client privileged communications and meet compliance standards",
              solution:
                "Implemented end-to-end encryption, access controls, and compliance monitoring",
              result:
                "Achieved 100% compliance, zero security incidents in 2 years",
            },
            {
              industry: "Education",
              challenge:
                "University faced increasing ransomware attacks and data breach attempts",
              solution:
                "Deployed advanced threat detection, employee training, and incident response plan",
              result:
                "Blocked 1000+ attack attempts, recovered from attempted breach in 4 hours",
            },
          ],
        },
      ],
    },
    portfolio: {
      title: "Case Studies & Portfolio",
      subtitle:
        "Real results for real businesses. Explore how we've helped organizations like yours achieve their technology goals.",
      featured: [
        {
          id: 1,
          title: "Enterprise Cloud Migration for Global Manufacturer",
          client: "Fortune 500 Manufacturing Company",
          industry: "Manufacturing",
          category: "Cloud Solutions",
          challenge:
            "Large-scale manufacturer operating on legacy on-premise infrastructure faced scalability issues, high maintenance costs, and limited disaster recovery capabilities. Their outdated systems couldn't support rapid business growth and remote workforce needs.",
          solution:
            "Executed comprehensive cloud migration strategy moving 200+ applications and 50TB of data to Microsoft Azure. Implemented hybrid cloud architecture, automated deployment pipelines, and comprehensive training program for IT staff.",
          results: [
            "Reduced IT infrastructure costs by 45% annually",
            "Improved system uptime from 96% to 99.97%",
            "Enabled remote access for 2,000+ employees globally",
            "Decreased deployment time from weeks to hours",
            "Achieved full disaster recovery capability with RPO of 15 minutes",
          ],
          technologies: [
            "Microsoft Azure",
            "Kubernetes",
            "Terraform",
            "Azure DevOps",
            "PowerBI",
          ],
          duration: "9 months",
          year: "2023",
          image: "/portfolio/cloud-migration.jpg",
          testimonial: {
            quote:
              "Sparkline transformed our entire IT infrastructure. The migration was seamless, and we're now operating at a level of efficiency we never thought possible.",
            author: "David Chen",
            position: "CTO, Global Manufacturing Corp",
          },
        },
        {
          id: 2,
          title: "Healthcare Platform with HIPAA Compliance",
          client: "Regional Healthcare Network",
          industry: "Healthcare",
          category: "Custom Software",
          challenge:
            "Healthcare network needed integrated patient management system connecting 12 facilities while maintaining strict HIPAA compliance. Existing fragmented systems led to inefficiencies and patient data silos.",
          solution:
            "Developed custom healthcare platform with electronic health records, appointment scheduling, billing integration, and patient portal. Implemented robust security measures, audit logging, and compliance monitoring.",
          results: [
            "Unified patient records across all 12 facilities",
            "Reduced appointment scheduling time by 70%",
            "Improved patient satisfaction scores by 40%",
            "Achieved 100% HIPAA compliance in all audits",
            "Decreased billing errors by 85%",
          ],
          technologies: [
            "React",
            "Node.js",
            "PostgreSQL",
            "HL7 FHIR",
            "AWS",
            "Docker",
          ],
          duration: "12 months",
          year: "2022",
          image: "/portfolio/healthcare-platform.jpg",
          testimonial: {
            quote:
              "This platform has revolutionized how we deliver patient care. The integration across our facilities has eliminated countless hours of administrative work.",
            author: "Dr. Sarah Martinez",
            position: "Chief Medical Information Officer",
          },
        },
        {
          id: 3,
          title: "Financial Trading Platform with Real-Time Analytics",
          client: "Investment Management Firm",
          industry: "Finance",
          category: "Custom Software",
          challenge:
            "Investment firm required high-performance trading platform capable of processing millions of transactions daily with real-time analytics and predictive modeling capabilities.",
          solution:
            "Built scalable microservices architecture with real-time data streaming, advanced analytics dashboard, and machine learning models for market prediction. Implemented comprehensive security and compliance features.",
          results: [
            "Processing 5M+ transactions daily with <10ms latency",
            "Enabled real-time portfolio analytics for 10,000+ clients",
            "Improved trading decision accuracy by 35%",
            "Reduced infrastructure costs by 50% through optimization",
            "Achieved SOC 2 Type II compliance",
          ],
          technologies: [
            "Python",
            "Apache Kafka",
            "Redis",
            "TensorFlow",
            "React",
            "GraphQL",
          ],
          duration: "14 months",
          year: "2023",
          image: "/portfolio/trading-platform.jpg",
          testimonial: {
            quote:
              "The platform's performance and reliability have exceeded our expectations. It's become a competitive advantage for our firm.",
            author: "Michael Roberts",
            position: "Managing Director, Investment Operations",
          },
        },
        {
          id: 4,
          title: "Cybersecurity Overhaul for Legal Enterprise",
          client: "International Law Firm",
          industry: "Legal Services",
          category: "Security Solutions",
          challenge:
            "Law firm with 500+ employees across 8 offices faced increasing cyber threats and needed to meet stringent data protection requirements for international clients.",
          solution:
            "Implemented comprehensive security framework including zero-trust architecture, advanced threat detection, employee security training, and incident response procedures. Established compliance with GDPR, CCPA, and industry standards.",
          results: [
            "Zero successful security breaches in 24 months",
            "Detected and blocked 2,500+ attack attempts",
            "Achieved compliance with all regulatory requirements",
            "Reduced security incident response time by 80%",
            "Improved employee security awareness scores by 90%",
          ],
          technologies: [
            "Microsoft Sentinel",
            "CrowdStrike",
            "Okta",
            "Cisco SecureX",
            "KnowBe4",
          ],
          duration: "6 months",
          year: "2022",
          image: "/portfolio/cybersecurity.jpg",
          testimonial: {
            quote:
              "Sparkline's security expertise gave us peace of mind and satisfied our clients' most demanding security requirements.",
            author: "Jennifer Thompson",
            position: "Chief Information Security Officer",
          },
        },
        {
          id: 5,
          title: "E-Commerce Platform Modernization",
          client: "National Retail Chain",
          industry: "Retail",
          category: "Software Services",
          challenge:
            "Retail chain's outdated e-commerce platform couldn't handle peak traffic, had poor mobile experience, and lacked modern features like personalization and real-time inventory.",
          solution:
            "Rebuilt e-commerce platform using headless architecture, implemented progressive web app, integrated AI-powered recommendations, and connected real-time inventory across 200+ stores.",
          results: [
            "Increased online revenue by 140% year-over-year",
            "Improved mobile conversion rate by 85%",
            "Reduced cart abandonment by 45%",
            "Handled 10x traffic during peak sales events",
            "Decreased inventory discrepancies by 92%",
          ],
          technologies: [
            "Next.js",
            "Shopify Plus",
            "Algolia",
            "Segment",
            "Google Cloud",
          ],
          duration: "10 months",
          year: "2023",
          image: "/portfolio/ecommerce.jpg",
          testimonial: {
            quote:
              "Our online business has transformed completely. The new platform is fast, reliable, and our customers love it.",
            author: "Amanda Foster",
            position: "VP of Digital Experience",
          },
        },
        {
          id: 6,
          title: "Smart Campus IoT Integration",
          client: "Major University",
          industry: "Education",
          category: "Managed Services",
          challenge:
            "University wanted to modernize campus operations with smart building technology, improve energy efficiency, and enhance student experience through connected systems.",
          solution:
            "Deployed comprehensive IoT infrastructure across 40 buildings including smart lighting, HVAC optimization, occupancy sensors, and unified management platform. Integrated with existing campus systems.",
          results: [
            "Reduced energy consumption by 35%",
            "Saved $1.2M annually in utility costs",
            "Improved classroom utilization by 28%",
            "Enhanced campus security with real-time monitoring",
            "Provided data-driven insights for facility planning",
          ],
          technologies: [
            "AWS IoT Core",
            "LoRaWAN",
            "Node-RED",
            "InfluxDB",
            "Grafana",
          ],
          duration: "18 months",
          year: "2022-2023",
          image: "/portfolio/smart-campus.jpg",
          testimonial: {
            quote:
              "The smart campus initiative has not only saved costs but significantly improved sustainability and student experience.",
            author: "Dr. Robert Williams",
            position: "VP of Campus Operations",
          },
        },
      ],
      stats: {
        title: "Portfolio at a Glance",
        metrics: [
          {
            value: "500+",
            label: "Projects Delivered",
            description: "Successfully completed initiatives",
          },
          {
            value: "98%",
            label: "Client Retention",
            description: "Long-term partnerships",
          },
          {
            value: "$50M+",
            label: "Cost Savings",
            description: "Delivered to clients",
          },
          {
            value: "15+",
            label: "Industries",
            description: "Served globally",
          },
        ],
      },
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle:
        "Let's discuss how our products and services can address your specific challenges and drive measurable results.",
      primaryButton: {
        text: "Schedule Consultation",
        link: "#contact",
      },
      secondaryButton: {
        text: "View All Case Studies",
        link: "#portfolio",
      },
    },
  },
};
