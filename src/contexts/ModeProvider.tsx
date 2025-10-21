import { useEffect, useState } from "react";
import { ModeContext } from "./ModeContext";

const getInitialMode = (): boolean => {
  const isStoredDark = localStorage.getItem("isDark") === "true";
  if (isStoredDark) {
    document.documentElement.classList.add("dark");
  }
  return isStoredDark;
};

export const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(getInitialMode);

  const handleMode = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    localStorage.setItem("isDark", String(isDark));
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return <ModeContext value={{ isDark, handleMode }}>{children}</ModeContext>;
};
