import { createContext } from "react";
import type { DeleteModalContextType } from "../types/place";

export const DeleteModalContext = createContext<
  DeleteModalContextType | undefined
>(undefined);
