import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  onClick?(): void;
  className?: string;
}

const Button = ({ text, onClick, className }: ButtonProps) => {
  const classNameMerge = twMerge(
    "hover:bg-[rgb(92,9,13)] cursor-pointer p-2 hover:text-white rounded-sm min-w-[80px]",
    className,
  );

  return (
    <button onClick={onClick} className={classNameMerge}>
      {text}
    </button>
  );
};
export default Button;
