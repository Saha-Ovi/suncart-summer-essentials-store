import Banner from "@/components/Banner.jsx/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/Product/Product";
import SummerCareTips from "@/components/SummerCareTips/SummerCareTips";
import TopBrands from "@/components/TopBrands/TopBrands";


export default function Home() {
  return (
    <div>
      <Banner/>
      <Product/>
      <SummerCareTips/>
      <TopBrands/>
    </div>
  );
}
