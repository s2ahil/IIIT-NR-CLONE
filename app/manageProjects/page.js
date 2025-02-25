"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
export const dynamic = 'force-dynamic';
const ManageProject = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch all projects
    const fetchProjects = async () => {
        try {
            const res = await fetch("/api/get/projects",{ cache: 'no-store'
  });
            if (!res.ok) {
                throw new Error("Failed to fetch projects");
            }
            const data = await res.json();
            setProjects(data.reverse());
        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Function to handle deletion of a project by id
    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this project?");
        if (!confirmed) return;

        try {
            const res = await fetch(`/api/project/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) {
                throw new Error("Failed to delete project");
            }
            // Update the UI by filtering out the deleted project
            setProjects((prev) => prev.filter((project) => project.id !== id));

            alert("Project Deleted")
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };
    if (loading) {
        // Show a basic loader while fetching data
        return (
          <div className="p-4 flex justify-center items-center min-h-[200px]">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
          </div>
        );
      }

    return (
        <div className="p-4">
        <p className=" text-green-400 text-center mb-4">Hai Admin welcome ! </p>
            <h1 className="text-3xl font-bold mb-4 text-center"> Manage Projects</h1>
            {projects.length > 0 ? (
                <div className="space-y-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex justify-between items-center p-4 bg-white rounded shadow"
                        >
                            <div>
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                {/* You can display more details here if needed */}
                            </div>
                            <div className="flex gap-4 items-center">
                                <Link href={`/editProject/${project.id}`}  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</Link>
                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No projects found.</p>
            )}
        </div>
    );
};

export default ManageProject;
