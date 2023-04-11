import Container from "@components/Container";
import Chip from "@components/Chip";
import Navbar from "@components/navbar/Navbar";
import SignUp from "@components/buttons/Register";

import Image from "next/image";
import hero from "../public/images/hero-bg.webp";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <section className="md:py-15 py-14 xl:py-40">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-24">
            <div className="flex flex-col items-center gap-y-7 md:items-start">
              <h1 className="hidden px-2 text-primary-500 lg:block">
                Lorem ipsum dolor sit amet, consectetur
              </h1>
              <h3 className="hidden text-primary-500 md:block lg:hidden">
                Lorem ipsum dolor sit amet, consectetur
              </h3>
              <h5 className="px-2 text-center font-bold text-primary-500 md:hidden">
                Lorem ipsum dolor sit amet, consectetur
              </h5>
              <h5 className="px-2 text-center text-base md:px-0 md:text-left md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </h5>
              <SignUp
                label="Sign Up Now"
                className="h-10 px-16 uppercase"
                icon="BsArrowRightShort"
              />
              <div className="flex flex-row gap-x-4 md:mt-3 md:gap-x-6 lg:mt-12 lg:gap-x-8">
                <Chip title="Cryptos" />
                <Chip title="NFTs" />
                <Chip title="Games " />
              </div>
            </div>
            <div className="hidden md:block">outro texto</div>
          </div>

          <div className="absolute bottom-0 left-0 -z-10 h-64">
            <Image
              alt="background image for first section"
              className="h-full"
              src={hero}
            />
          </div>
        </section>
      </Container>
    </>
  );
}
