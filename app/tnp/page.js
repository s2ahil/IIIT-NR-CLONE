import React, { Suspense } from "react";
import amit from "@/assets/images/jpg/tnp/amit.jpg";
import Image from "next/image";
import Loading from "../loading";

export const metadata = {
  title: "Training and Placement - IIIT Naya Raipur",
  description:
    "Explore the Training and Placement activities at DSPM IIIT Naya Raipur. Learn about the T&P cell, its initiatives, and how it empowers students for successful careers.",
  keywords:
    "Training and Placement, IIIT Naya Raipur, T&P cell, Career Cell, Student Internships, Campus Placements",
};

const TNP = () => {
  return (
    <main className="px-6 py-10 bg-gray-50">
      <section className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Training and Placement
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Empowering students with skills and opportunities for a successful
            career.
          </p>
          <hr className="mt-4 border-gray-300" />
        </div>

        {/* T&P Incharge Details */}
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col items-center max-w-4xl p-6 mx-auto mb-12 bg-white rounded-lg shadow-md md:flex-row">
            <Image
              src={amit}
              width={150}
              height={150}
              className="border-4 border-gray-300 rounded-full"
              alt="Amit Kumar Agrawal Profile"
            />
            <div className="mt-4 text-center md:mt-0 md:ml-6 md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800">
                Amit Kumar Agrawal
              </h2>
              <p className="text-gray-700">
                Incharge - Training and Career Cell
              </p>
              <p className="mt-2">
                <span className="font-semibold text-gray-800">Email:</span>{" "}
                <a
                  href="mailto:amitag@iiitnr.edu.in"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  amitag@iiitnr.edu.in
                </a>
              </p>
            </div>
          </div>
        </Suspense>

        {/* What Do We Do Section */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            What Do We Do?
          </h2>
          <p className="text-lg leading-8 text-gray-700">
            The Training & Placement Office at DSPM IIIT-Naya Raipur is
            dedicated to bridging the gap between academic learning and
            professional growth. Our office collaborates with leading
            organizations and institutes to offer internships and training
            programs, while also facilitating placements for students in
            esteemed companies.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            From organizing campus interviews to nurturing students with
            physical, behavioral, and societal skills, the T&P cell ensures
            holistic development. The ultimate goal is to prepare our students
            for the competitive world by developing their all-round abilities,
            empowering them to achieve their career aspirations.
          </p>
        </div>

        {/* Additional T&P Cell Details */}
        <div className="max-w-5xl p-6 mx-auto bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Key Activities of the T&P Cell
          </h3>
          <ul className="space-y-2 text-lg text-gray-700 list-disc list-inside">
            <li>
              Collaborates with corporate houses and industries for internships
              and training programs.
            </li>
            <li>
              Organizes campus interviews, group discussions, and skill
              development workshops.
            </li>
            <li>
              Provides state-of-the-art infrastructure for placement activities.
            </li>
            <li>Focuses on academic and interpersonal skill enhancement.</li>
            <li>
              Encourages students to pursue their passion by placing them in
              organizations of their choice.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default TNP;
