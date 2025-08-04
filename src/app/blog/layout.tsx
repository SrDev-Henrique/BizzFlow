import NavBar from "./components/NavBar/NavBar";
import Footer from "@/components/footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
