"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";

import { ProductType } from "@/types";
import useCartStore from "@/app/store/cartStore";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  const handleTypeChange = (type: "size" | "color", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    });
    toast.success("Produto adicionado ao carrinho");
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-xm">
        <span className="text-gray-500">Tamanho</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              onClick={() => handleTypeChange("size", size)}
              className={`cursor-pointer border p-0.5 rounded ${selectedColor === size ? "border-gray-500" : "border-gray-300"}`}
              key={size}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Cor</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              onClick={() => handleTypeChange("color", color)}
              className={`cursor-pointer border p-0.5 rounded ${selectedColor === color ? "border-gray-300" : "border-white"}`}
              key={color}
            >
              <div
                className={`w-6 h-6 rounded`}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantidade</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="cursor-pointer border border-gray-300 p-1"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increment")}
            className="cursor-pointer border border-gray-300 p-1"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* BUTTONS */}
      <button
        onClick={handleAddToCart}
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
      >
        <Plus className="w-4 h-4" />
        Adicionar ao carrinho
      </button>
      <button className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer text-sm font-medium">
        <ShoppingCart className="w-4 h-4" />
        Comprar agora
      </button>
    </div>
  );
};

export default ProductInteraction;
