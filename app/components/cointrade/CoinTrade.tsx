"use client";

import Image from "next/image";

import { Icons } from "@components/Card";
import Button from "@components/buttons/Button";
import TableHoldings from "@components/tables/TableHoldings";

import emptywallet from "../../../public/images/empty-wallet.webp";

import useAddCryptoModal from "@hooks/useAddCryptoModal";
import useTradeStore from "@hooks/useTrade";

const CoinTrade = () => {
  const addCrypto = useAddCryptoModal();
  const trade = useTradeStore();

  return (
    <div className="bg-white shadow-trade">
      <div className="flex flex-row justify-between border-b border-b-secondary-200 p-6">
        <div className="flex flex-row">
          <Icons.wallet width={32} height={32} />
          <h4 className="ml-4 font-bold text-gray">My wallet</h4>
        </div>
        <Button
          onClick={addCrypto.onOpen}
          title="Add crypto"
          icon="BsPlus"
          iconLeft
        />
      </div>
      {!trade.data.length && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="h-16 w-20">
            <Image alt="Image of a empty wallet" src={emptywallet} />
          </div>
          <h5 className="mb-2 mt-5 font-bold">Nothing here yet...</h5>
          <p>Add a crypto and start earning</p>
        </div>
      )}

      {!!trade.data.length && (
        <div className="hidden lg:block">
          <TableHoldings
            headerMobile={[]}
            items={trade.data}
            updatedAt={trade.updatedAt}
            header={["#", "Crypto", "Holdings", "Change", "Trade"]}
          />
        </div>
      )}
    </div>
  );
};

export default CoinTrade;
