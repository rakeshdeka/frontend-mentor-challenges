import React from 'react'
import qrCode from "../assets/image-qr-code.png"

const Card = () => {
    return (
        <div className='w-[300px] h-[500px]  rounded-xl flex justify-center items-center sm:w-[300px] sm:h-[500px] bg-white '>
            <div className='h-[94%] w-[89%]  flex flex-col gap-2'>
                <div className=' object-fill rounded-xl h-[57%] '>
                    <img className=' object-fill w-[100%] h-[100%] rounded-xl' src={qrCode} alt="qrCode" />
                </div>
                <div className='h-[18%] w-[99%] flex justify-center'>
                    <p className='font-Outfit text-center font-bold text-[1.30rem] pt-2'>
                        Improve you front-end skills by building projects
                    </p>


                </div>
                <div className='h-[20%]  '>
                    <p className='text-center font-Outfit text-[#7b879d]'>
                        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Card