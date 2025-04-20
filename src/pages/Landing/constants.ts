import {
  Building2,
  Car,
  Database,
  Landmark,
  Shield,
  TrafficCone,
} from "lucide-react";

export const solutions = [
  {
    icon: Building2,
    title: "Pavement Asset Management",
    description:
      "Detect pavement distresses, calculate PCI, and evaluate marking retro-reflectivity with advanced AI algorithms.",
    features: [
      "AI-powered distress detection",
      "PCI calculation",
      "Retro-reflectivity analysis",
    ],
  },
  {
    icon: Car,
    title: "Traffic Asset Management",
    description:
      "Detect and geolocate traffic signs, evaluate sign conditions, and estimate sign sizes with precision analytics.",
    features: [
      "Sign detection & geolocation",
      "Condition assessment",
      "Size estimation",
    ],
  },
  {
    icon: TrafficCone,
    title: "Traffic Management Control",
    description:
      "Monitor intersections for congestion, estimate AADT, and detect traffic anomalies with real-time analytics.",
    features: [
      "Intersection monitoring",
      "AADT estimation",
      "Anomaly detection",
    ],
  },
  {
    icon: Landmark,
    title: "Bridge Monitoring",
    description:
      "Deploy drones for comprehensive inspections to monitor bridge structures and detect potential issues early.",
    features: [
      "Drone inspections",
      "Structural monitoring",
      "Early issue detection",
    ],
  },
  {
    icon: Shield,
    title: "Guard-rails Monitoring",
    description:
      "Detect guard rails and evaluate their conditions for safety management with computer vision technology.",
    features: [
      "Guard rail detection",
      "Condition evaluation",
      "Safety management",
    ],
  },
  {
    icon: Database,
    title: "Data Collection Services",
    description:
      "Use the customized AdAMS app for data collection and IRI prediction with seamless integration and reporting.",
    features: [
      "Custom data collection",
      "IRI prediction",
      "Seamless integration",
    ],
  },
];

export const whatWeDo = [
  {
    category: "Pavement Assets",
    icon: "Building2",
    features: [
      "Distress Detection Analysis",
      "PCI Estimation and Mapping",
      "Pavement Marking Evaluation",
      "Condition Forecasting",
    ],
  },
  {
    category: "Traffic Assets",
    icon: "Car",
    features: [
      "Traffic Sign Detection",
      "Retroreflectivity Analysis",
      "Degradation Forecasting",
      "Sign Condition Management",
    ],
  },
  {
    category: "TMC Solutions",
    icon: "TrafficCone",
    features: [
      "Intersection Congestion Analysis",
      "AADT Estimation",
      "Accident Detection",
      "Wrong Parking Detection",
    ],
  },
];

export const FAQs = [
  {
    question: "What is AdAMS?",
    answer:
      "AdAMS is a comprehensive infrastructure asset management system designed to help organizations efficiently manage, monitor, and maintain their infrastructure assets. It provides tools for asset tracking, maintenance scheduling, compliance monitoring, and data-driven decision making.",
  },
  {
    question: "How does AdAMS help with compliance?",
    answer:
      " AdAMS ensures compliance by providing real-time monitoring, automated reporting, and comprehensive audit trails. It helps track maintenance schedules, regulatory requirements, and asset performance metrics, making it easier to meet industry standards and regulations.",
  },
  {
    question: "Can I integrate AdAMS with other systems?",
    answer:
      "Yes, AdAMS is designed to integrate seamlessly with many common business tools and systems. We support integration with various asset management, maintenance, and enterprise resource planning (ERP) systems to ensure a smooth workflow.",
  },
  {
    question: "Is AdAMS customizable?",
    answer:
      "Yes, AdAMS is highly customizable. We understand that every organization has unique needs, so we offer a range of customization options to tailor the system to your specific requirements.",
  },
  {
    question: "What kind of support does AdAMS provide?",
    answer:
      "AdAMS offers comprehensive support, including training, technical assistance, and customer service. Our team is dedicated to ensuring you get the most out of our system.",
  },
];

export const insights = [
  {
    title: "Pavement Condition Index (PCI)",
    description:
      "Advanced analysis of pavement conditions using AI-powered image processing and machine learning algorithms.",
    list: [
      "Automated condition assessment",
      "Real-time data collection",
      "Predictive analytics for maintenance planning",
    ],
    image: "/pavecap-video.gif",
  },
  {
    title: "Pavement Distress Evaluation",
    description:
      "AI-powered distress detection and classification for accurate pavement condition assessment.",
    list: [
      "Detailed distress classification",
      "Severity level assessment",
      "Automated reporting and analysis",
    ],
    image: "/pde.gif",
  },
  {
    title: "Traffic Sign Retroreflectivity",
    description:
      " Precise measurement and analysis of traffic sign retroreflectivity for improved road safety.",
    list: [
      "Automated accurate retroreflectivity measurement",
      "Compliance monitoring",
      "Maintenance prioritization",
    ],
    image: "/pavecap-video.gif",
  },
];
