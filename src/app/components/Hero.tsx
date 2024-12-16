import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
  return (
    <div>
     {/* Hero Section */}
      <section className="bg-[#FBEBB5] min-h-screen flex items-center justify-center relative">
     <div className="flex flex-col justify-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-snug">Rocket single
           <br />seater</h1>
            
            <Link href={"#products"}
         className="underline underline-offset-4 hover:bg-gray-800">
          Shop Now
          </Link>
          </div>
          <div className="flex justify-center items-center">
          <Image
            src="/Rocketseater.png"
            height={1000}
            width={853}
            alt="Rocket single seater"
            className="w-full max-w-sm md:max-w-md object-contain"

          />
          
        </div>
      </section>
      {/* Product Section */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src="/sidetable01.png"
              alt="Side table"
              width={300}
              height={200}
              className="rounded-md shadow"
            />
            <div className="absolute top-4 left-4 bg-[#FAF4F4] rounded-full p-2 shadow-md">
            
            </div>
            <h2 className="mt-4 text-lg font-semibold">Side table</h2>
            <Link href={"#products"}
         className="underline underline-offset-4 hover:bg-gray-800">
          View More
        </Link>
          </div>
          <div className="relative">
            <Image
              src="/sidetable02.png" 
              alt="Side table"
              width={300}
              height={200}
              className="rounded-md shadow"
            />
            <div className="absolute top-4 left-4 bg-[#FAF4F4] rounded-full p-2 shadow-md">
              
            </div>
            <h2 className="mt-4 text-lg font-semibold">Side table</h2>
            <Link href={"#products"}
         className="underline underline-offset-4 hover:bg-gray-800">
          View More
        </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
