
import React from 'react'
import FormatPrice from '../helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import AddToCart from './AddToCart'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/Cart_Context'
const CartItem = ({id,name,image,color,price,amount}) => {

    const{removeItem,setIncrease,setDecrease}=useCartContext();

    

   
  return (
    <div className='cart_headig grid grid-five-column'>
        {/* image and name with color*/}
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id}/>
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className='color-div'>
                    <p>color:</p>
                    <div className='color-style' style={{backgroundColor:color,color:color}}></div>
                </div>
            </div>
        </div>
        {/* price */}
        <div className="cart-hide">
            <p>
            <FormatPrice price={price}/>
            </p>
        </div>
        {/* Quntity */}
        <CartAmountToggle amount={amount} setDecrease={()=>setDecrease(id)} setIncrease={()=>setIncrease(id)}/>
          {/*sub total */}
          <div className='cart-hide'>
            <p>
                <FormatPrice price={price*amount}/>
            </p>
          </div>
          {/*remove item button*/}
          <div>
            <FaTrash className='remove_icon' onClick={()=>removeItem(id)}/>
          </div>
    </div>
  )
}

export default CartItem