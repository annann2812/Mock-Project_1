import React, { Fragment, useEffect, useState } from "react";
import { Product } from "../../ApiServices/types";
import AppService from "../../ApiServices/AppService";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";


const ProductList: React.FC<Product> = (props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [gridProduct, setGridProduct] = useState<boolean>(true);
  const [counterNextPageMax, setCounterNextPageMax] = useState<number>(6);
  const [counterNextPageMin, setCounterNextPageMin] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AppService.getProducts();
        setProducts(response);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleChangeNextPage = () => {
    if (products.length && counterNextPageMax >= products.length) {
      setCounterNextPageMax(products.length);
      setCounterNextPageMin(products.length - 9);
    } else {
      setCounterNextPageMax((pre) => pre + 9);
      setCounterNextPageMin((pre) => pre + 9);
      setCurrentPage((pre) => pre + 1);
    }
  };
  const handleChangeListView = () => {
    setGridProduct(false);
  };
  const handleChangeGridView = () => {
    setGridProduct(true);
  };

  const sortOptions = [
    { name: "Price: Low to High", href: "#", current: true },
    { name: "Price: High to Low", href: "#", current: false },
  ];
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const handleChangePreviousPage = () => {
    setCounterNextPageMax((prevCount) => {
      return prevCount > 10 ? prevCount - 10 : prevCount;
    });
    setCounterNextPageMin((prevCount) =>
      prevCount !== 0 ? prevCount - 10 : prevCount
    );
    setCurrentPage(currentPage - 1);
  };
  return (
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-gray-200 pb-6 pt-8">
          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            
            <button
              onClick={handleChangeGridView}
              type="button"
              className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            >
              <span className="sr-only">View grid</span>
              <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6"
              onClick={handleChangeListView}
            >
              <span className="sr-only">View List</span>
              <FormatListBulletedIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="lg:col-span-3">
          <section className="text-gray-600 body-font">
            <div className="container py-12 mx-auto">
              <Grid container spacing={5} width="900px" margin="auto">
                {gridProduct ? (
                  <Fragment>
                    {products &&
                      products.map((product, index) => {
                        if (
                          (index <= counterNextPageMax &&
                            index > counterNextPageMin) ||
                          (index < counterNextPageMax &&
                            index >= counterNextPageMin)
                        ) {
                          return (
                            <Link
                              to={`/products/${product.id}`}
                              key={product.id}
                              className="lg:w-1/3 md:w-1/2 w-full border-[#76885B] text-center mb-4 cursor-pointer p-3"
                            >
                              <a className="capitialize block capitalize relative overflow-hidden">
                                <img
                                  alt={product.name}
                                  className="object-contain object-center w-full h-full block"
                                  src={product.image}
                                />
                              </a>
                              <div className="mt-4">
                                <h2 className="capitalize text-gray-500 capitalize title-font text-lg font-medium">
                                  {product.name}
                                </h2>
                                <p className="mt-1 text-md my-2 font-semibold">
                                  $ {product.price}
                                </p>
                                <button className="inline-flex text-center w-[60%] justify-center mt-2 text-white bg-[#76885B] border-0 py-2 px-3  focus:outline-none hover:bg-opacity-90 rounded">
                                  View Details
                                </button>
                              </div>
                            </Link>
                          );
                        }
                      })}
                    <Grid item xs={12} textAlign="right">
                      <button
                        className="bg-[#76885B] mr-2 p-2 rounded-xl text-light hover:bg-opacity-70"
                        onClick={handleChangePreviousPage}
                      >
                        <BsCaretLeftFill />
                      </button>
                      {/* <span className="mx-2 text-xl">{currentPage}</span> */}
                      <button
                        className="bg-[#76885B] p-2 rounded-xl text-light hover:bg-opacity-70"
                        onClick={handleChangeNextPage}
                      >
                        <BsCaretRightFill />
                      </button>
                    </Grid>
                  </Fragment>
                ) : (
                  <Fragment>
                    {products &&
                      products.map((product, index) => {
                        if (
                          (index <= counterNextPageMax &&
                            index > counterNextPageMin) ||
                          (index < counterNextPageMax &&
                            index >= counterNextPageMin)
                        ) {
                          return (
                            <section className="text-gray-600 body-font overflow-hidden">
                              <div className="container px-5 py-10 mx-auto border-b border-gray-200">
                                <div className="-my-8 divide-y-2 divide-gray-100">
                                  <div className="py-8 flex items-center gap-12">
                                    <div className="block capitalize relative h-48 rounded overflow-hidden">
                                      <img
                                        alt={product.name}
                                        className="object-contain w-[200px] object-center block"
                                        src={product.image}
                                      />
                                    </div>
                                    <div className="md:flex-grow">
                                      <h5 className="uppercase text-gray-300 text-xl text-gray-900 title-font mb-2">
                                        {product.category}
                                      </h5>
                                      <h5 className="capitalize text-xl font-medium text-gray-900 title-font mb-2">
                                        {product.name}
                                      </h5>
                                      <p className="text-md font-medium text-gray-900 title-font mb-2">
                                        {product.description.length > 90
                                          ? product.description.substring(
                                              0,
                                              50
                                            ) + "..."
                                          : product.description}
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
                        }
                      })}
                    <Grid item xs={12} textAlign="right">
                      <button
                        className="bg-[#76885B] mr-2 p-2 rounded-xl text-light hover:bg-opacity-70"
                        onClick={handleChangePreviousPage}
                      >
                        <BsCaretLeftFill />
                      </button>
                      {/* <span className="mx-2 text-xl">{currentPage}</span> */}
                      <button
                        className="bg-[#76885B] p-2 rounded-xl text-light hover:bg-opacity-70"
                        onClick={handleChangeNextPage}
                      >
                        <BsCaretRightFill />
                      </button>
                    </Grid>
                  </Fragment>
                )}
              </Grid>
            </div>
          </section>
        </div>
      </main>
            
  );
};

export default ProductList;
