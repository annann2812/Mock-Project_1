import React, { Fragment, useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
const SearchResult = () => {
  const { searchProducts } = useSelector((state: RootState) => state.loopStore);
  const [counterNextPageMax, setCounterNextPageMax] = useState<number>(6);
  const [counterNextPageMin, setCounterNextPageMin] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  console.log(searchProducts);
  const handleChangePreviousPage = () => {
    setCounterNextPageMax((prevCount) => {
      return prevCount > 10 ? prevCount - 10 : prevCount;
    });
    setCounterNextPageMin((prevCount) =>
      prevCount !== 0 ? prevCount - 10 : prevCount
    );
    setCurrentPage(currentPage - 1);
  };
  const handleChangeNextPage = () => {
    if (searchProducts.length && counterNextPageMax >= searchProducts.length) {
      setCounterNextPageMax(searchProducts.length);
      setCounterNextPageMin(searchProducts.length - 9);
    } else {
      setCounterNextPageMax((pre) => pre + 9);
      setCounterNextPageMin((pre) => pre + 9);
      setCurrentPage((pre) => pre + 1);
    }
  };
  return (
    <Fragment>
      <Navbar />
      <div className="px-3 py-5 flex flex-col items-center">
        <h3 className="uppercase text-2xl font-medium">Search result</h3>
        {searchProducts.length === 0 ? (
          <p className="mt-6 mb-12 text-[#FC6736]">
            OMG! No results for your search...
          </p>
        ) : (
          // PART TO ADD RESULTS IF POSSIBLE
          <Fragment>
            {searchProducts &&
              searchProducts.map((product, index) => {
                return (
                  <section
                    key={index}
                    className="text-gray-600 body-font overflow-hidden"
                  >
                    <div className="container px-5 py-10 mx-auto border-b border-gray-200">
                      <div className="-my-8 divide-y-2 divide-gray-100">
                        <div className="py-8 flex items-center gap-12">
                          <div className="block capitalize relative h-48 rounded overflow-hidden">
                            <img
                              alt={product.name}
                              className="object-contain w-[200px] object-bottom block"
                              src={product.images_list[0]}
                            />
                          </div>
                          <div className="md:flex-grow">
                            <h5 className="uppercase text-gray-300 text-xl text-gray-900 title-font mb-2">
                              {product.decription}
                            </h5>
                            <h5 className="capitalize text-xl font-medium text-gray-900 title-font mb-2">
                              {product.name}
                            </h5>
                            <p className="text-md font-medium text-gray-900 title-font mb-2">
                              {product.decription.length > 90
                                ? product.decription.substring(0, 50) + "..."
                                : product.decription}
                            </p>
                            <p className="text-xl font-medium text-[#76885B] leading-relaxed">
                              $ {product.price}
                            </p>
                            <Link
                              to={`/products/${product.id}`}
                              className="inline-flex text-center w-[60%] justify-center mt-2 text-white bg-[#76885B] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default SearchResult;
