import React from "react";
import HeadingWebsite from "@/assets/images/jpg/home/Headingwebsite.jpg"
import IIITNR from "@/assets/images/jpg/home/iiitnrBuilding.jpg"
import Image from "next/image";
const Home = () => {
  return <div>


    <div className="bg-red-400 w-full">

      <Image src={HeadingWebsite} className="w-full h-full"></Image>
    </div>

    <div className="flex items-center flex-col p-3">
      <div className="text-2xl">Welcome to IIIT NR  clone website</div>

      <p>- Best college for your students</p>

      <div className="bg-green-400 w-full">  <Image src={IIITNR} className="h-[30rem] " ></Image></div>
    

    </div>




  </div>
};

export default Home;
