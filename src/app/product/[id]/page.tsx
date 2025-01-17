// pages/product/[id].tsx (Server Component)
import { client } from "@/sanity/lib/client";
import ProductDetailUI from "@/app/Components/ProductDetailUI";

interface Product {
  ProductName: string;
  ProductPrice: string;
  ProductDescription: string;
  imageUrl: string;
  _id: string;
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch product data from Sanity
  const product: Product | null = await client.fetch(
    `*[_type == "post" && _id == $id][0] {
      ProductName,
      ProductPrice,
      ProductDescription,
      "imageUrl": ProductImage.asset->url,
      _id
    }`,
    { id }
  );

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  // Pass the fetched product data to the client-side UI
  return <ProductDetailUI product={product} />;
}
