import React, { Fragment, useEffect, useState } from "react";
import ProductList from "./StoreContain";
import { ProductInfor } from "./StoreContain";
import "./Store.Module.css";

export function Store() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="heading">
        <h2>
          <strong>OUR STORES</strong>
        </h2>
        <p>Home</p>
      </div>
      <div className="contain">
        <div className="main-section">
          {products.length > 0 &&
            products.map((product: ProductInfor) => (
              <div className="main-con">
                <ProductList
                  image={product.image}
                  title={product.title}
                  description={product.description}
                />
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Store;
