import Image from "next/image";

import { Icons } from "@components/Card";

import { coin, leading } from "@hooks/format";
import type { Coin } from "@utils/getCoins";

import Table from "./Table";
import ClientCoinVariation from "@components/ClientCoinVariation";

interface TableProps {
  header: string[];
  headerMobile: string[];
  updatedAt?: number;
  items: [{ crypto: Coin; value: string }];
}

const TableHoldings: React.FC<TableProps> = (props) => {
  let { header, headerMobile, updatedAt, items } = props;

  return (
    <>
      <div className="hidden w-full sm:block">
        <Table header={header} hideViewMore updatedAt={updatedAt}>
          <>
            {items?.map((i, index) => (
              <tr
                key={i?.crypto.id_icon}
                className="odd:bg-white even:bg-secondary-100"
              >
                <td className="py-5">
                  <label className={"pl-6 font-normal text-secondary-500"}>
                    {leading(index + 1)}
                  </label>
                </td>
                <td className="py-5">
                  <div className="flex flex-row items-center ">
                    <Image
                      width={32}
                      height={32}
                      alt={`${i?.crypto.name} icon`}
                      src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${i?.crypto?.id_icon?.replaceAll(
                        "-",
                        ""
                      )}.png`}
                    />
                    <p className="ml-4">{i.crypto.name}</p>{" "}
                    <p className="ml-2 text-secondary-500">
                      {i.crypto.asset_id}
                    </p>
                  </div>
                </td>
                <td className="py-5 text-gray">
                  <div className="flex flex-col">
                    <p>
                      {coin((i?.crypto?.price_usd || 0) * parseFloat(i.value))}
                    </p>
                    <div>
                      <small className="text-primary-500">{i?.value}</small>
                      <small className="ml-1 text-primary-500">
                        {i?.crypto?.asset_id}
                      </small>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <ClientCoinVariation name={i?.crypto?.asset_id} />
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <Icons.swap />
                  </div>
                </td>
              </tr>
            ))}
          </>
        </Table>
      </div>
    </>
  );
};

export default TableHoldings;
