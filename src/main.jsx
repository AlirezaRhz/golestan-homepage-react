import { createRoot } from "react-dom/client";
import "./tailwind.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import HomepageProduct from "./components/HomepageProduct/HomepageProduct";
import { products } from "./data/products";
import News from "./components/News/News";
import HomepageVideos from "./components/HomepageVideos/HomepageVideos";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";

createRoot(document.getElementById("root")).render(
  <>
    <header className="max-w-[1600px] mx-auto sticky top-0 z-50">
      <Navbar />
    </header>
    <main className="max-w-[1600px] bg-white mx-auto shadow-lg">
      <HeroSection />

      {products.map((product) => (
        <HomepageProduct key={product.id} {...product} />
      ))}

      <News />

      <HomepageVideos />

      <Social />
    </main>

    <footer className="max-w-[1600px] mx-auto shadow-lg">
      <Footer />
    </footer>
  </>,
);
