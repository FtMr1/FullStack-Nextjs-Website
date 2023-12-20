'use client'
import UseCart from "@/hooks/useCart";
import Link from "next/link";
import { BsBasket3Fill } from "react-icons/bs";

const CardCount = () => {
  const { cartPrdcts } = UseCart();
  return (
    <div className='hidden md:flex relative'>
      <Link href="/cart"><BsBasket3Fill  size={30} /></Link>  
      <div className=" absolute -top-2 -right-2 text-sm bg-orange-400 w-5 h-5 flex items-center justify-center rounded-full">{cartPrdcts?.length}</div>

    </div>
  )
}

export default CardCount