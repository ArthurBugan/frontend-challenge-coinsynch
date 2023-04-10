interface ButtonProps {
  title: string;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, className, onClick, type = "button" } = props;

  return (
    <button
      className={`primary ${className}`}
      title={title}
      onClick={onClick}
      type={type}
    >
      <span>{title}</span>
    </button>
  );
};

export default Button;
