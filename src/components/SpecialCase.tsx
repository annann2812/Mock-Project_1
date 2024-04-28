import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../Redux/store";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";

const SpecialCase = () => {
  const products = useSelector((state: RootState) => state.loopStore.products);
  return (
    <div className="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
      <Link to="/cart">
        <div className="bg-primary-01 w-16 h-[70px] rounded-md flex flex-col gap-1 text-white justify-center items-center group cursor-pointer overflow-hidden">
          <div className="flex justify-center items-center relative">
            <ShoppingBagIcon className="text-2xl translate-x-0 group-hover:translate-x-24 h-6 w-6 transition-transform duration-500" />
            <ShoppingBagIcon className="text-2xl -translate-x-24 absolute group-hover:translate-x-0 transition-all duration-500" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Buy Now</p>
          {products.length > 0 && (
            <p className="absolute top-2 right-3 bg-[#FC6736] text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold ">
              {products.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
