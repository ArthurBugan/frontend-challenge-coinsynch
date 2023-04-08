import Navbar from "@components/navbar/Navbar";
import Container from "@components/Container";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <div>
            <p>Hello world</p>
          </div>
        </Container>
      </main>
    </>
  );
}
