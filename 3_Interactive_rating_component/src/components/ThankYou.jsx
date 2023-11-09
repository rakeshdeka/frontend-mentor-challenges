import React from 'react'
import ThankYouImg from "../assets/illustration-thank-you.svg"

const ThankYou = ({ rating }) => {
    return (
        <div className='h-[90%] w-[89%]   flex flex-col gap-1'>
            <div className='h-[40%] flex justify-center items-center'>
                <img src={ThankYouImg} alt="" />

            </div>
            <div className='h-[15%] flex justify-center items-center'>
                <div className='h-[70%]  w-[55%] rounded-3xl bg-[#333e4d85] flex justify-center items-center'>
                    <p className='text-[#fb74138e] text-[.9rem] font-Overpass'> You selected {rating} out of 5</p>
                </div>
            </div>
            <div className='h-[20%]  flex justify-center items-center'>
                <p className='font-Overpass text-white font-[600] text-2xl'>Thank you!</p>
            </div>
            <div className='h-[25%]  flex justify-center'>
                <p className='text-[#959eac] font-Overpass text-[1rem] text-center'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>

        </div>
    )
}


export default ThankYou