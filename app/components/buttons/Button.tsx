import { useFormContext } from "react-hook-form";
import Loader from "@components/Loader";

interface ButtonProps {
  title: string;
  className?: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, className, onClick, disabled, type = "button" } = props;

  // If a button is contained on a FORM we can show the loader
  const formContext = useFormContext();

  return (
    <button
      className={`primary ${className}`}
      title={title}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span>
        {!formContext?.formState?.isSubmitting && title}
        {formContext?.formState?.isSubmitting && <Loader />}
      </span>
    </button>
  );
};

export default Button;
