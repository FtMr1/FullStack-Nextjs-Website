"use client";
import UseCart from "@/hooks/useCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Button from "../general/Button";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { CardProductProps } from "../detail/DetailClient";
import Conter from "../general/Conter";

const CartClient = () => {
  const { cartPrdcts ,removeFromCart , removeCart ,addToBasketIncrease ,addToBasketDecrease } = UseCart();

  if (!cartPrdcts || cartPrdcts.length == 0) {
    return <div>Sepetenizde ürün bulunmamakta</div>;
  }

  let cartPrdctsTotal = cartPrdcts.reduce((acc:any , item : CardProductProps)=> acc + item.quantity * item.price, 0)
  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="flex items-center gap-3 text-center  border-b-2 p-2">
        <div  className="w-1/5">Ürün resmi</div>
        <div  className="w-1/5">Ürün Adı</div>
        <div  className="w-1/5">Ürün miktari</div>
        <div  className="w-1/5">Ürün fiyatı</div>
        <div  className="w-1/5"></div>
        </div>
        <div>
               {cartPrdcts.map(cart=>(
                     <div className="flex items-center justify-between text-center my-5 " key={cart.id}>
                                <div className="w-1/5 flex items-center justify-center">
                                    <Image src={cart.image} alt="" width={40} height={40}/>
                                </div>
                                <div  className="w-1/5">{cart.name}</div>
                                <div  className="w-1/5 flex justify-center items-center">
                                  <Conter cartProduct={cart} increaseFunc={()=>addToBasketIncrease(cart)} decreaseFunc={()=>addToBasketDecrease(cart)}/>
                                </div>
                                <div  className="w-1/5 text-orange-500 flex items-center text-lg">{cart.price}  <span><FaTurkishLiraSign/></span></div>
                                <div  className="w-1/5">
                                    <Button  text="Ürünü Sil" small   onClick={()=>removeFromCart(cart)}></Button>
                                </div>
                     </div>
               ))}
        </div>
        <div className="flex items-center justify-between my-5 py-5 border-t">
                <button onClick={()=>removeCart()} className="w-1/5 underline text-sm">Sepeti Sil</button>
                <div className="text-lg md:text-2xl text-orange-500 font-bold">{cartPrdctsTotal}₺</div>
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
