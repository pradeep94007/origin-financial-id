"use client"
import React, { ChangeEvent, DragEvent } from 'react'
type AdminImageDragAndDropProps = {
    title: string;
    maxFileSize: string;
    acceptedFileTypes: string;
};

function AdminImageDragAndDrop({ title, maxFileSize, acceptedFileTypes }: AdminImageDragAndDropProps) {

    const handleFileDrop = (event: DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        const files: FileList = event.dataTransfer.files;
    };
    
    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>): void => {
        const files: FileList = event.target.files!;
    };
    return (
        <div className="bg-[#EFF3F9] rounded-md  py-2 px-4 ">
            <div className="flex justify-start items-center">
                <h1 className="text-xl font-bold w-3/4">{title}</h1>
                <button className="flex justify-center items-center">
                    Save changes
                </button>
            </div>
            <div className="bg-white  my-3">
                <div
                    className="border-2 border-dashed border-[#B2ADF4] p-6 rounded-lg bg-white w-full text-center"
                    onDrop={(e) => handleFileDrop(e)}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <p className="mb-4">Drop your file here</p>
                    <p className="mb-4">or</p>
                    <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        onChange={(e) => handleFileSelect(e)}
                    />
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer border-2  border-[#B2ADF4] text-[#B2ADF4] px-4 py-2 rounded  hover:bg-purple-700 hover:text-white transition duration-200"
                    >
                        Select File
                    </label>
                    <p className="mt-4 text-sm text-gray-500">
                        Accepted file types:
                    </p>
                    <p className="text-sm text-gray-500">
                        {acceptedFileTypes}

                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        Maximum file size: <span className="font-bold">{maxFileSize}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdminImageDragAndDrop