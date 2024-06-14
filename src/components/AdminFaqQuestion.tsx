import React from 'react'

type AdminFaqQuestionProps = {
    title: string;
    description: string;
}

export default function AdminFaqQuestion({ title, description }: AdminFaqQuestionProps) {
    return (
        <div className="w-full  bg-[#EFF3F9] px-6 py-4 rounded mt-3">
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <p>{description}</p>
        </div>
    )
}
