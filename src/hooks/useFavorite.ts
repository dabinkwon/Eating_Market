import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../api/axiosInstance";
import type { Place, Places } from "../types/place";

// 저장한 식당 가지고 오기
const fetchFavorites = async (): Promise<Places> => {
  const res = await axiosInstance.get<{ places: Places }>("/users/places");
  return res.data.places;
};

export const useFavorites = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<Places, Error>({
    queryKey: ["favorite_places"],
    queryFn: fetchFavorites,
  });

  const isFavorite = (placeId: string): boolean => {
    if (!data) return false;
    return data.some((place) => place.id === placeId);
  };

  // 식당 추가
  const addFavorite = useMutation({
    mutationFn: async (place: Place) => {
      const res = await axiosInstance.post("/users/places", { place });
      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorite_places"] });
    },
  });

  // 식당 삭제
  const deleteFavorite = useMutation({
    mutationFn: async (placeId: string) => {
      await axiosInstance.delete(`/users/places/${placeId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorite_places"] });
    },
  });

  return { data, isLoading, error, addFavorite, isFavorite, deleteFavorite };
};
