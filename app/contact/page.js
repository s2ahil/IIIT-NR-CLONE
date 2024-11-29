import React, { Suspense } from "react";
import Image from "next/image";
import shail from "@/assets/images/webp/contact/sahil.webp";
import bhavesh from "@/assets/images/webp/contact/bhavesh.webp";
import soumya from "@/assets/images/webp/contact/soumya.webp";
import devjit from "@/assets/images/webp/contact/devjit.webp";
import Loading from "../loading";

export const metadata = {
  title: "Contact Us - I Love IIIT Naya Raipur",
  description:
    "Get in touch with the team behind 'I Love IIIT Naya Raipur'. Find our contact details and team member information here.",
  keywords: "Contact IIIT Naya Raipur, Team IIIT NR, IIIT NR Address",
};

const Contact = () => {
  return (
    <main className="px-6 py-12 bg-gray-100">
      <section className="max-w-5xl mx-auto">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-gray-900">
          Contact Us
        </h1>
        <p className="text-lg text-center text-gray-700">
          We’re here to help and answer any questions you might have. We love
          IIIT Naya Raipur and look forward to hearing from you!
        </p>
        <div className="mt-12">
          {/* Address Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Address</h2>
            <address className="mt-4 not-italic text-gray-600">
              IIIT–Naya Raipur
              <br />
              Plot No. 7, Sector 24, Near Purkhoti Muktangan,
              <br />
              Atal Nagar – 493661, Chhattisgarh, India
            </address>
          </div>

          {/* Team Members Section */}
          <Suspense fallback={<Loading />}>
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    image: shail,
                    name: "Sahil Pradhan",
                    details: "211020441 (DSAI)",
                    email: "sahilpradhan411@gmail.com",
                  },
                  {
                    image: bhavesh,
                    name: "Bhavesh Balendra",
                    details: "211010221 (ECE)",
                    email: "bhaveshbalendra@gmail.com",
                  },
                  {
                    image: soumya,
                    name: "Soumya Rayast",
                    details: "211010248 (ECE)",
                    email: "soumya21101@iiitnr.edu.in",
                  },
                  {
                    image: devjit,
                    name: "Devajit Patar",
                    details: "211020417 (DSAI)",
                    email: "devajit21102@iiitnr.edu.in",
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg"
                  >
                    <Image
                      src={member.image}
                      alt={`${member.name}'s profile picture`}
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.details}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-2 text-blue-600 underline"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Contact;
