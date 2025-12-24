import Container from "./components/Container";
import Hero from "./components/Hero";
import HomeCollection from "./components/HomeCollection";
import InteractiveHeadline from "./components/InteractiveHeadline";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Container>
      <InteractiveHeadline />
      <Navbar />
      <Hero />
    </Container>
  );
}
