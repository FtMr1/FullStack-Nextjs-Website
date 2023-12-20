import {products} from '@/utils/products'
import Heading from '../general/Heading'
import ProductCard from './ProductCard'
import getProducts from '@/app/actions/getProduct'


interface IParams {
  productId?: string;
}

const Products = () => {
  


  return (
    <div><Heading text='Tüm Ürünler'/>
        <div className='flex items-center flex-wrap gap-3 md:gap-10 px-3 md:px-10'>
            {products.map(product=>(
                <ProductCard key={product.id} product={product}/>
            ))
            }
        </div>
    
    </div>
  )
}

export default Products