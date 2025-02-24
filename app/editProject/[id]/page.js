"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useRouter,useParams } from 'next/navigation'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

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

const EditProject = () => {
    const router = useRouter();

    const { id } = useParams()
   const projectId=id
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        if (projectId) {
            fetchProject();
        }
    }, [projectId]);

    const fetchProject = async () => {
        try {
            const res = await fetch(`/api/userData/${id}`);
            if (!res.ok) throw new Error("Failed to fetch project data");
            const data = await res.json();
            console.log("data", data)
           
            setTitle(data[0].title);
            setContent(data[0].content);
            setTags(data[0].tags);
            setAuthor(data[0].author);
        } catch (error) {
            console.error("Error fetching project:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setUpdating(true);

        try {
            const res = await fetch(`/api/project/${projectId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content, tags, author }),
            });
            if (!res.ok) throw new Error("Failed to update project");
            router.push("/projectShowcase");
        } catch (error) {
            console.error("Error updating project:", error);
            alert("Error updating project");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) return <p className="text-center">Loading project...</p>;


    console.log("content"+content)
    return (
        <div className="grid items-center bg-[#F5F5F5] h-full">
            <form onSubmit={handleUpdate} className="m-4">
                <div className="flex flex-col bg-white rounded-xl p-5 gap-5">
                    <h1 className="text-xl font-bold">Edit Project</h1>
                    <input
                        type="text"
                        placeholder="Project Title"
                        className="p-3 border-2 text-xl font-medium w-full"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <ReactQuill
                        placeholder="Edit your project content..."
                        onChange={(value) => setContent(value)}
                        modules={quillModules}
                        formats={quillFormats}
                        value={content}
                        className="w-full h-[70%] bg-white"
                    />
                    <input
                        type="text"
                        placeholder="Tags (e.g. tag1,tag2)"
                        className="p-3 border-2 w-full"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Author Name"
                        className="p-3 border-2 w-full"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        disabled={updating}
                        className="bg-blue-500 text-white w-[10rem] rounded-xl p-3 hover:bg-blue-800"
                    >
                        {updating ? "Updating..." : "Update"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProject;
