import React from "react";
import ProductDetailUI from "../../Components/ProductDetailUI"; 
import { client } from "@/sanity/lib/client"; 

interface Product {
  ProductName: string;
  ProductPrice: string;
  ProductDescription: string;
  imageUrl: string;
  _id: string;
  slug: string;
  inventory: number;
}

const fetchProduct = async (slug: string): Promise<Product | null> => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    ProductName,
    ProductPrice,
    ProductDescription,
    inventory,
    "slug": slug.current,
    "imageUrl": ProductImage.asset->url,
    _id
  }`;

  try {
    const product = await client.fetch(query, { slug });
    console.log("Product fetched: ", product);
    return product;
  } catch (error) {
    console.error("Error fetching product: ", error);
    return null;
  }
};

export default async function ProductPage({ params }: { params: { slug: string } }) {
  console.log("Fetching Product for Slug:", params.slug); 
  const { slug } = params;
  const product = await fetchProduct(slug);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return <ProductDetailUI product={product} />;
}
