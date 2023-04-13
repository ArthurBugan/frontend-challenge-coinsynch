import CoinCarrouselItem from "./CoinCarrouseltem";

const initialState: Coin[] = [];
export interface Coin {
  asset_id: string;
  name: string;
  type_is_crypto?: number;
  data_quote_start?: string;
  data_quote_end?: string;
  data_orderbook_start?: string;
  data_orderbook_end?: string;
  data_trade_start?: string;
  data_trade_end?: string;
  data_symbols_count?: number;
  volume_1hrs_usd?: number;
  volume_1day_usd?: number;
  volume_1mth_usd?: number;
  price_usd?: number;
  id_icon?: string;
  data_start?: string;
  data_end?: string;
  variation?: string;
}

export const getCoins = async () => {
  const res: Response = await fetch(
    `https://rest.coinapi.io/v1/assets?filter_asset_id=${process.env.ASSETS_ID}&apikey=${process.env.API_KEY}`,
    {
      next: { revalidate: 6000000 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return await Promise.resolve(initialState);
  }

  const coins: Promise<Coin[]> = await res.json();

  if (!Array.isArray(coins)) {
    return [];
  }

  return coins;
};

/* @ts-expect-error Async Server Component */
const CoinCarrousel: React.FC = async ({}) => {
  const coins = await getCoins();

  return (
    <div className="flex animate-scrolling-left flex-row gap-x-2 md:max-w-xs">
      {coins.map((c) => (
        <div key={c.name}>
          <CoinCarrouselItem {...c} />
        </div>
      ))}
      <div aria-hidden="true" className="flex flex-row gap-x-2">
        {coins.map((c) => (
          <div key={c.name}>
            <CoinCarrouselItem {...c} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinCarrousel;
