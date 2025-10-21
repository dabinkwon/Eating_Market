import { createContext } from "react";
import type { ModeType } from "../types/place";

export const ModeContext = createContext<ModeType | undefined>(undefined);
