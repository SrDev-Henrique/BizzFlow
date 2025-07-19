import NavBar from "@/components/NavBar";
import About from "./(sections)/About";
import Career from "./(sections)/career";
import Footer from "./(sections)/footer";
import Hero from "./(sections)/Hero";
import { Product } from "./(sections)/Product";
import UseCases from "./(sections)/use-cases/Use-cases";

export default function Home() {
  return (
    <main className="w-full">
      <NavBar />
      <Hero />
      <Product />
      <About />
      <UseCases />
      <Career />
      <Footer />
    </main>
  );
}
