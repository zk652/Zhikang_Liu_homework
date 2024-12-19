import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
}
interface ProductsInfo {
  products: Product[];

  total: number;
  skip: number;
  limit: number;
}

export default function FetchProducts() {
  const [productsInfo, setProductsInfo] = useState<ProductsInfo>({
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        "https://dummyjson.com/products/search?q=phone"
      );
      const data = await response.json();
      setProductsInfo(data);
    };
    fetchProduct();
  }, []);

  const { products, total, skip, limit } = productsInfo;

  return (
    <div>
      <p>Total: {total}</p>
      <p>Skip: {skip}</p>
      <p>Limit: {limit}</p>
      {products.map((product) => {
        const { id, title, price } = product;
        return (
          <div key={id}>
            <p>Title: {title}</p>
            <p>Price: ${price}</p>
          </div>
        );
      })}
    </div>
  );
}
