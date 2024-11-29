"use client";
import React from "react";
import home from "@/assets/images/webp/home/home.webp";
import iiit from "@/assets/images/webp/home/iloveiiitnr.webp";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="px-6 py-12 bg-gray-100">
      <section className="max-w-5xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
            Welcome to "I Love IIIT Naya Raipur"
          </h1>
          <p className="text-lg text-gray-700">
            Discover why IIIT Naya Raipur is the perfect choice for your
            academic journey.
          </p>
        </div>

        {/* Image and Campus Section */}
        <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="relative w-full h-96">
            <Image
              priority
              src={home}
              alt="IIIT Naya Raipur Campus Building"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <p className="mb-4 text-gray-700 text-md">
              Explore the state-of-the-art facilities, vibrant campus life, and
              unparalleled learning opportunities at IIIT NR. Join a community
              of innovators and thinkers shaping the future.
            </p>
            <div className="flex justify-center">
              <Link href="/about">
                <button className="px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-black rounded-lg bg-opacity-60 hover:bg-blue-700">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="relative w-full h-96">
            <Image
              priority
              src={iiit}
              alt="IIIT Naya Raipur Campus Building"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <p className="mb-4 text-gray-700 text-md">
              Explore the state-of-the-art facilities, vibrant campus life, and
              unparalleled learning opportunities at IIIT NR. Join a community
              of innovators and thinkers shaping the future.
            </p>
            <div className="flex justify-center">
              <Link href="/about">
                <button className="px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-black rounded-lg bg-opacity-60 hover:bg-blue-700">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
