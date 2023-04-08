interface CoinProps {
  coin: string;
  price: string;
  variation: string;
}

const CoinCarrouselItem: React.FC<CoinProps> = (props) => {
  const { coin, price, variation } = props;

  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      <span className="whitespace-nowrap text-secondary-800">{coin}</span>
      <span className="whitespace-nowrap">{price}</span>
      <span
        data-price={`${variation[0]}`}
        className="whitespace-nowrap data-[price='+']:text-tertiary-700 data-[price='-']:text-quartenary-700"
      >
        {variation}
      </span>
    </div>
  );
};

export default CoinCarrouselItem;
