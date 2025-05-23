import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "DboFihPGrksaOrtTYw3H",
    name: "Lagos-Ibadan Expressway Expansion",
    assetName: "Main Highway Section A",
    location: "Lagos to Ibadan, Nigeria",
    startDate: "2024-01-15",
    endDate: "2025-12-30",
    status: "in-progress",
    teamSize: 45,
    budget: 250000000,
    description:
      "Expansion of the Lagos-Ibadan expressway to 10 lanes with modern tolling infrastructure and smart traffic management systems.",
    lastModified: "2024-03-29T01:36:00",
    author: "Unknown User",
    sensors: {
      accelerometer: true,
      gyroscope: true,
      gps: true,
    },
    analysisOptions: ["pavement", "traffic", "structural"],
    videos: [],
    sensorData: {
      accelerometer: [],
      gyroscope: [],
      gps: [],
    },
  },
  {
    id: "2",
    name: "Abuja Metro Rail Phase 2",
    assetName: "Central Rail Line",
    location: "Abuja, Nigeria",
    startDate: "2024-03-01",
    endDate: "2026-06-30",
    status: "planning",
    teamSize: 32,
    budget: 180000000,
    description:
      "Second phase of the Abuja metro rail system, extending the network to key suburbs and business districts.",
    lastModified: "2024-03-28T14:20:00",
    author: "Unknown User",
    sensors: {
      accelerometer: true,
      gyroscope: true,
      gps: true,
    },
    analysisOptions: ["structural", "traffic"],
    videos: [],
    sensorData: {
      accelerometer: [],
      gyroscope: [],
      gps: [],
    },
  },
  {
    id: "3",
    name: "Port Harcourt Deep Sea Port",
    assetName: "Main Port Complex",
    location: "Port Harcourt, Nigeria",
    startDate: "2023-09-01",
    endDate: "2025-08-31",
    status: "in-progress",
    teamSize: 58,
    budget: 350000000,
    description:
      "Construction of a modern deep sea port with automated container handling systems and expanded berthing facilities.",
    lastModified: "2024-03-27T09:15:00",
    author: "Unknown User",
    sensors: {
      accelerometer: true,
      gyroscope: true,
      gps: true,
    },
    analysisOptions: ["structural", "pavement"],
    videos: [],
    sensorData: {
      accelerometer: [],
      gyroscope: [],
      gps: [],
    },
  },
];
