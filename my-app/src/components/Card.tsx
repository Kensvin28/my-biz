import React from 'react';


function Card({text, cardtitle, image}: { text: string | null, cardtitle: string | null, image: string | undefined }) {
    return (
        <div>
            <div className="flex justify-center m-5">
                <div
                    className="flex flex-col w-full md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
                    <img
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={image}/>
                    <div className="block p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 w-full">{cardtitle}</h5>
                        <p className="text-gray-700 text-base mb-4 w-full">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Card;