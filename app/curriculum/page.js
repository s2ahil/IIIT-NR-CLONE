import React from "react";

export const metadata = {
  title: "Curriculum - I Love IIIT Naya Raipur",
  description:
    "Explore the unique curriculum at IIIT Naya Raipur. Our innovative programs emphasize hands-on learning, interdisciplinary knowledge, and real-world projects.",
  keywords:
    "IIIT Naya Raipur Curriculum, Engineering Education, Hands-on Learning, Interdisciplinary Courses, Modular Curriculum",
};

const Curriculum = () => {
  return (
    <main className="px-6 py-12 bg-gray-100">
      <section className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="mb-8 text-4xl font-extrabold text-center text-gray-900">
          Our Curriculum
        </h1>
        <p className="text-lg text-center text-gray-700">
          The curriculum at IIIT Naya Raipur is designed to equip students with
          practical skills and a strong theoretical foundation. Explore our
          innovative education model, interdisciplinary approach, and focus on
          industry-ready graduates.
        </p>

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {/* Semester-wise Curriculum */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Semester-wise Structure
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>
                Year 1: Foundational courses in mathematics, physics, and
                programming.
              </li>
              <li>
                Year 2: Core subjects like data structures, algorithms, and
                digital systems.
              </li>
              <li>
                Year 3: Advanced courses in AI, IoT, and software engineering
                with interdisciplinary electives.
              </li>
              <li>
                Year 4: Capstone projects, internships, and specialized
                electives in emerging technologies.
              </li>
            </ul>
          </section>

          {/* Modular Courses */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Modular Course Design
            </h2>
            <p className="text-gray-700">
              Each semester is modular, focusing on practical applications and
              project-based learning. Courses are structured to provide
              flexibility and depth in emerging domains such as AI, Blockchain,
              and Cybersecurity.
            </p>
          </section>

          {/* Skill-first Approach */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Skill-first Approach
            </h2>
            <p className="text-gray-700">
              Our skill-first approach ensures students gain expertise in tools
              and technologies that are in high demand. Every semester includes
              mini-projects to build confidence and industry readiness.
            </p>
          </section>

          {/* Interdisciplinary Electives */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Interdisciplinary Electives
            </h2>
            <p className="text-gray-700">
              Students can choose electives from diverse disciplines such as
              design, entrepreneurship, and humanities to gain a holistic
              perspective and expand their career opportunities.
            </p>
          </section>

          {/* Capstone Project */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Capstone Projects
            </h2>
            <p className="text-gray-700">
              The final semester includes a major project where students solve
              real-world problems, often in collaboration with industry
              partners. This serves as a launchpad for their professional
              careers.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Curriculum;
