import { StaticImageData } from "next/image";

import Container from "@components/Container";
import Chip from "@components/Chip";
import Navbar from "@components/navbar/Navbar";
import SignUp from "@components/buttons/Register";
import Carrousel from "@components/carrousel/Carrousel";

import Image from "next/image";
import hero from "../public/images/hero-bg.webp";

import boy from "../public/images/boy.webp";
import girl from "../public/images/girl.webp";
import woman from "../public/images/woman.webp";

const images: StaticImageData[] = [girl, boy, woman];

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <>
          <section id="hero-carrousel" className="md:py-15 py-14 xl:py-40">
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
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
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
              <div className="relative -mt-5 hidden flex-row md:flex">
                <div className="absolute right-0 h-full w-full">
                  <Carrousel
                    images={images}
                    options={{ align: "end", inViewThreshold: 0.2 }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="absolute bottom-0 left-0 -z-10 h-64">
            <Image
              className="static"
              alt="background image for first section"
              src={hero}
            />
          </section>
        </>
      </Container>
    </>
  );
}
