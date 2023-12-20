import { CardProductProps } from "../detail/DetailClient";




interface CounterProps {
    cartProduct :  CardProductProps,
    decreaseFunc : ()=> void ;
    increaseFunc : () => void;
}
const Conter:React.FC<CounterProps> = ({cartProduct,increaseFunc , decreaseFunc}) => {
    const buttonStyle = "w-8 h-8 border flex item-center justify-center text-lg rounded-md"
  return (
    <div className="flex items-center gap-2">
        <div className={buttonStyle} onClick={decreaseFunc}>-</div>
        <div className="text-2xl md:text-xl">{cartProduct?.quantity}</div>
        <div className={buttonStyle}  onClick={increaseFunc}>+</div>
    </div>
  )
}

export default Conter