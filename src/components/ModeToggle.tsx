import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useMode } from "../hooks/useMode";

const ModeToggle = () => {
  const { isDark, handleMode } = useMode();

  const handleToggle = (): void => {
    handleMode();
  };

  const modeClassName = "cursor-pointer text-2xl hoverTransition";

  return (
    <button onClick={handleToggle}>
      {isDark ? (
        <MdDarkMode className={`${modeClassName} text-amber-400`} />
      ) : (
        <MdOutlineDarkMode className={modeClassName} />
      )}
    </button>
  );
};

export default ModeToggle;
