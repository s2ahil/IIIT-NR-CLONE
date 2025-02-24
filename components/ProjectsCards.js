import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectsCards = ({ item, index }) => {
    return (
        <div className='w-full  flex justify-center items-center '>

            <Link

                href={`/user/${item.id}`}
                key={index}
                className="p-6 border cursor-pointer  rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col gap-3 w-full max-w-4xl"
            >

                <div className='flex gap-2 items-center '>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle text-blue-500" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                    <p className='text-white'>{item.author.includes("@") ? item.author : <div>{`@` + `${item.author}`}</div>}</p></div>


                <h5 className="mb-2 text-2xl font-semibold tracking-tight  text-white hover:text-blue-500">
                    {item.title.length > 50 ? <div>{item.title.slice(0, 50)}...</div> : <div>{item.title}</div>}
                </h5>
                <p className='text-gray-400'>{item.tags}</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 bg-red-400 rounded-full p-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg> 
            </Link>

        </div>

    )
}

export default ProjectsCards