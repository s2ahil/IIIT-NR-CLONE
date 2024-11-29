import React from "react";
import shail from "@/assets/images/webp/contact/sahil.webp";
import bhavesh from "@/assets/images/webp/contact/bhavesh.webp";
import soumya from "@/assets/images/webp/contact/soumya.webp";
import devjit from "@/assets/images/webp/contact/devjit.webp";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="px-5 py-10 ">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
        Contact Us
      </h1>
      <h2 className="text-xl">We Love IIIT naya raipur</h2>
      <div className="pt-4 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700">Address:</h2>
          <p className="text-gray-600">
            IIIT–Naya Raipur
            <br />
            Plot No. 7, Sector 24, Near Purkhoti Muktangan,
            <br />
            Atal Nagar – 493661 Chhattisgarh
          </p>
        </div>
        <div className="pt-4">
          <h2 className="text-2xl font-semibold text-gray-700 ">
            Team Members
          </h2>
          <div className="flex flex-wrap pt-4">
            <div className="w-[250px] place-items-center ">
              <Image width={200} src={shail} />
              <h3>Sahil Pradhan</h3>
              <p>211020441 (DSAI)</p>
              <p>sahilpradhan411@gmail.com</p>
            </div>
            <div className="w-[250px] place-items-center ">
              <Image width={200} src={bhavesh} />
              <h3>Bhavesh Balendra</h3>
              <p>211010221 (ECE)</p>
              <p>bhaveshbalendra@gmail.com</p>
            </div>
            <div className="w-[250px] place-items-center ">
              <Image width={200} src={soumya} />
              <h3>Soumya Rayast</h3>
              <p>211010248 (ECE)</p>
              <p>soumya21101@iiitnr.edu.in</p>
            </div>
            <div className="w-[250px] place-items-center ">
              <Image width={200} src={devjit} />
              <h3>Devajit Patra</h3>
              <p>211020417 (DSAI)</p>
              <p>devajit21102@iiitnr.edu.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
