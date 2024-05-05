import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import Grid from "@mui/material/Grid";

const ProductList = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const slicedProducts = products.slice(9, 15);

  return (
    <div className="mx-auto pb-24 pt-12 border border-t-gray">
      <h3 className="text-3xl uppercase font-medium text-center">
        Some popular items...
      </h3>
      <div className="col-span-3">
        <section className="text-gray-600 body-font">
          <div className="mx-auto">
            <Grid container spacing={5} width="80%" margin="auto">
              <Fragment>
                {slicedProducts.map((product, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full border-primary-01 text-center mb-2 cursor-pointer p-3 block"
                    >
                      <div className="capitialize block capitalize relative overflow-hidden">
                        <img
                          alt={product.name}
                          className="object-contain object-center w-full h-full block"
                          src={product.images_list[0]}
                        />
                      </div>
                      <div className="mt-3">
                        <p className="capitalize mb-2 text-gray-700 capitalize title-font text-lg font-thin">
                          {product.branch}
                        </p>
                        <h2 className="capitalize text-gray-900 capitalize title-font text-lg font-medium">
                          {product.name}
                        </h2>
                        <p className="mt-1 text-md my-2 font-semibold">
                          $ {product.price}
                        </p>
                        <button className="inline-flex text-center w-[60%] justify-center mt-2 text-white bg-primary-01 border-0 py-2 px-3  focus:outline-none hover:bg-opacity-90 rounded">
                          View Details
                        </button>
                      </div>
                    </Link>
                  </Grid>
                ))}
              </Fragment>
            </Grid>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductList;
