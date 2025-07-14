import About from "./(sections)/About";
import Hero from "./(sections)/Hero";
import { Product } from "./(sections)/Product";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Product />
      <About />
    </main>
  );
}
