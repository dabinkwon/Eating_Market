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
  onDeleteClick?: () => void;
}
