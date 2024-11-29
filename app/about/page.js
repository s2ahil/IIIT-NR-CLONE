import React from "react";

export const metadata = {
  title: "About - I Love IIIT Naya Raipur",
  description:
    "Discover why you'll love IIIT Naya Raipur! Explore our dynamic academics, cutting-edge research labs, semester abroad opportunities, and holistic growth programs.",
  keywords:
    "IIIT Naya Raipur, About IIIT NR, Research Labs, Semester Abroad, Holistic Growth, Engineering Education",
};

const About = () => {
  return (
    <main className="px-6 py-12 bg-gray-100">
      <section className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="mb-8 text-4xl font-extrabold text-center text-gray-900">
          About IIIT Naya Raipur
        </h1>
        <p className="text-lg text-center text-gray-700">
          Discover why IIIT Naya Raipur is a leading destination for students
          aspiring to shape the future of technology and innovation. From
          cutting-edge academics to unmatched extracurricular opportunities, we
          have something for everyone.
        </p>

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {/* Dynamic Academics */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Dynamic Academics
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Experience hands-on engineering from day one at IIIT NR.</li>
              <li>
                A unique skill-first approach with practical projects embedded
                in every semester.
              </li>
              <li>
                Cutting-edge modular courses tailored for future technologies.
              </li>
              <li>
                An innovative 'T'-Education model ensures a blend of depth and
                breadth in knowledge.
              </li>
              <li>
                Strong industry connections provide unmatched internship and
                elective opportunities.
              </li>
            </ul>
          </section>

          {/* Advanced Research Labs */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Advanced Research Labs
            </h2>
            <p className="text-gray-700">
              Discover the future at IIIT NR with state-of-the-art labs in Data
              Science, Artificial Intelligence, IoT, and more.
            </p>
          </section>

          {/* Semester Abroad Experiences */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Semester Abroad Experiences
            </h2>
            <p className="text-gray-700">
              Love the global exposure IIIT NR offers, with financial support of
              up to ₹5 Lakhs for international projects.
            </p>
          </section>

          {/* Research & Innovation */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Fueling Research & Innovation
            </h2>
            <p className="text-gray-700">
              IIIT NR nurtures innovation with grants for research publications,
              conferences, and prototype development.
            </p>
          </section>

          {/* Holistic Personality Growth */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Holistic Personality Growth
            </h2>
            <p className="text-gray-700">
              Become a leader at IIIT NR through workshops, club activities, and
              teamwork-focused events.
            </p>
          </section>

          {/* Extracurricular Activities */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Unmatched Extracurriculars
            </h2>
            <p className="text-gray-700">
              From sports to cultural events, IIIT NR supports your passions
              with financial aid and state-of-the-art facilities.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default About;
