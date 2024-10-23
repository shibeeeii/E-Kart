import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeCartItem } from '../redux/slice/cartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {
  const [total, setTotal]= useState(0)
  const cartIt = useSelector(state=>state.cartItem)
  console.log(cartIt);


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getTotal = ()=>{
    if(cartIt.length>0){
    setTotal(cartIt?.map((item)=>item.price)?.reduce((n1,n2)=>n1+n2))
  }
  }
  console.log(total);

  const handleCheckout = ()=>{
    alert('order placed Successfully')
    dispatch (emptyCart())
    navigate('/')

  }
  
  useEffect(()=>{
    getTotal()
  },[cartIt])
  
  
  return (
    <>
    <div className='pt-32'>
      <h1 className='text-center text-4xl text-violet-900'>Cart</h1>
      { cartIt.length>0?
        <div className='md:grid md:grid-cols-[2fr_1fr] my-10'>
        <div className='md:py-5 md:px-20'>
          <table className='w-full '>
            <thead>
              <tr>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>#</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Title</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Image</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Price</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Action</th>
              </tr>
            </thead>

            <tbody>
              
             { cartIt.map((item,index)=>(
              <tr>
              <td className='border border-gray-100 p-3'>{index+1}</td>
              <td className='border border-gray-100 p-3'>{item.title}</td>
              <td className='border border-gray-100 p-3'><img src={item.image} alt=" no image" style={{width:'150px', height:'100px'}} /></td>
              <td className='border border-gray-100 p-3'>{item.price}</td>
              <td className='border border-gray-100 p-3'> <button className='bg-red-700 p-3 text-white rounded' onClick={()=>dispatch(removeCartItem(item.id))}><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
)) }
            </tbody>
          </table>
        </div>
        <div className='pt-5 px-10'>
          <div className='p-3 shadow-lg '>
            <h1 className='text-center text-3xl'>Cart Summary</h1>
            <p>Total number of products : {cartIt.length}</p>
            <p>Grand Total of products : $ {total} </p>
            <button onClick={handleCheckout} className='w-full bg-green-600 text-white p-3 hover:bg-white hover:border hover:border-green600 hover:text-green-600'>Checkout</button>

          </div>

        </div>

      </div>
      :
      <div className='w-full mt-10 md:grid grid-cols-3'>
      <div></div>
      <div className='flex justify-center items-center flex-col my-10'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.bcOPt0rewDNS-5B4I7e9_QHaFj&pid=Api&P=0&h=180" alt="no image" className='w-full h-80' />
        <p className='text-center text-violet-800 text-3xl'>Your cart is empty</p>
        <button className='bg-green-600 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2' />Back Home</button>
      </div>
      <div></div>

    </div>
    }

    </div>

    </>
  )
}

export default Cart