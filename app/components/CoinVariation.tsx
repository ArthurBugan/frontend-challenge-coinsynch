import { percent } from "@hooks/format";

interface CoinVariation {
  name: string;
  variation?: string;
}

interface ExchangeRate {
  time_period_start: string;
  time_period_end: string;
  time_open: string;
  time_close: string;
  rate_open: number;
  rate_high: number;
  rate_low: number;
  rate_close: number;
}

const getCoinVariation = async (coinVariation: CoinVariation) => {
  const { name } = coinVariation;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setHours(0, 0, 0, 0);
  yesterday.setDate(yesterday.getDate() - 1);

  const res: Response = await fetch(
    `https://rest.coinapi.io/v1/exchangerate/${name}/USD/history?period_id=1DAY&apikey=${
      process.env.API_KEY
    }&time_start=${yesterday
      .toISOString()
      .replace(".000Z", "")}&time_end=${today
      .toISOString()
      .replace(".000Z", "")}`,
    {
      next: { revalidate: 6000000 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return {
      name,
      variation: "+0",
    };
  }

  const coinData: ExchangeRate[] = await res.json();
  const variation = percent(
    coinData[0]?.rate_open / coinData[1]?.rate_close / 100
  );

  return {
    name,
    variation,
  };
};

/* @ts-expect-error Async Server Component */
const CoinVariation: React.FC<CoinVariation> = async (props) => {
  const { variation } = await getCoinVariation(props);

  return (
    <span
      data-price={`${variation[0]}`}
      className="whitespace-nowrap data-[price='+']:text-tertiary-700 data-[price='-']:text-quartenary-700"
    >
      {variation}
    </span>
  );
};

export default CoinVariation;
