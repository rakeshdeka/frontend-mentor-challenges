import React from 'react'
import qrCode from "../assets/image-qr-code.png"

const Card = () => {
    return (
        <div className='w-[64%] h-[65%]  rounded-xl flex justify-center items-center sm:w-[25%] sm:h-[70%]  bg-white'>
            <div className='h-[90%] w-[85%]  flex flex-col gap-2'>
                <div className=' object-fill rounded-xl h-[57%] '>
                    <img className=' object-fill w-[100%] h-[100%] rounded-xl' src={qrCode} alt="qrCode" />
                </div>
                <div className='h-[20%]  flex justify-center'>
                    <p className='font-Outfit text-center font-bold text-[1.30rem]'>
                        Improve you front-end skills by building projects
                    </p>


                </div>
                <div className='h-[20%] border border-[yellow] '>
                    <p className='text-center font-Outfit'>
                        Scan the QR code to visit Frontend Mentor and take your coding skills to next level
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Card