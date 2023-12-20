"use client";

import { CardProductProps } from "@/app/components/detail/DetailClient";

import {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { toast } from "react-hot-toast";

interface CartContextProps {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
  addToBasketIncrease: (product: CardProductProps) => void;
  addToBasketDecrease: (product: CardProductProps) => void;
  removeFromCart: (product: CardProductProps) => void;
  removeCart: () => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  useEffect(() => {
    let getItem: any = localStorage.getItem("cart");
    let getItemParse: CartContextProps[] | null = JSON.parse(getItem);
    setCartPrdcts(getItemParse);
  }, []);

  const addToBasketIncrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity == 10) {
        return toast.error("Daha fazla ürün ekleyemezsiniz..");
      }
      if (cartPrdcts) {
        updatedCart = [...cartPrdcts];
        const existingItem = cartPrdcts.findIndex(
          (item) => item.id === product.id
        );

        if (existingItem > -1) {
          updatedCart[existingItem].quantity = ++updatedCart[existingItem]
            .quantity;
        }
        setCartPrdcts(updatedCart);
        toast.success("Ürün Sepete Ekledi!");
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    [cartPrdcts]
  );
  const addToBasketDecrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity == 10) {
        return toast.error("Daha az ürün ekleyemezsiniz..");
      }
      if (cartPrdcts) {
        updatedCart = [...cartPrdcts];
        const existingItem = cartPrdcts.findIndex(
          (item) => item.id === product.id
        );

        if (existingItem > -1) {
          updatedCart[existingItem].quantity = --updatedCart[existingItem]
            .quantity;
        }
        setCartPrdcts(updatedCart);
        toast.success("Ürün Sepete Ekledi!");
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    [cartPrdcts]
  );
  const removeCart = useCallback(() => {
    setCartPrdcts(null);
    toast.success("Sepet Temizlendi...");
    localStorage.setItem("cart", JSON.stringify(null));
  }, []);
  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts((prev) => {
        let updateCart;
        if (prev) {
          updateCart = [...prev, product];
        } else {
          updateCart = [product];
        }
        toast.success("Ürün Sepete Ekledi!");
        localStorage.setItem("cart", JSON.stringify(updateCart));
        return updateCart;
      });
    },
    [cartPrdcts]
  );
  const removeFromCart = useCallback(
    (product: CardProductProps) => {
      debugger;
      if (cartPrdcts) {
        const filteredProducts = cartPrdcts.filter(
          (cart) => cart.id !== product.id
        );

        setCartPrdcts(filteredProducts);
        toast.success("Ürün Sepetten Silindi");
        localStorage.setItem("cart", JSON.stringify(filteredProducts));
      }
    },
    [cartPrdcts]
  );
  let value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease
  };
  return <CartContext.Provider value={value} {...props} />;
};

const UseCart = () => {
  const context = useContext(CartContext);
  if (context == null) {
    throw new Error("Bir Hata Var");
  }
  return context;
};

export default UseCart;
