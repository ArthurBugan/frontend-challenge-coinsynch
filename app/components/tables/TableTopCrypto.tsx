import Image from "next/image";
import type { Coin } from "@components/navbar/CoinCarrousel";
import { getCoins } from "@components/navbar/CoinCarrousel";
import Button from "@components/buttons/Button";

import { coin } from "@hooks/format";

import CoinVariation from "../CoinVariation";
import Table from "./Table";

interface TableProps {
  header: string[];
  items?: Coin[];
}

/* @ts-expect-error Async Server Component */
const TableTopCrypto: React.FC<TableProps> = async (props) => {
  let { header, items } = props;

  if (!items) {
    items = await getCoins();
  }
  return (
    <Table header={header}>
      <>
        {items?.map((i, index) => (
          <tr key={i.asset_id} className="odd:bg-secondary-100 even:bg-white">
            <td className="py-5">
              <label className={"pl-6 font-normal text-secondary-500"}>
                {(index + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </label>
            </td>
            <td className="flex flex-row items-center py-5">
              <Image
                width={32}
                height={32}
                alt={`${i?.name} icon`}
                src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${i?.id_icon?.replaceAll(
                  "-",
                  ""
                )}.png`}
              />
              <p className="ml-4">{i.name}</p>{" "}
              <p className="ml-2 text-secondary-500">{i.asset_id}</p>
            </td>
            <td className="py-5">{coin(i?.price_usd)}</td>
            <td className="py-5">
              <CoinVariation name={i?.asset_id} />
            </td>
            <td>
              <div>
                <Button
                  title="Buy"
                  type="button"
                  className="ml-auto mr-6 h-8 bg-tertiary-700 hover:bg-tertiary-800"
                />
              </div>
            </td>
          </tr>
        ))}
      </>
    </Table>
  );
};

export default TableTopCrypto;
