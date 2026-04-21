import Image from "next/image";

import ProductList from "@/components/ProductList";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  return (
    <div>
      <div className="relative aspect-3/1 mb-12">
        <Image src="/featured.png" alt="Produto em destaque" fill />
      </div>

      <ProductList category={category} />
    </div>
  );
};

export default Homepage;
