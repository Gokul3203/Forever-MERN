import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const{productId}=useParams();
  const {products,currency,addToCart}=useContext(ShopContext);
  const[productsData,setProductsData]=useState(false);
  const [image,setImage]=useState('');
  const [size,setSize]=useState('');

  const fetchProductData=async()=>{
    products.map((item)=>{
      if(item._id === productId){
        setProductsData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData()
  },[productId])
  return productsData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex-1 flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productsData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto' src={image} alt="" />
        </div>
        </div>
        {/* Product Information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 w-full'>{productsData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>{122}</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productsData.price}</p>
          <p className='mt-5 text-gray-600 md:w-4/5'>{productsData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productsData.sizes.map((item,index)=>(
                  <button key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500':''}`} onClick={()=>setSize(item)}>{item}</button>
                ))
              }

            </div>
            

          </div>
          <button className='bg-black text-white px-5 py-3 text-sm active:bg-gray-700'onClick={()=>addToCart(productsData._id,size)}>ADD TO CART</button>
            <hr  className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>

            </div>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Descritption</b>
          <p className='border px-5 py-3 text-sm'>Reviews {122}</p>
        </div>
        <div className='flex flex-col ga-4 border px-6 py-6 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi et consectetur cupiditate aliquam aperiam provident numquam, vitae nam exercitationem expedita!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro expedita consequatur iusto necessitatibus, suscipit esse maiores consequuntur cupiditate eum at, qui beatae vero ad veritatis quam dolorem facere voluptatum laudantium!</p>
        </div>
      </div>
      {/* Display Latest products */}
      <RelatedProducts category={productsData.category} subCategory={productsData.subCategory}/>

    </div>
  ):<div className='opacity-0'></div>
}

export default Product