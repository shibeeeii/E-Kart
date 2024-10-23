import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const [show, setShow] = useState(false)

  const change = ()=>{
    setShow(!show)

    

  }
  const whishlistArray = useSelector(state=>state.whishlist)

  const CartArray = useSelector(state=>state.cartItem)

  return (
    <div className='min-h-20 bg-violet-800 p-2 w-full md:flex items-center pt-4 md:pt-0 fixed'>
      <div className='flex w-full'>
<Link to={'/'}>        <h1 className='text-3xl text-white'><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} className='me-3' />E-Kart</h1></Link>
        <button className='border border-white p-2 rounded ms-auto md:hidden' onClick={change}><FontAwesomeIcon icon={faBars} /></button>
        </div>
{ show &&       <div className='mt-4 flex md:hidden'>
<Link to={'/Whishlist'}>          <button className='flex items-center p-3 py-3 border border-white rounded me-4 hover:bg-white hover:text-violet-900 w-50'><FontAwesomeIcon icon={faHeart} style={{color: "#ff1100",}} className='me-2' />Whishlist <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{whishlistArray.length}</span></button></Link>
          <Link to={'/cart'}><button className='flex items-center p-3 py-3 border border-white rounded me-4 hover:bg-white hover:text-violet-900 w-50'><FontAwesomeIcon icon={faCartShopping} style={{color: "#00d604",}} className='me-2' />Cart <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{CartArray.length}</span></button></Link>
        </div>}


        <div className='md:flex ms-auto hidden'>
         <Link to={'/whishlist'}> <button className='flex items-center px-4 py-3 border border-white rounded me-4 hover:bg-white hover:text-violet-900 w-50'><FontAwesomeIcon icon={faHeart} style={{color: "#ff1100",}} className='me-2' />Whishlist <span className='p-2 border-slate-500 bg-slate-400 rounded ms-2'>{whishlistArray.length}</span></button></Link>
          <Link to={'/cart'}><button className='flex items-center px-4 py-3 border border-white rounded me-4 hover:bg-white hover:text-violet-900 w-50'><FontAwesomeIcon icon={faCartShopping} style={{color: "#00d604",}} className='me-2' />Cart <span className='p-2 border-slate-500 bg-slate-400 rounded ms-2'>{CartArray.length}</span></button></Link>
        </div>
     
      </div>
  )
}

export default Header