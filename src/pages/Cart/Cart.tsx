import { useState } from "react";
import Layout from "../../Layout/Layout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";

const Cart: React.FC = () => {
  const [data, setData] = useState<[] | null>(null);
  const [purchase, setPurchase] = useState(false);

  const handlePurchase = () => {
    setPurchase(true);
  };

  return (
    <Layout>
      {purchase && (
        <div>
          <div className="absolute bg-black opacity-30 top-0 left-0 w-screen min-h-screen"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-white px-4 py-8 min-w-[400px] flex flex-col items-center justify-center gap-10 rounded-md">
              <p className="mt-4">Are you sure with the purchase?</p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <button className="bg-green-500 rounded-md py-3">Yes</button>
                <button
                  className="bg-red-500 rounded-md py-3"
                  onClick={() => setPurchase(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <a
          href="/"
          className="text-decoration-none flex items-center py-2 text-blue-400 my-2"
        >
          <ChevronLeftIcon /> Continue Shopping
        </a>
        <div className="flex gap-5">
          <div className="w-3/5">
            <div className="px-2 py-3 rounded-md border-2">
              {!data ? (
                <p className="opacity-50 px-2">
                  There is no more items in your cart
                </p>
              ) : (
                <p>Hey There!</p>
              )}
            </div>
          </div>
          <div className="w-2/5 px-3">
            <div className="border-2 rounded-md flex flex-col px-4 py-5 gap-10">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div>0 items</div>
                  <div>$0.00</div>
                </div>
                <div className="flex justify-between">
                  <div>Shipping</div>
                  <div>Free</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div>Total (tax excluded)</div>
                  <div>$0.00</div>
                </div>
                <div className="flex justify-between">
                  <div>Taxes</div>
                  <div>$0.00</div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 px-5 py-3 rounded-md text-white hover:opacity-50 transition-all"
                  onClick={handlePurchase}
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
