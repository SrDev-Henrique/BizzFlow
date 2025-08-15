import NavBar from "./components/NavBar/NavBar";
import Footer from "@/components/footer";
import { GlobalProvider } from "@/context/GlobalContext";
import FilteredPosts from "./components/filtered-posts";
import BlockableContainer from "./components/blockable-container";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <BlockableContainer>
        <NavBar />
        <FilteredPosts />
        {children}
        <Footer />
      </BlockableContainer>
    </GlobalProvider>
  );
}
