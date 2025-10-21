import { useContext } from "react";
import { ModeContext } from "../contexts/ModeContext";
import type { ModeType } from "../types/place";

export const useMode = (): ModeType => {
  const modeContext = useContext(ModeContext);
  if (!modeContext) {
    throw new Error("useMode는 ModeProvider안에서 사용해야 합니다!");
  }
  return modeContext;
};
