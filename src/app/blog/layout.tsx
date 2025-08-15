import NavBar from "./components/NavBar/NavBar";
import Footer from "@/components/footer";
import { GlobalProvider } from "@/context/GlobalContext";
import FilteredPosts from "./components/filtered-posts";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <div className="relative">
        <NavBar />
        <FilteredPosts />
        {children}
        <Footer />
      </div>
    </GlobalProvider>
  );
}
