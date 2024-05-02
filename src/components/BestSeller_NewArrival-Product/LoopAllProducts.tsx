import React, { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Squares2X2Icon } from "@heroicons/react/20/solid";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Product } from "../../ApiServices/types";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
//
import ToggleButton from "@mui/material/ToggleButton";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
interface FilterProps {
  branch: string[];
  minPrice: number;
  maxPrice: number;
}
const sortOptions = [
  { name: "Price: Low to High", href: "#", current: true, value: "asc" },
  { name: "Price: High to Low", href: "#", current: false, value: "desc" },
  { name: "Name: A to Z", href: "#", current: false, value: "name-asc" },
  { name: "Name: Z to A", href: "#", current: false, value: "name-desc" },
];

const LoopAllProducts: React.FC<Product> = (props) => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const [gridProduct, setGridProduct] = useState<boolean>(true);
  const [counterNextPageMax, setCounterNextPageMax] = useState<number>(8);
  const [counterNextPageMin, setCounterNextPageMin] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [sortOrder, setSortOrder] = useState("");

  const handleSortTypeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSortOrder(event.target.value);
  };

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

  const handleChangePreviousPage = () => {
    setCounterNextPageMax((prevCount) => {
      return prevCount > 10 ? prevCount - 10 : prevCount;
    });
    setCounterNextPageMin((prevCount) =>
      prevCount !== 0 ? prevCount - 10 : prevCount
    );
    setCurrentPage(currentPage - 9);
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  // new Hieu

  const [filter, setFilter] = useState<FilterProps>({
    branch: [],
    minPrice: 0,
    maxPrice: 0,
  });

  //
  const [value, setValue] = React.useState<number[]>([0, 1000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  console.log(value);
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const handlePrice = () => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      minPrice: value[0] < value[1] ? value[0] : value[1],
      maxPrice: value[0] > value[1] ? value[0] : value[1],
    }));
  };
  //
  const handleAddFilter = (value: string) => {
    const newValue = value.trim().replace(/\s+/g, "");
    if (!filter.branch.includes(newValue)) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        branch: [...prevFilter.branch, newValue],
      }));
    }
  };
  const handleDelFilter = (value: string) => {
    const valueToRemove = value.trim().replace(/\s+/g, "");
    if (filter.branch.includes(valueToRemove)) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        branch: prevFilter.branch.filter((item) => item !== valueToRemove),
      }));
    }
  };

  //   lọc
  const [productFilter, setProductFilter] = useState<Product[]>(products);
  const FilterProducts = (filter: FilterProps) => {
    const filtered = products.filter((product: Product) => {
      return (
        (!filter.branch.length || filter.branch.includes(product.branch)) &&
        (!filter.minPrice || filter.minPrice <= product.price) &&
        (!filter.maxPrice || filter.maxPrice >= product.price)
      );
    });
    return filtered;
  };
  useEffect(() => {
    const filterData = FilterProducts(filter);
    setProductFilter(filterData);
  }, [filter]);

  console.log(products);
  console.log(productFilter);
  const [selectedCasio, setSelectedCasio] = React.useState(false);
  const [selectedRolex, setSelectedRolex] = React.useState(false);
  const [selectedApple, setSelectedApple] = React.useState(false);
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-baseline justify-between border-b border-gray-200 py-6">
        <h1 className="text-4xl text-[#76885B] font-bold tracking-tight">
          Loop's Watches
        </h1>

        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <label
                htmlFor="sort-price"
                className="text-lg mx-2 font-medium leading-6 inline"
              >
                Sort:
              </label>
              <select
                id="sort-price"
                value={sortOrder}
                onChange={handleSortTypeChange}
                className="px-3 border"
              >
                {sortOptions.map((option) => (
                  <option
                    className="text-sm"
                    key={option.value}
                    value={option.value}
                  >
                    {option.name}
                  </option>
                ))}
              </select>
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
                              ? "font-thin text-gray-900"
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

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <h2 id="products-heading" className="sr-only ">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 sm:px-10 lg:px-0">
          <div className="lg:block">
            <h3 className="sr-only">Categories</h3>
            <Disclosure as="div" className="border-b border-gray-200 py-6 ">
              <div className="border-b border-gray-200 py-6">
                <h3 className="my-2 flow-root">
                  <span className="font-medium text-[20px] text-gray-900 uppercase">
                    Branch
                  </span>
                </h3>
                <div className="pt-6" id="filter-section-0">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="rolexCategory"
                        value="checked"
                        checked={selectedRolex}
                        onClick={() => {
                          if (!selectedRolex) {
                            handleAddFilter("Rolex");
                          } else {
                            handleDelFilter("Rolex");
                            setSelectedRolex(false);
                          }
                        }}
                        onChange={() => {
                          setSelectedRolex(!selectedRolex);
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="rolexCategory"
                        className="ml-3 text-sm text-gray-600"
                      >
                        Rolex
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        value="check"
                        id="casioCategory"
                        checked={selectedCasio}
                        onClick={() => {
                          if (!selectedCasio) {
                            handleAddFilter("Casio");
                          } else {
                            handleDelFilter("Casio");
                            setSelectedCasio(false);
                          }
                        }}
                        onChange={() => {
                          setSelectedCasio(!selectedCasio);
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="casioCategory"
                        className="ml-3 text-sm text-gray-600"
                      >
                        Casio
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="appleCategory"
                        value="check"
                        checked={selectedApple}
                        onClick={() => {
                          if (!selectedApple) {
                            handleAddFilter("Apple");
                          } else {
                            handleDelFilter("Apple");
                            setSelectedApple(false);
                          }
                        }}
                        onChange={() => {
                          setSelectedApple(!selectedApple);
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="appleCategory"
                        className="ml-3 text-sm text-gray-600"
                      >
                        Apple
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="my-3 flow-root">
                  <span className="font-medium text-[20px] text-gray-900 uppercase">
                    Price
                  </span>
                </h3>
                <Box sx={{ width: "100%" }}>
                  <Slider
                    sx={{
                      height: 10,
                      color: "#76885B",
                      width: "100%",
                      "& .MuiSlider-thumb": {
                        backgroundColor: "orangered",
                      },
                      "& .MuiSlider-rail": {
                        backgroundColor: "lightgray",
                      },
                      "& .MuiSlider-track": {
                        backgroundColor: "",
                      },
                    }}
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0} 
                    max={1000} 
                    getAriaValueText={valuetext}
                  />
                </Box>
                <p className="text-gray-500 ">
                  The price is in ${value[0] < value[1] ? value[0] : value[1]} - $
                  {value[0] > value[1] ? value[0] : value[1]}{" "}
                </p>
                <button
                  className="bg-[#76885B] text-white px-3 text-[14px] font-semibold py-1 my-2 rounded-lg"
                  onClick={handlePrice}
                >
                  Filter
                </button>

              </div>
            </Disclosure>
          </div>
          <div className="lg:col-span-3 sm:col-span-2">
            <section className="text-gray-600 body-font">
              <div className="container py-10 mx-auto">
                <Grid container spacing={4} width="100%" margin="auto">
                  {gridProduct ? (
                    <Fragment>
                      {productFilter &&
                        productFilter
                          .slice()
                          .sort((a, b) => {
                            if (sortOrder === "asc") {
                              return a.price - b.price;
                            } else if (sortOrder === "desc") {
                              return b.price - a.price;
                            } else if (sortOrder.startsWith("name")) {
                              return sortOrder === "name-asc"
                                ? a.name.localeCompare(b.name)
                                : b.name.localeCompare(a.name);
                            } else {
                              return 0;
                            }
                          })
                          .map((product: Product, index: number) => {
                            if (
                              (index <= counterNextPageMax &&
                                index > counterNextPageMin) ||
                              (index < counterNextPageMax &&
                                index >= counterNextPageMin)
                            ) {
                              return (
                                <Grid xs={12} sm={6} md={4} key={index}>
                                  <Link
                                    to={`/products/${product.id}`}
                                    className="w-full border-[#76885B] text-center mb-2 cursor-pointer p-3 block"
                                  >
                                    <div className="capitialize relative">
                                      <img
                                        alt={product.name}
                                        className="object-contain object-center w-full h-full"
                                        src={product.images_list[0]}
                                      />
                                      {product.discount &&
                                        product.discount.is_discount && (
                                          <div className="absolute m-2 top-0 left-0 bg-[#FC6736] rounded-lg text-[12px] text-white px-1 py-1">
                                            {product.discount.price_discount}
                                          </div>
                                        )}
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
                                      <button className="inline-flex text-center w-[60%] justify-center mt-2 text-white bg-[#76885B] border-0 py-2 px-3  focus:outline-none hover:bg-opacity-90 rounded">
                                        View Details
                                      </button>
                                    </div>
                                  </Link>
                                </Grid>
                              );
                            }
                          })}
                      <Grid item xs={12} textAlign="right">
                        <button
                          className="bg-[#76885B] mr-2 p-2 rounded-xl text-white hover:bg-opacity-70"
                          onClick={handleChangePreviousPage}
                        >
                          <BsCaretLeftFill />
                        </button>
                        <button
                          className="bg-[#76885B] p-2 rounded-xl text-white hover:bg-opacity-70"
                          onClick={handleChangeNextPage}
                        >
                          <BsCaretRightFill />
                        </button>
                      </Grid>
                    </Fragment>
                  ) : (
                    <Fragment>
                      {productFilter &&
                        productFilter
                          .slice()
                          .sort((a, b) => {
                            if (sortOrder === "asc") {
                              return a.price - b.price;
                            } else if (sortOrder === "desc") {
                              return b.price - a.price;
                            } else if (sortOrder.startsWith("name")) {
                              return sortOrder === "name-asc"
                                ? a.name.localeCompare(b.name)
                                : b.name.localeCompare(a.name);
                            } else {
                              return 0;
                            }
                          })
                          .map((product, index) => {
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
                                            src={product.images_list[0]}
                                          />
                                        </div>
                                        <div className="md:flex-grow">
                                          <h5 className="capitalize font-thin text-xl text-gray-900 title-font mb-2">
                                            {product.branch}
                                          </h5>
                                          <h5 className="capitalize text-xl font-medium text-gray-900 title-font mb-2">
                                            {product.name}
                                          </h5>
                                          <p className="text-md font-medium text-gray-900 title-font mb-2">
                                            {product.decription.length > 90
                                              ? product.decription.substring(
                                                  0,
                                                  90
                                                ) + "..."
                                              : product.decription}
                                          </p>
                                          <p className="text-xl font-medium text-[#76885B] leading-relaxed">
                                            $ {product.price}
                                          </p>
                                          <Link
                                            to={`/products/${product.id}`}
                                            className="inline-flex text-center w-[40%] justify-center mt-2 text-white font-medium bg-[#76885B] border-0 py-2 px-6 focus:outline-none hover:bg-[#FC6736] hover:text-white rounded"
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
        </div>
      </section>
    </main>
  );
};

export default LoopAllProducts;
