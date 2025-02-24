"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function PasswordPage() {
  const [passwordInput, setPasswordInput] = useState("");
  const router = useRouter();


  console.log(process.env.NEXT_PUBLIC_AUTH_PASSWORD)
  
  const checkPassword = () => {
 
    if (passwordInput ===process.env.NEXT_PUBLIC_AUTH_PASSWORD) {
      Cookies.set("auth", passwordInput, { expires: 1 }); // Save in cookies for 1 day
      router.push("/manageProjects"); // Redirect to a protected page
    } else {
      alert("Incorrect password only admin are allowed to change or edit project , for any query contact sahilpradhan411@gmail.com");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-lg font-bold mb-4">Enter Password to Access</h2>
        <input
          type="password"
          className="border p-2 w-full"
          placeholder="Enter Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 mt-3 rounded"
          onClick={checkPassword}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
