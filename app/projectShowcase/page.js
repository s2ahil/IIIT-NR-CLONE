"use client";
import ProjectsCards from "@/components/ProjectsCards";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const ProjectShowcase = () => {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const res = await fetch("/api/get/projects",
                                {
    cache:"no-cache"
  }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setTitles(data.reverse());
        console.log(data)
      } catch (error) {
        console.error("Error fetching titles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTitles();
  }, []);

  return (
    <div className=" w-full bg-[#F3F4F6] ">

      <h1 className="text-3xl font-bold mb-4 text-center p-4">Project Showcase</h1>
      <div className="flex justify-center items-center p-4 bg-gray-100">
        <div className="flex space-x-4">

          <Link href="/createProject">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              + Create Project
            </button>
          </Link>
          <Link href="/manageProjects">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
             Manage Project
            </button>
          </Link>
        </div>
      </div>


      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center ">



          <div className="flex flex-col gap-3 justify-center items-center bg-white max-w-[50rem] md:w-[50rem] p-2">
            {titles.length > 0 ? (
              titles.map((item, index) => (


                <ProjectsCards index={index} item={item}></ProjectsCards>

              ))
            ) : (
              <p>No projects found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
