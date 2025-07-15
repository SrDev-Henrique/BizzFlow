import About from "./(sections)/About";
import Hero from "./(sections)/Hero";
import { Product } from "./(sections)/Product";
import UseCases from "./(sections)/use-cases/Use-cases";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Product />
      <About />
      <UseCases />
    </main>
  );
}
