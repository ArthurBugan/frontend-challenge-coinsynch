import Image from "next/image";
import { StaticImageData } from "next/image";

import Container from "@components/Container";
import Chip from "@components/Chip";
import Navbar from "@components/navbar/Navbar";
import SignUp from "@components/buttons/Register";
import Carrousel from "@components/carrousel/Carrousel";
import Card from "@components/Card";

import shape from "../public/images/shape.svg";

import boy from "../public/images/boy.webp";
import girl from "../public/images/girl.webp";
import woman from "../public/images/woman.webp";

const images: StaticImageData[] = [girl, boy, woman];

export default function Home() {
  return (
    <>
      <Navbar />

      <>
        <section
          id="hero-carrousel"
          className="md:pt-15 relative pt-14 xl:pt-40"
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-24">
              <div className="flex flex-col items-center gap-y-7 md:items-start">
                <h1 className="hidden text-primary-500 lg:block">
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
          </Container>
        </section>
        <div className="left-0 -z-10 mt-10 w-screen">
          <Image
            className="w-screen"
            alt="background image for first section"
            src={shape}
          />
        </div>
        <section className="bg-hero-gradient">
          <Container>
            <div className="md:py-15 py-14 xl:pb-28 xl:pt-32">
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr]">
                <div className="order-2 flex flex-row gap-y-8 sm:grid sm:grid-rows-2 lg:order-1">
                  <div className="flex flex-row gap-4 sm:grid sm:grid-cols-[1fr,1fr,auto] sm:gap-8">
                    <Card
                      iconType="btc"
                      title="For your company"
                      subtitle="Crypto Solutions"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
                    />
                    <Card
                      iconType="solutions"
                      title="For your company"
                      subtitle="Crypto Solutions"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
                    />
                    <div className="sm:w-3 xl:w-7 2xl:w-14" />
                  </div>
                  <div className="flex flex-row sm:grid sm:grid-cols-[auto,1fr,1fr] sm:gap-8">
                    <div className="sm:w-3 xl:w-7 2xl:w-14" />
                    <Card
                      iconType="graph"
                      title="For your company"
                      subtitle="Crypto Solutions"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
                    />
                    <Card
                      iconType="computer"
                      title="For your company"
                      subtitle="Crypto Solutions"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
                    />
                  </div>
                </div>
                <div className="order-1 flex flex-col justify-center md:ml-8 md:px-10 lg:order-2 lg:w-10/12 lg:px-0">
                  <h5 className="mb-1 font-bold text-primary-500">
                    Lorem ipsum
                  </h5>
                  <h2 className="mb-4">Lorem ipsum</h2>
                  <p className="mb-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor
                  </p>
                  <div className="mb-10 hidden lg:mb-0 lg:block">
                    <SignUp className=" h-12 px-11" label="Sign up now" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </>
    </>
  );
}
