import  { useState } from "react";
import snowboard from "../assets/snowboard.jpeg";
import { Check } from "lucide-react";

export default function ProductPage() {
  const [selectedOption, setSelectedOption] = useState("subscribe");
  const [quantity, setQuantity] = useState(1);
  const [frequency, setFrequency] = useState("1 Month");

  const handleQuantityChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-6 gap-10 font-[Montserrat]">
      {/* Left - Product Image */}
      <div className="flex-1">
        <img src={snowboard} alt="Product" className="rounded-xl shadow-md" />
      </div>

      {/* Right - Product Details */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Title */}
        <h1 className="text-3xl font-bold">Awesome Product</h1>
        <p className="text-white">
          Conquer every slope with confidence. The All-Mountain Snowboard is
          engineered for riders who demand versatility, performance, and style.
        </p>

        <div className="w-full max-w-md rounded-2xl shadow p-6">
          {/* One-time purchase */}
          <label
            className={`flex items-center justify-between rounded-xl p-4 mb-4 cursor-pointer transition ${
              selectedOption === "one-time"
                ? ""
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="purchase-option"
                value="one-time"
                checked={selectedOption === "one-time"}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-5 h-5 accent-black cursor-pointer"
              />
              <span className="text-lg font-medium">One-time purchase</span>
            </div>
            <span className="text-lg font-semibold">$25.00</span>
          </label>

          {/* Subscribe & Save */}
          <label
            className={`block rounded-xl border border-white p-4 cursor-pointer transition ${
              selectedOption === "one-time"
                ? "border-white"
                : ""
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="purchase-option"
                  value="subscribe"
                  checked={selectedOption === "subscribe"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-5 h-5 accent-black cursor-pointer"
                />
                <span className="text-lg font-medium">Subscribe & Save</span>
              </div>
              <span className="text-lg font-semibold"><s className="text-gray-500">$25.00</s>{"  "}$22.50</span>
            </div>

            {/* Frequency dropdown & Benefits (only visible when subscribe is selected) */}
           
              <>
                {/* Frequency dropdown */}
                <div className="ml-8 mb-3">
                  <label className="block text-sm text-white mb-1">
                    Frequency
                  </label>
                  <select
                    className="w-full border rounded-lg p-2 cursor-pointer"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                  >
                    <option value="1 Month">Deliver every month</option>
                    <option value="2 Months">Deliver every 2 months</option>
                    <option value="3 Months">Deliver every 3 months</option>
                  </select>
                </div>

                {/* Benefits */}
                <div className="ml-8 space-y-1">
                  <p className="flex items-center text-sm text-white">
                    <Check className="w-4 h-4 mr-2 text-green-600" /> Save 10%
                  </p>
                  <p className="flex items-center text-sm text-white">
                    <Check className="w-4 h-4 mr-2 text-green-600" /> Free
                    shipping
                  </p>
                  <p className="flex items-center text-sm text-white">
                    <Check className="w-4 h-4 mr-2 text-green-600" /> Skip or
                    cancel anytime
                  </p>
                </div>

              
              </>
    
          </label>

          {/* Quantity selector */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-lg font-medium">Quantity</span>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-3 py-1 text-lg"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-1 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart button */}
          <button className="mt-6 w-full bg-white text-black py-3 rounded-xl text-lg font-semibold">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
