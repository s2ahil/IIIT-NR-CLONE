"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from 'next/navigation'
// Quill modules & formats for read-only display
const quillModules = {
  toolbar: [],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "align",
  "color",
  "code-block",
];

const UserData = () => {
  const [project, setProject] = useState(null);    // Holds the fetched data
  const [loading, setLoading] = useState(true);    // For showing a loader
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch from /api/userData/1 (hard-coded ID for demo)
        const res = await fetch(`/api/userData/${id}`, {
          // Next.js-specific options
          next: {
            revalidate: 60,
          }
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        console.log(data)
        if (Array.isArray(data) && data.length > 0) {
          setProject(data[0]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Show a basic loader while fetching data
    return (
      <div className="p-4 flex justify-center items-center min-h-[200px]">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }

  if (!project) {
    // If we have no project data (e.g., empty array from API)
    return <div className="p-4">No user data found.</div>;
  }

  // Display the fetched data
  return (
    <div className="p-4  bg-[#F3F4F6]">


      <div className="bg-white p-4 border flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p>
          <strong>Author:</strong> {project.author}
        </p>

        {/* Using ReactQuill in read-only mode for the content */}
        <ReactQuill
          value={project.content}
          readOnly={true}
          modules={quillModules}
          formats={quillFormats}
          className="bg-white"
        />

        <p>
          <strong>Tags:</strong> {project.tags}
        </p>

        <p>
          <strong>Created at:</strong>{" "}
          {new Date(project.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default UserData;
