import React from 'react'
import Summary from "./Summary"
import Result from './Result'


export const Card = () => {
    return (
        <>
            <div className="h-[100vh] flex justify-center items-center  ">
                <div className='flex  justify-center items-center  w-[700px] h-[500px] rounded-3xl shadow-2xl'>
                    <Result />
                    <div className='h-[100%] w-[50%] flex flex-col justify-evenly items-center'>
                        <Summary />
                    </div>
                </div>
            </div >

        </>
    )
}
