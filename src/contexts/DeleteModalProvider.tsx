import { useState } from "react";
import { DeleteModalContext } from "./DeleteModalContext";

export const DeleteModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  const openDeleteModal = (placeId: string) => setSelectedPlaceId(placeId);
  const closeDeleteModal = () => setSelectedPlaceId(null);

  return (
    <DeleteModalContext
      value={{ selectedPlaceId, openDeleteModal, closeDeleteModal }}
    >
      {children}
    </DeleteModalContext>
  );
};
