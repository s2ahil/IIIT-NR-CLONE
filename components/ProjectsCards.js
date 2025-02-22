import React from 'react'
import Link from 'next/link'
const ProjectsCards = ({ item, index }) => {
    return (
        <div className='w-full  flex justify-center items-center '>

                <Link

                   href={`/user/${item.id}`}
                    key={index}
                    className="p-6 border cursor-pointer  rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col gap-3 w-full max-w-4xl"
                >
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight  text-white hover:text-blue-500">
                        {item.title}
                    </h5>
                </Link>
          
        </div>

    )
}

export default ProjectsCards