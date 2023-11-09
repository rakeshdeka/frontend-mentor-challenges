import React, { useState } from 'react'
import star from "../assets/icon-star.svg"


const Rate = ({ setRating, setSelectedRating, selectedRating }) => {
    const [backgroundColor, setBackgroundColor] = useState(false)
    // console.log(backgroundColor);
    const ratingValue = [

        {
            star: "1"
        },
        {
            star: "2"
        },
        {
            star: "3"
        },
        {
            star: "4"
        },
        {
            star: "5"
        }

    ]
    const handleRating = (selectRating) => {
        // console.log(`click rating ${selectRating}`);

        setSelectedRating(selectRating)
    }

    const handleSumbitRating = () => {

        setRating(selectedRating)

    }

    return (
        <div className='h-[85%] w-[90%]  flex flex-col gap-2 '>

            <div className='h-[17%]   '>
                <div className='  flex justify-center items-center h-[45px] w-[45px] rounded-full bg-[#333e4d85]'>
                    <img className='w-4' src={star} alt="star" />
                </div>
            </div>
            <div className='h-[15%]  '>
                <h1 className='font-Overpass font-semibold text-[1.6rem]  sm:text-[1.8rem] text-white'>How did we do? </h1>
            </div>
            <div className='h-[25%] '>
                <p className=' text-[1rem]  font-Overpass text-[#959eac]'>
                    Please let use know how we did with your support request. Akk feedback is appreciated to help us imporove our offering!
                </p>
            </div>
            <div className='h-[20%]  flex justify-center gap-6  text-[#959eac] '  >
                {ratingValue.map((rateValue, index) => (
                    <p className={`h-[50px] w-[50px] rounded-full  flex justify-center items-center hover:bg-[#fb7413] hover:text-white font-semibold cursor-pointer ${backgroundColor === index ? 'bg-[#7c8798] text-white' : 'bg-[#333e4d85] text-[#959eac]'
                        }`} key={index} onClick={() => { handleRating(rateValue.star); setBackgroundColor(index); }} >{rateValue.star}</p>
                ))}

            </div>

            <div className='h-[12%] '>
                <div className=' cursor-pointer h-[100%]  font-Overpass text-center text-[.8rem] flex justify-center items-center rounded-3xl bg-[#fb7413] text-white hover:bg-[white] hover:text-[#fb7413] tracking-widest  hover:font-semibold' onClick={handleSumbitRating}>
                    SUMBIT
                </div>
            </div>

        </div>
    )
}

export default Rate