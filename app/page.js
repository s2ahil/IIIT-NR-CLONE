"use client"
import HeadingWebsite from "@/assets/images/jpg/home/Headingwebsite.jpg";
import IIITNR from "@/assets/images/jpg/home/iiitnrBuilding.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <div>
 
      {/* Welcome Section */}
      <section className="flex flex-col items-center p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to the "I Love IIIT Naya Raipur" Website
        </h1>
        <p className="text-lg text-gray-600">
          Discover why IIIT Naya Raipur is the perfect choice for your academic journey.
        </p>
      </section>

      {/* Image and Campus Section */}
      <section className="w-full flex flex-col items-center px-4">
        <div className="w-full flex items-center justify-center mb-4">
          <Image
            src={IIITNR}
            alt="IIIT Naya Raipur Campus Building"
            className="w-full h-auto md:h-[30rem] object-contain"
          />
        </div>
        <p className="text-md text-gray-600">
          Explore the state-of-the-art facilities, vibrant campus life, and unparalleled learning opportunities at IIIT NR.
        </p>
      </section>
    </div>
  );
};

export default Home;
