import { useContext } from "react";
import type { DeleteModalContextType } from "../types/place";
import { DeleteModalContext } from "../contexts/DeleteModalContext";

export const useDeleteModal = (): DeleteModalContextType => {
  const modalContext = useContext(DeleteModalContext);
  if (!modalContext)
    throw new Error(
      "useDeleteModal은 DeleteModalProvider안에서 사용되어야 합니다.",
    );
  return modalContext;
};
