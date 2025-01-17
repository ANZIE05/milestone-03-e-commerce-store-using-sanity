import BestSellersPage from "./Components/BestSellers";
import BrandPage from "./Components/Brands";
import HeroSection from "./Components/Hero";


export default function Home() {
  return (
   <div>
    <HeroSection />
    <BrandPage />
    <BestSellersPage />

   </div>
  );
}
