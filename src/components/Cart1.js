import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function  Cart1() {
    let ans=useSelector(state=>state.cart.value)
     const dispatch = useDispatch()
  return (
    <div className='container'>
        <h1>Cartpage</h1>
        <div className="row">
            {
            ans && ans.length > 0 && ans.map(value =>
                <div className="col-3 ">
                    <img src={value.image} alt='' className='img-fluid' />
                    <h2>{value.price}</h2>
                    <button>remove</button>
                </div>
            )}
        </div>
    </div>
  )
}
