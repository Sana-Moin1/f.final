import React from 'react'
import image from 'next/image'
import Link from 'next/link'


const Toppicks = () => {
  return (
<section  className="px-4 py-16 md:px-16 lg:px-24 bg-[#FFFFFF]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Top Picks For You</h2>
        <p className="text-gray-500">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/tp1.png"
          />
        </a>
        <h2 className="text-gray-900 title-font text-lg font-medium">
        Trenton modular sofa_3
          </h2>   

        <div className="mt-4">
       
          <p className="mt-1">Rs.25,000.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/tp2.png"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          dining chair
          </h3>
          <p className="mt-1">Rs.25,000.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/tp3.png"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
         stool
          </h3>
          <p className="mt-1">Rs.25,000.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/tp5.png"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          mirror
          </h3>
          <p className="mt-1">Rs.25,000.00</p>
        </div>

        <div className="flex justify-between mt-8">

        <Link href={"#products"}
         className="text-black text-lg font-medium border-b-2 border-black">
          Shop Now
  </Link>
  </div>
  </div>
      <div>
    </div>
  </div>
  </div>
</section>
 )
}
export default Toppicks