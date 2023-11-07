import React from 'react'
import Summary from "./Summary"
import Result from './Result'


export const Card = () => {
    return (
        <>
            <div className="h-[100vh] flex justify-center items-center">

                <div className='flex flex-col justify-center items-center  w-[100%] h-[100%] rounded-3xl shadow-2xl sm:flex-row sm:w-[650px] sm:h-[500px]'>
                    <Result />
                    <div className='h-[100%] w-[90%] flex flex-col justify-evenly items-center'>
                        <Summary />
                    </div>
                </div>
            </div >
        </>
    )
}
