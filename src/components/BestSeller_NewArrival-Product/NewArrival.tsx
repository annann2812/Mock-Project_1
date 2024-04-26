import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AppService from "../../ApiServices/AppService";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { ProductsSaleProps } from "../../../public/type";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Product } from "../../ApiServices/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
//
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import ClearIcon from "@mui/icons-material/Clear";
interface FilterProps {
  branch: string[];
  minPrice: number;
  maxPrice: number;
}
const sortOptions = [
  { name: "Price: Low to High", href: "#", current: true, value: "asc" },
  { name: "Price: High to Low", href: "#", current: false, value: "desc" },
];

const NewArrival: React.FC<Product> = (props) => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const [gridProduct, setGridProduct] = useState<boolean>(true);
  const [counterNextPageMax, setCounterNextPageMax] = useState<number>(6);
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
    setCurrentPage(currentPage - 1);
  };

  const filters = [
    {
      id: "category",
      name: "Category",
      options: [
        { value: "new-arrivals", label: "New Arrivals", checked: false },
        { value: "sale", label: "Sale", checked: false },
        { value: "travel", label: "Travel", checked: true },
        { value: "organization", label: "Organization", checked: false },
        { value: "accessories", label: "Accessories", checked: false },
      ],
    },
    {
      id: "color",
      name: "Color",
      options: [
        { value: "new-arrivals", label: "New Arrivals", checked: false },
        { value: "sale", label: "Sale", checked: false },
        { value: "travel", label: "Travel", checked: true },
        { value: "organization", label: "Organization", checked: false },
        { value: "accessories", label: "Accessories", checked: false },
      ],
    },
    {
      id: "price",
      name: "Price",
      options: [
        { value: "new-arrivals", label: "New Arrivals", checked: false },
        { value: "sale", label: "Sale", checked: false },
        { value: "travel", label: "Travel", checked: true },
        { value: "organization", label: "Organization", checked: false },
        { value: "accessories", label: "Accessories", checked: false },
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { value: "white", label: "White", checked: false },
        { value: "beige", label: "Beige", checked: false },
        { value: "blue", label: "Blue", checked: true },
        { value: "brown", label: "Brown", checked: false },
        { value: "green", label: "Green", checked: false },
        { value: "purple", label: "Purple", checked: false },
      ],
    },
  ];

  function handleItemPerPageChange(itemsPerPage: number): void {
    throw new Error("Function not implemented.");
  }

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
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
        <h1 className="text-4xl text-[#76885B] font-bold tracking-tight">
          Loop's Watches
        </h1>

        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <label
                htmlFor="sort-price"
                className="text-sm font-medium leading-6 inline"
              >
                Sort:
              </label>
              <select
                id="sort-price"
                value={sortOrder}
                onChange={handleSortTypeChange}
              >
                <option value="">Sort by price</option>
                <option value="asc">Price: Low to hight</option>
                <option value="desc">Price: Hight to low </option>
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

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <div className="hidden lg:block">
            <h3 className="sr-only">Categories</h3>
            <Disclosure as="div" className="border-b border-gray-200 py-6">
              <h3 className="-my-3 flow-root mb-5">
                <h2 id="products-heading" className="">
                  Branch
                </h2>
                <ToggleButton
                  value="check"
                  selected={selectedCasio}
                  onClick={() => {
                    !selectedCasio
                      ? handleAddFilter("Casio")
                      : handleDelFilter("Casio");
                  }}
                  onChange={() => {
                    setSelectedCasio(!selectedCasio);
                  }}
                  className="my-2"
                  sx={{
                    // Kiểu CSS cho trạng thái "không chọn"
                    backgroundColor: "lightgrey",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "grey",
                      color: "white",
                    },
                    // Kiểu CSS cho trạng thái "chọn"
                    "&.Mui-selected": {
                      backgroundColor: "grey",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "lightgrey",
                        color: "black",
                      },
                    },
                  }}
                >
                  Casio{" "}
                  <span
                    className={
                      !selectedCasio
                        ? "flex items-center justify-between invisible "
                        : "flex items-center justify-between visible"
                    }
                  >
                    <ClearIcon style={{ fontSize: "20px" }} />
                  </span>
                </ToggleButton>
                <hr />
                <ToggleButton
                  value="check"
                  selected={selectedRolex}
                  onClick={() => {
                    !selectedRolex
                      ? handleAddFilter("Rolex")
                      : handleDelFilter("Rolex");
                  }}
                  onChange={() => {
                    setSelectedRolex(!selectedRolex);
                  }}
                  className="my-2"
                  sx={{
                    // Kiểu CSS cho trạng thái "không chọn"
                    backgroundColor: "lightgrey",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "grey",
                      color: "white",
                    },
                    // Kiểu CSS cho trạng thái "chọn"
                    "&.Mui-selected": {
                      backgroundColor: "grey",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "lightgrey",
                        color: "black",
                      },
                    },
                  }}
                >
                  Rolex{" "}
                  <span
                    className={
                      !selectedRolex
                        ? "flex items-center justify-between invisible "
                        : "flex items-center justify-between visible"
                    }
                  >
                    <ClearIcon style={{ fontSize: "20px" }} />
                  </span>
                </ToggleButton>
                <hr />
                <ToggleButton
                  value="check"
                  selected={selectedApple}
                  onClick={() => {
                    !selectedApple
                      ? handleAddFilter("Apple")
                      : handleDelFilter("Apple");
                  }}
                  onChange={() => {
                    setSelectedApple(!selectedApple);
                  }}
                  className="my-1 "
                  sx={{
                    // Kiểu CSS cho trạng thái "không chọn"
                    backgroundColor: "lightgrey",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "grey",
                      color: "white",
                    },

                    // Kiểu CSS cho trạng thái "chọn"
                    "&.Mui-selected": {
                      backgroundColor: "grey",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "lightgrey",
                        color: "black",
                      },
                    },
                  }}
                >
                  Apple{" "}
                  <span
                    className={
                      !selectedApple
                        ? "flex items-center justify-between invisible "
                        : "flex items-center justify-between visible"
                    }
                  >
                    <ClearIcon style={{ fontSize: "20px" }} />
                  </span>
                </ToggleButton>
              </h3>

              <h3 className="-my-3 flow-root">
                <h2 id="products-heading" className="">
                  Price
                </h2>
                <Box sx={{ width: 300 }}>
                  <Slider
                    sx={{
                      width: 300, // Chiều rộng của thanh trượt
                      "& .MuiSlider-thumb": {
                        backgroundColor: "orangered", // Màu của nút trượt
                      },
                      "& .MuiSlider-rail": {
                        backgroundColor: "lightgray", // Màu của đường dẫn
                      },
                      "& .MuiSlider-track": {
                        backgroundColor: "", // Màu của vùng đã chọn
                      },
                    }}
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0} // Đặt giá trị tối thiểu của thanh trượt
                    max={1000} // Đặt giá trị tối đa của thanh trượt
                    getAriaValueText={valuetext}
                  />
                </Box>
                {/* css lại button */}
                <button className="btn btn-dark" onClick={handlePrice}>
                  Filter ${value[0] < value[1] ? value[0] : value[1]} - $
                  {value[0] > value[1] ? value[0] : value[1]}
                </button>
              </h3>
            </Disclosure>
            {/* {filters.map((section, index) => (
              <Disclosure
                as="div"
                key={index}
                defaultOpen={index === 0}
                className="border-b border-gray-200 py-6"
              >
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              defaultChecked={option.checked}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))} */}
          </div>
          <div className="lg:col-span-3">
            <section className="text-gray-600 body-font">
              <div className="container py-12 mx-auto">
                <Grid container spacing={5} width="900px" margin="auto">
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
                                <Link
                                  to={`/products/${product.id}`}
                                  key={product.id}
                                  className="lg:w-1/3 md:w-1/2 w-full border-[#76885B] text-center mb-4 cursor-pointer p-3"
                                >
                                  <a className="capitialize block capitalize relative overflow-hidden">
                                    <img
                                      alt={product.name}
                                      className="object-contain object-center w-full h-full block"
                                      src={product.images_list[0]}
                                    />
                                  </a>
                                  <div
                                    className="mt-4"
                                    // onChange={() => handleSortTypeChange}
                                  >
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
                      {productFilter &&
                        productFilter
                          .slice()
                          .sort((a, b) => {
                            if (sortOrder === "asc") {
                              return a.price - b.price;
                            } else if (sortOrder === "desc") {
                              return b.price - a.price;
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
                                          <h5 className="uppercase text-gray-300 text-xl text-gray-900 title-font mb-2">
                                            {product.decription}
                                          </h5>
                                          <h5 className="capitalize text-xl font-medium text-gray-900 title-font mb-2">
                                            {product.name}
                                          </h5>
                                          <p className="text-md font-medium text-gray-900 title-font mb-2">
                                            {product.decription.length > 90
                                              ? product.decription.substring(
                                                  0,
                                                  50
                                                ) + "..."
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

export default NewArrival;
