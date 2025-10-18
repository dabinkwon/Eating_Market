import type { Places } from "../types/place";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api/axiosInstance";

const fetchPlaces = async (): Promise<Places> => {
  const res = await axiosInstance.get<{ places: Places }>("/places");

  return res.data.places;
};

export const usePlaces = () => {
  return useQuery<Places, Error>({
    queryKey: ["places"],
    queryFn: fetchPlaces,
  });
};
