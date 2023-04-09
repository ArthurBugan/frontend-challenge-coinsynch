interface ButtonProps {
  title: string;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, className, onClick } = props;

  return (
    <button className={`primary ${className}`} title={title} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
};

export default Button;
