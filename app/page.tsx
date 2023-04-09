import Navbar from "@components/navbar/Navbar";
import Container from "@components/Container";
import ClientOnly from "@components/ClientOnly";

import ModalProvider from "@provider/ModalProvider";

export default function Home() {
  return (
    <>
      <ClientOnly>
        <ModalProvider />
      </ClientOnly>

      <Navbar />
      <main>
        <Container>
          <div className="md:py-15 py-14 xl:py-40">
            <p>Hello world</p>
          </div>
        </Container>
      </main>
    </>
  );
}
