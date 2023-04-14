import Image from "next/image";
import { BsPlus } from "react-icons/bs";

import balance from "../../public/images/balance.webp";

export default function Dashboard() {
  return (
    <div className="flex-1 bg-[#F9F9F9] p-14">
      <div className="mb-8 grid auto-rows-fr grid-cols-4 gap-x-8 gap-y-6 lg:h-28 lg:grid-cols-[2fr,280px,280px]">
        <div className="col-span-4 rounded-lg shadow-md lg:col-span-1">
          <div className="grid h-full grid-cols-2">
            <div className="bg-white p-2 md:p-4">
              <div className="flex flex-row items-center justify-center gap-x-4 md:justify-start">
                <div className="h-8 w-8 md:h-16 md:w-16">
                  <Image
                    className="h-8 w-8 object-contain md:h-16 md:w-16"
                    alt="Balance Logo"
                    src={balance}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="hidden whitespace-nowrap md:inline">
                    Balance in US$
                  </h4>
                  <p className="block md:hidden">
                    Balance <span className="hidden sm:block">in US$</span>
                  </p>
                  <p className="block text-secondary-500 sm:hidden">in US$</p>
                  <p className="hidden text-secondary-500 md:block">
                    (approximately)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center justify-center bg-primary-100 p-2 md:p-4">
              <h3 className="hidden font-bold md:block">$32,256.56</h3>
              <p className="block font-bold md:hidden">$32,256.56</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-row rounded-lg p-2 shadow-md md:p-4 lg:col-span-1">
          <p>Daily variation</p>
        </div>

        <div className="col-span-2 flex flex-row rounded-lg bg-white shadow-md lg:col-span-1">
          <div className="flex-1  p-2 md:p-4">
            <div className="flex flex-col">
              <label className="font-bold">NFT's NEWS</label>
              <small className="mb-3 mt-1 leading-4 text-secondary-500">
                New ElephantX NFT to be lauched!
              </small>
              <a
                href="#"
                className="flex flex-row items-center text-primary-500"
              >
                <span className="mr-1">Read more</span>
                <BsPlus />
              </a>
            </div>
          </div>
          <div className="flex-1 bg-[url('/images/elephant.webp')] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
}
