'use client'
import { Inter } from "next/font/google"
import { useState } from "react"

export default function Home(){
    const [selected, setSelected] = useState("sweet")
    return(
        <div className="flex justify-center h-screen">
            <div className="w-full">
                <p className="mt-7 ml-4 text-[24px] font-semibold font-inter">Build your pancake</p>
                <div className="mt-5 mx-4 justify-center">
                    <div className="flex w-full w-[350px] h-[50px] rounded-[12px] bg-neutral-500 p-1 gap-1">
                        <button 
                            onClick={() => setSelected("sweet")} 
                            className={`text-[16px] font-medium transition-all duration-100 ${selected === 'sweet' ? 'flex items-center bg-white h-full border rounded-[8px] border-none flex flex-1 max-w-1/2 pl-2': 'flex items-center h-full flex flex-1 max-w-1/2 pl-2'}`}
                        >
                            Sweet
                        </button>
                        <button 
                            onClick={() => setSelected("savoury")} 
                            className={`text-[16px] font-medium transition-all duration-100 ${selected === 'savoury' ? 'flex items-center bg-white h-full border rounded-[8px] border-none flex flex-1 max-w-1/2 pl-2': 'flex items-center h-full flex flex-1 max-w-1/2 pl-2'}`}
                        >
                            Savoury
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}