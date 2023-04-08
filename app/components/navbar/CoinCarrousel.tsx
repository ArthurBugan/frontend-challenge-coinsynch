import CoinCarrouselItem from "./CoinCarrouseltem";

interface Coin {
  asset_id: string;
  name: string;
  type_is_crypto: number;
  data_quote_start: Date;
  data_quote_end: Date;
  data_orderbook_start: Date;
  data_orderbook_end: Date;
  data_trade_start: Date;
  data_trade_end: Date;
  data_symbols_count: number;
  volume_1hrs_usd: number;
  volume_1day_usd: number;
  volume_1mth_usd: number;
  price_usd: number;
  id_icon: string;
  data_start: Date;
  data_end: Date;
}

/* @ts-expect-error Async Server Component */
const CoinCarrousel: React.FC = async ({}) => {
  const coins = [
    { coin: "BIT", price: "R$ 23,62", variation: "+7,32%" },
    { coin: "DOGE", price: "R$ 23,62", variation: "+5,23%" },
    { coin: "ETH", price: "R$ 1426,62", variation: "-2,23%" },
    { coin: "BIT", price: "R$ 23,62", variation: "+7,32%" },
    { coin: "DOGE", price: "R$ 23,62", variation: "+5,23%" },
    { coin: "ETH", price: "R$ 1426,62", variation: "-2,23%" },
  ];

  return (
    <div className="flex animate-scrolling-left flex-row gap-x-2 md:max-w-xs">
      {coins.map((c) => (
        <div key={c.coin}>
          <CoinCarrouselItem {...c} />
        </div>
      ))}
      <div aria-hidden="true" className="flex flex-row">
        {coins.map((c) => (
          <div key={c.coin}>
            <CoinCarrouselItem {...c} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinCarrousel;
