import React, { createContext, useContext, useState, useEffect } from "react";

export interface TrackingInfo {
  id: string;
  origin: string;
  destination: string;
  status: "In Transit" | "Pending" | "Delivered" | "Customs Clearance";
  currentLocation: string;
  history: Array<{ date: string; location: string; status: string }>;
  customerName: string;
}

interface TrackingContextType {
  tracks: TrackingInfo[];
  addTrack: (track: TrackingInfo) => void;
  getTrack: (id: string) => TrackingInfo | undefined;
}

const TrackingContext = createContext<TrackingContextType | undefined>(undefined);

export const TrackingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tracks, setTracks] = useState<TrackingInfo[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("ee-tracks");
    if (saved) {
      setTracks(JSON.parse(saved));
    } else {
      const initial = [{
        id: "EE1234567890",
        origin: "Dubai, UAE",
        destination: "New York, USA",
        status: "In Transit" as const,
        currentLocation: "Frankfurt, Germany",
        history: [
          { date: "2024-05-10", location: "Dubai, UAE", status: "Picked Up" },
          { date: "2024-05-11", location: "Dubai Hub", status: "Departed" },
          { date: "2024-05-12", location: "Frankfurt, Germany", status: "Arrived at sorting facility" },
        ],
        customerName: "John Doe"
      }];
      setTracks(initial);
      localStorage.setItem("ee-tracks", JSON.stringify(initial));
    }
  }, []);

  const addTrack = (t: TrackingInfo) => {
    const updated = [...tracks, t];
    setTracks(updated);
    localStorage.setItem("ee-tracks", JSON.stringify(updated));
  };

  const getTrack = (id: string) => tracks.find(t => t.id === id);

  return <TrackingContext.Provider value={{ tracks, addTrack, getTrack }}>{children}</TrackingContext.Provider>;
};

export const useTracking = () => {
  const ctx = useContext(TrackingContext);
  if (!ctx) throw new Error("useTracking must be used within TrackingProvider");
  return ctx;
};
