import React from 'react'
import ThankYouImg from "../assets/illustration-thank-you.svg"

const ThankYou = () => {
    return (
        <div className='h-[90%] w-[90%]   flex flex-col gap-1 '>
            <div className='h-[40%] flex justify-center items-center'>
                <img src={ThankYouImg} alt="" />

            </div>
            <div className='h-[15%]   flex justify-center items-center'>
                <div className='h-[80%]  w-[60%] rounded-3xl bg-[#343538] flex justify-center items-center'>
                    <p className='text-[#fb74138e] font-Overpass'> You selected 4 out of 5</p>
                </div>
            </div>
            <div className='h-[20%]  flex justify-center items-center'>
                <p className='font-Overpass text-white font-semibold text-3xl'>Thank you!</p>
            </div>
            <div className='h-[25%]  flex justify-center'>
                <p className='text-[#959eac] font-Overpass text-center'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>

        </div>
    )
}


export default ThankYou