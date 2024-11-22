import React from "react";
import amit from "@/assets/images/jpg/tnp/amit.jpg";

import Image from "next/image";

const TNP = () => {
  return (
    <div>
      <div className="inline-block">
        <h1 className="text-3xl font-bold">Training and Placement</h1>
        <hr className="" />
      </div>

      <div className="flex flex-col justify-between mx-auto max-w-[800px] md:flex-row border-2 p-6">
        <Image
          src={amit}
          width={150}
          height={150}
          className="mx-auto md:mx-0"
          alt="Amit's profile"
        />
        <div className="mx-auto my-auto mt-4 md:mt-0 md:mx-0">
          <p className="font-semibold">Amit Kumar Agrawal</p>
          <p className="mb-4">Incharge- training and career Cell</p>
          <p>
            <span className="font-semibold">E-mail:</span> amitag@iiitnr.edu.in
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="inline-block">
          <h2 className="text-2xl font-semibold">What do we do?</h2>
          <hr />
        </div>
        <p className="mt-6 text-justify ">
          The Training & Placement Office at DSPM IIIT-Naya Raipur is concerned
          with every activity that enables students to learn and grow outside
          the Institute campus. On one hand, it collaborates with leading
          organizations and institutes in setting up internship and training
          program for the students while on other it enables the placement of
          students passing out from the Institute. The office liaises with
          prospective recruiters such as industrial establishments and corporate
          houses which conduct campus interviews and select students from both
          disciplines. It provides infra-structural facilities to conduct group
          discussions, tests, and interviews and other logistics required for
          the same.
        </p>
        <p className="mt-5 ">
          The Training and Placement Cell of DSPM IIIT-Naya Raipur strives to
          get every student trained in the Institute placed in an organization
          of his or her liking and pursue their passion. To achieve this goal,
          this office focusses not only on academic skills but also on physical,
          behavioral and societal skills required to be a team player in the
          organization. For four years, we nurture our students to develop their
          all round abilities so as when they land up in the competitive world,
          they do not lag behind.
        </p>
      </div>
      <div className="mt-4">
        <div className="inline-block">
          <h2 className="text-2xl font-semibold">Why IIIT</h2>
          <hr />
        </div>
        <p className="mt-6 text-justify ">
          Admission into the B. Tech programs of DSPM-IIIT Naya Raipur takes
          place through the Joint Entrance Examination (Main). Salient Features
          of Academic Curriculum:-
        </p>
        <li className="mt-2 font-semibold text-justify ">
          Basic Motto: Skill First, Theory later, Project integrated
        </li>
        <li className="mt-2 font-semibold text-justify ">
          Run with Fractal Academic concept, similar to IIT Hyderabad.
        </li>
        <li className="mt-2 font-semibold text-justify">
          Common syllabus for both CSE, ECE upto 4 semesters
        </li>
        <li className="mt-2 font-semibold text-justify">
          Project in every semester from 5th Semester.
        </li>
        <li className="mt-2 font-semibold text-justify">
          Eighth (8) semester dedicated for project work only.
        </li>
      </div>

      <div className="mt-4">
        <div className="inline-block">
          <h2 className="text-2xl font-semibold">Academic Training</h2>
          <hr />
        </div>
        <div className="mt-6 ">
          <h3 className="text-xl font-semibold">Skill first</h3>
          <p className="mt-2 text-justify ">
            DSPM IIIT-Naya Raipur follows an innovative academic structure
            pioneered and first implemented by IIT-Hyderabad of fractal
            academics. This is considered as the first step towards experiential
            learning. At the center of Fractal Academics is the concept of
            T-concept of education – Breadth first and Depth next. A very
            similar concept is also being followed by IIT-Bhilai.
          </p>
          <li className="mt-2 font-semibold text-justify ">
            Under this ‘T’ concept, course content is divided into two parts
            which require separate training. One part deals with the breadth of
            the topics and the other deals with depth of the concepts
          </li>
          <li className="mt-2 font-semibold text-justify">
            There can be more segments under each part dealing with either
            breadth or depth. Each segment is considered a fraction, thus it is
            said to be fractalized (divided) into various segments with 1 or 2
            credits.
          </li>
          <li className="mt-2 font-semibold text-justify">
            Breadth courses are the basic building block for the depth courses.
          </li>
          <li className="mt-2 font-semibold text-justify">
            The fundamental idea is to atomize credits so as to enable the
            students to get a breadth of knowledge in more number of courses,
            however, deeper knowledge in the courses of their choice.
          </li>
          <li className="mt-2 font-semibold text-justify">
            Breadth courses are taught for first two years followed by depth
            courses for the remaining two years.
          </li>
        </div>
        <div className="mt-6 ">
          <h3 className="text-xl font-semibold">Theory Next</h3>
          <p className="mt-2 text-justify ">
            Depth courses are built on the foundation set by the breadth courses
            and are of 2 credits or more. Normally these are offered as elective
            courses. A student interested in pursuing a particular knowledge
            domain may opt for these courses.
          </p>
        </div>
        <div className="my-6 ">
          <h3 className="text-xl font-semibold">Application Later</h3>
          <p className="mt-2 text-justify ">
            Students are then required to work on mini/major projects to
            implement or understand the proof of concepts learned in depth
            courses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TNP;
