import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([]);


  const fetchAllOrders = async () => {

    if (!token) {
      return null
    }

    try {

      const response = await axios.post(backendUrl + 'api/order/list', {}, { headers: { token } })

      // console.log(response.data);

      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message);
      }



    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

  const statusHandler=async(e,orderId)=>{

    try {

      const response=await axios.post(backendUrl + 'api/order/status',{orderId,status:e.target.value})
      
      if(response.data.success){
        await fetchAllOrders()
      }

    } catch (error) {
      console.log(error);
      toast.error(response.data.mesage);
      
      
    }

  }


  useEffect(() => {
    fetchAllOrders()
  }, [token])



  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order, index) => (

            <div key={index} className='grig grid-cols-1 sm::grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:my-4 text-xs sm:text-sm text-gray700'>
              <img src={assets.parcel_icon} className='w-12' alt="" />
              <div>
                <div>
                  {order.item.map((item, index) => {
                    if (index === order.items.length) {
                      return <p className='py-0.5' key={index}>{item.name} x {item.quantity} <span>{item.size}</span></p>

                    }
                    else {
                      return <p className='py-0.5' key={index}>{item.name} x {item.quantity} <span>{item.size}</span>,</p>

                    }
                  })}
                </div>

                <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>

                <div>
                  <p >{order.address.street + ", "}</p>
                  <p >{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipCode}</p>
                </div>
                <p>{order.address.phone}</p>
              </div>

              <div>
                <p className='text-sm sm:text-[15px]'>Items: {order.items.left}</p>
                <p className='mt-3 '>PaymentMethod: {order.paymentMethod}</p>
                <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className='text-sm sm:text-[15px]'>{currency} {order.amount}</p>
              <select onChange={(e)=> statusHandler(e,order._id)} value={order.status} className='p-2 font-semibold' >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>


            </div>


          ))
        }
      </div>
    </div>
  )
}

export default Orders