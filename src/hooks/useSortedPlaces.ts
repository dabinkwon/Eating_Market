import { useState } from "react";
import { sortPlacesByDistance } from "../utils/distance";
import type { Places } from "../types/place";

interface UseSortedPlacesReturn {
  sortedPlaces: Places;
  getLocation: () => void;
  geoError: string | null;
  isGeoLoading: boolean;
}

export const useSortedPlaces = (data: Places): UseSortedPlacesReturn => {
  const [sortedPlaces, setSortedPlaces] = useState<Places>([]);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [isGeoLoading, setIsGeoLoading] = useState(false);

  const getLocation = () => {
    if (!data) return;

    setIsGeoLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const sortedData = sortPlacesByDistance(
          data,
          pos.coords.latitude,
          pos.coords.longitude,
        );
        setSortedPlaces(sortedData);
        setIsGeoLoading(false);
        setGeoError(null);
      },
      (err) => {
        console.log("위치를 불러오지 못했습니다.", err);
        setGeoError("위치를 불러오지 못했습니다.");
        setIsGeoLoading(false);
      },
    );
  };
  return { sortedPlaces, getLocation, geoError, isGeoLoading };
};
