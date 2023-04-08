interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
  return (
    <a href={href} className="transition hover:underline">
      {label}
    </a>
  );
};

export default MenuItem;
