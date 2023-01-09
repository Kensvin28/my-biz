import React from "react";
import {useState} from 'react';

//https://www.spguides.com/upload-file-in-react-js/
const MAX_FILE = 10;

function FileUpload() {
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);

    const handleUploadFiles = (files: any) => {
        const uploaded: any = [...uploadedFiles];
        let limitExceeded = false;
        // check if the file is already exists
        files.some((file: any) => {
            if (uploaded.findIndex((f: any) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_FILE) setFileLimit(true);
                //limit the number of file to be uploaded
                if (uploaded.length > MAX_FILE) {
                    alert(`You can only add a maximum of $ MaxFile} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) setUploadedFiles(uploaded)
    }

    const fileEventHandler = (e: any) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }

    return (
        <div className="App">
            {/*  display the uploaded files */}
            <input className='border border-solid border-gray-300 px-4 py-2 rounded m-2' id='fileUpload' type='file'
                   multiple
                   accept='application/pdf, image/png'
                   onChange={fileEventHandler}
                   disabled={fileLimit}
            />
            <div className="uploaded-files-list">
                {uploadedFiles.map((file: any, index) => (
                    <div>
                        {index + 1 + ". " + file.name}
                    </div>
                ))}
            </div>


        </div>
    );
}

function Documents() {
    return (
        <div>
            <div className="flex flex-col p-6 rounded-r-lg shadow-lg max-w-sm w-full mx-auto justify-center">
                <label className="font-semibold text-gray-700 block pb-1">Upload Your Supporting Documents:</label>
                <ul>
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                </ul>
                <div className="flex">
                    <FileUpload/>
                    {/*              <input id="documents" className="*/}
                    {/*  form-control*/}
                    {/*  block*/}
                    {/*  w-full*/}
                    {/*  px-4*/}
                    {/*  py-2*/}
                    {/*  my-2*/}
                    {/*  text-base*/}
                    {/*  font-normal*/}
                    {/*  text-gray-700*/}
                    {/*  bg-white bg-clip-padding*/}
                    {/*  border border-solid border-gray-300*/}
                    {/*  rounded*/}
                    {/*  transition*/}
                    {/*  ease-in-out*/}
                    {/*  m-0*/}
                    {/*  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none*/}
                    {/*" type="file" multiple/>*/}
                </div>
            </div>
        </div>
    );
}

export default Documents;