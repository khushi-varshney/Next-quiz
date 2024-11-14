"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { data } from '../utils/data';
import Link from 'next/link';

const page = ()=>{
  const [currentQuestion, setCurrentQuestion]=useState(0);
  const [score, setScore] = useState(0)
  const [selectedAnswer,setSelectedAnswer]=useState(null);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(()=>{
    const timer = setInterval(()=>{
      if(timeLeft>0){
        setTimeLeft((prevTimeLeft)=>prevTimeLeft-1);
      }else{
        handleNextQuestion();
      }
    },1000);
    return ()=>clearInterval(timer);
  },[timeLeft]);

  const handleChange=useCallback((event)=>{
    setSelectedAnswer(event.target.value)
  })

  const handleNextQuestion=()=>{
    if(selectedAnswer===data[currentQuestion].answer){
      setScore((prevScore)=>prevScore+1);
    }
    setCurrentQuestion((prevCurrentQuestion)=>prevCurrentQuestion+1);
    setSelectedAnswer(null);
    setTimeLeft(10);
  };

  const href=`/login/undefined`

  if(currentQuestion>=data.length){
       return(
        <div className='h-[100vh] bg-pink-600 flex justify-center items-center'>
          <div className='gap-7 py-4 flex flex-col justify-center items-center bg-pink-600 text-black'>
          <h1 className='text-7xl underline'>Quiz Finished</h1>
          <h3 className='text-5xl '>Your Score : {score}</h3>
          <h6 className='text-3xl'>Thanks for Playing !</h6>
          <Link href={href}><button className='border-[2px] border-black text-2xl py-1 px-7 bg-pink-400 hover:bg-black hover:font-bold hover:text-pink-500'>Go Back</button></Link>
        </div>
        </div>
       )
  }

  return (
  <div className="flex h-[100vh] justify-center items-center text-center py-[10.2rem] bg-black">
    <div className='flex justify-center items-center self-center bg-white'>
      <div className='Box py-7 px-10 border-[2px] rounded-[5px] border-pink-600'>
        <div className=' flex md:flex-row flex-col items-center gap-5 md:gap-32'>
          <p className='text-xl font-bold '>{data.at(currentQuestion).question}</p>
          <p className='flex items-center gap-1 text-lg font-semibold self-end'>
            <lord-icon
                  src="https://cdn.lordicon.com/psyssele.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#911051,secondary:#911710"
                  style={{ width: "50px", height: "50px" }}
            ></lord-icon> : {timeLeft} Seconds
          </p>
        </div>
        <div className='py-5 quiz'>
          <div>
            <div className='flex flex-col gap-5 text-lg font-serif font-medium'>
              {data[currentQuestion].options.map((option,index)=>(
                <p key={index} className='flex items-center gap-3'><input type="radio" name={option} value={option} checked={selectedAnswer===option} onChange={handleChange} /><span>{option}</span></p>
              ))}      
            </div>
            <div className='flex md:justify-end justify-start pt-3 gap-5 items-center'>
              {currentQuestion==7 ? <button className="hidden bg-yellow-50 text-xl font-semibold hover:bg-black hover:text-pink-700 hover:border-red-600 hover:text-xl hover:font-bold text-black border-pink-500 border-[3px] rounded-xl px-7 py-2 mt-5">
                 Next
              </button> : <button onClick={()=>handleNextQuestion()} className=" bg-yellow-50 text-xl font-semibold hover:bg-black hover:text-pink-700 hover:border-red-600 hover:text-xl hover:font-bold text-black border-pink-500 border-[3px] rounded-xl px-7 py-2 mt-5">
                 Next
              </button>}
              {currentQuestion==7 ? <button onClick={()=>setCurrentQuestion(9)}  className="bg-yellow-50 text-xl font-semibold hover:bg-black hover:text-pink-700 hover:border-red-600 hover:text-xl hover:font-bold text-black border-pink-500 border-[3px] rounded-xl px-7 py-2 mt-5">
                Submit
              </button> : <button className="bg-yellow-50 hidden text-xl font-semibold hover:bg-black hover:text-pink-700 hover:border-red-600 hover:text-xl hover:font-bold text-black border-pink-500 border-[3px] rounded-xl px-7 py-2 mt-5">
                Submit
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page;