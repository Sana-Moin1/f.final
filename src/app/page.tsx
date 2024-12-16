import Image from "next/image";
import React from 'react'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Toppicks from "./components/Toppicks";
import NewArrivals from "./components/NewArrivals";
import Blog from "./components/Blog";
import Instagram from "./components/Instagram";
const Home = () => {
  return (
    <div>
<Hero />
<Toppicks />
<NewArrivals />
<Blog />
<Instagram /> 
     
    </div>
  )
}

export default Home

         