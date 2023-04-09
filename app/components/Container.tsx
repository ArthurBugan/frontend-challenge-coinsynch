interface ContainerProps {
  children: JSX.Element;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 md:px-12 xl:px-28">{children}</div>
  );
};

export default Container;
