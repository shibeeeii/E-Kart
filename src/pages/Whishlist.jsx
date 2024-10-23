import React from 'react'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWhishlistItem, whishlistSlice } from '../redux/slice/whishlistSlice'
import { addItemToCart } from '../redux/slice/cartSlice'

function Whishlist() {

  const whishlistArray = useSelector((state)=>state.whishlist)
  console.log(whishlistArray);
  const dispatch = useDispatch()

  const whishes = (item)=>{
    dispatch (addItemToCart(item))
    dispatch (removeWhishlistItem(item.id))
  }
  


  return (
    
    <><h1 className='pt-32 text-center text-4xl text-violet-800'></h1>
      { whishlistArray?.length>0?
        <div className='mt-5 px-10 mb-10 md:grid grid-cols-4'>
{ whishlistArray?.map((item)=>(
  <div className="p-2">
  <div className='p-3 rounded shadow-lg'>
    <img src={item?.image} alt="no image" className='w-full h-60' />
    </div>
    <h4 className='text-center text-3xl'>{item?.title.slice(0,25)}...</h4>
    
      <p className='text-justify'>{item?.description.slice(0,100)}...</p>
      <p className='text-2xl'>Price : <span className='text-violet-800'>{item.price}</span></p>
      <div className='flex justify-between'>
        <button onClick={()=>dispatch(removeWhishlistItem(item?.id))} className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faTrash}/></button>
        <button onClick={()=>whishes(item)} className='p-3 rounded bg-green-800 text-white'><FontAwesomeIcon icon={faCartShopping}/></button>
      </div>
</div>
))      }

</div>
:


    <div className='w-full mt-10 md:grid grid-cols-3'>
      <div></div>
      <div>
        <img src="https://cdn.dribbble.com/users/392618/screenshots/2121061/wishlist.gif" alt="no image" className='w-full h-80' />
      </div>
      <div></div>

    </div>
    }
    </>
  )
}

export default Whishlist