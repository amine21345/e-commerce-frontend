import BrowseSection from "@/components/sections/BrowseSection";
import HeroSection from "@/components/sections/HeroSection";
import NewArrivals from "@/components/sections/NewArrivals";
import { fetchProducts } from "@/utils";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div>
      <HeroSection />
      <NewArrivals products={products} title={"NEW ARRIVALS"} />
      <NewArrivals products={products} title={"TOP SELLING"} />
      <BrowseSection />
    </div>
  );
}
