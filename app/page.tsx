import Container from "@components/Container";
import Navbar from "@components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <div className="md:py-15 py-14 xl:py-40">
          <p>Hello world</p>
        </div>
      </Container>
    </>
  );
}
