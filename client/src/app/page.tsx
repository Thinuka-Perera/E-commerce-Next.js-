import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = async ({searchParams}:{searchParams: Promise<{category:string}>; }) => {

  const category = (await searchParams).category


  return (
    <div className="">
      <div className="relative aspect-[3/1] mt-2 mb-12 overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/featured.png"
          alt="Featured Product"
          fill
          className=" object-center transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>
      <ProductList category={category}/>
    </div>
  );
};

export default Homepage;
