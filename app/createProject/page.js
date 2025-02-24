"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";

// Dynamically import ReactQuill so it doesn’t break on SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Quill config
const quillModules = {
    toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ align: [] }],
        [{ color: [] }],
        ["code-block"],
        ["clean"],
    ],
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

const CreateProject = () => {
    const router = useRouter();

    // Form fields
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const [author, setAuthor] = useState("");

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // POST to your API route
            const response = await fetch("/api/project/new", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content, tags, author }),
            });

            if (!response.ok) {
                throw new Error("Failed to create project");
            }

            // Optionally get the newly created project data
            const newProject = await response.json();
            console.log("New project created:", newProject);
      
            // Redirect or reset form
            router.push("/projectShowcase"); // e.g., go to homepage or a projects list
        } catch (error) {
            alert(error)
            console.error("Error creating project:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="grid items-center bg-[#F5F5F5] h-full">
            <form onSubmit={handleSubmit} className="m-4">
                <div className="flex flex-col bg-white rounded-xl p-5 gap-5">
                    <h1 className="text-xl font-bold">Create a New Project</h1>

                    {/* Title */}
                    <input
                        type="text"
                        placeholder="Project Title"
                        className="p-3 border-2 text-xl font-medium w-full"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    {/* ReactQuill Editor for Content */}
                    <div className="w-full ">
                        <ReactQuill

                            placeholder="Tell your story ..."
                            onChange={(value) => setContent(value)}
                            modules={quillModules}
                            formats={quillFormats}
                            value={content}
                            className="w-full   h-[70%]  bg-white ">

                        </ReactQuill>
                    </div>


                    {/* Tags */}
                    <input
                        type="text"
                        placeholder="Add your tags here (e.g. tag1,tag2)"
                        className="p-3 border-2 w-full"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />

                    {/* Author */}
                    <input
                        type="text"
                        placeholder="Author Name eg @sam"
                        className="p-3 border-2 w-full"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="bg-blue-500 text-white w-[10rem] rounded-xl p-3 hover:bg-blue-800"
                    >
                        {submitting ? "Publishing..." : "Publish"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;
