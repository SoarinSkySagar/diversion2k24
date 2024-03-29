
import React from 'react';

export default function SelectPage() {

    return (
        <section>
            <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center border-2 border-gray-300 p-4 mr-4">
                    <a href='/supdate' className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        <img src="/teach.jpg" alt="Image 1" className="mb-4" />
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center border-2 border-gray-300 p-4">
                    <a href='/tupdate' className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        <img src="/stude.jpg" alt="Image 2" className="mb-4" />
                    </a>
                </div>
            </div>
        </div>
        </section>
    )
    
}

