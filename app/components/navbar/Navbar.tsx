import Container from "@components/Container";

import Logo from "./Logo";
import MenuItem from "./MenuItem";
import PopMenu from "./PopMenu";
import CoinCarrousel from "./CoinCarrousel";

const Navbar: React.FC = ({}) => {
  return (
    <header className="shadow-menu lg:shadow-none">
      <nav>
        <Container>
          <div className="my-5 flex items-center justify-between lg:mb-6 lg:mt-5">
            <Logo />

            <div className="z-10 flex md:order-3">
              <div className="hidden md:block">
                <p>sign up</p>
              </div>
              <div className="ml-6 hidden md:block">
                <p>sign in</p>
              </div>
            </div>

            <PopMenu>
              <div className="fixed right-4 z-10 grid grid-cols-1 rounded-md bg-white p-5 shadow-md">
                <div className="my-3">
                  <MenuItem label="About Us" href="#about-us" />
                </div>
                <div className="my-3">
                  <MenuItem label="Top Cryptos" href="#top-cryptos" />
                </div>
              </div>
            </PopMenu>

            <div className="mr-auto hidden items-center justify-between md:order-1 md:block">
              <ul className="flex">
                <li className="ml-10">
                  <MenuItem label="About Us" href="#about-us" />
                </li>
                <li className="ml-10">
                  <MenuItem label="Top Cryptos" href="#top-cryptos" />
                </li>
              </ul>
            </div>

            <div className="ml-auto mr-10 hidden w-72 overflow-hidden md:order-2 lg:block xl:mr-20 xl:w-96">
              <CoinCarrousel />
            </div>
          </div>
        </Container>
      </nav>

      <div className="flex items-center justify-center border-t-2 border-secondary-200 py-2 lg:hidden">
        <Container>
          <div className="mx-auto overflow-hidden md:w-96">
            <CoinCarrousel />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
