export type Places = Place[];

export interface Place {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
  description: string;
}

export interface ResturantListProps {
  places: Places;
}

export interface ResturantItemProps {
  place: Place;
}

export interface DeleteModalContextType {
  selectedPlaceId: string | null;
  openDeleteModal: (placeId: string) => void;
  closeDeleteModal: () => void;
}

export interface ModeType {
  isDark: boolean;
  handleMode: () => void;
}
