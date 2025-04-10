export type Project = {
  id: string;
  name: string;
  assetName: string;
  location: string;
  startDate: string;
  endDate: string;
  status: "planning" | "in-progress" | "completed" | "on-hold";
  teamSize: number;
  budget: number;
  description: string;
  lastModified: string;
  author: string;
  sensors: {
    accelerometer: boolean;
    gyroscope: boolean;
    gps: boolean;
  };
  analysisOptions: string[];
  videos: Video[];
  sensorData: {
    accelerometer: SensorData[];
    gyroscope: SensorData[];
    gps: SensorData[];
  };
};

type Video = {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
};

type SensorData = {
  time: string;
  x?: number;
  y?: number;
  z?: number;
  latitude?: number;
  longitude?: number;
};
