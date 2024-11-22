"use client"

import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useRouter } from 'next/navigation';



const page = () => {

  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const router = useRouter();

  const handleChange=(e)=>{
    const { name, value } = e.target
    setUser({
      ...user, [name]: value
    })
  }

  axios.defaults.withCredentials=false;

  const login = async()=>{
    const {email} = user;
    if(email.includes("@")){
      // axios.post("http://localhost:9002/login", user)
    axios.post("https://next-quiz-server.vercel.app/signup",user)
    .then(res => {
      toast(res.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      if(res.data.message=="Login Successfully"){
        router.push(`/login/${res.data.user[0].name}`)
      }
    })
    }else{
      toast("Invalid Inputs", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    
  }

  return (
    <div className="py-44 bg-blue-200 w-[100%] h-[100%]">
     <div className="flex justify-center text-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="border-[2px] border-black rounded-lg mx-20 my-4 py-7 px-10">
        <form>
          <div className="">
            <label className="form-label font-semibold mx-1 text-xl ">
              Email Address :{" "}
            </label>
            <input
              type="email"
              className="form-control border-[2px] px-1 py-[2px] text-[1.1rem] font-medium rounded-md border-pink-400 text-black"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />
            <div id="emailHelp" className="form-text p-1 text-pink-800">
              We'll never share your email with anyone else.
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label font-semibold mx-1 text-xl">
                Password :{" "}
              </label>
              <input
                type="password"
                value={user.password}
                onChange={handleChange}
                className="form-control border-[2px] px-1 py-[2px] text-[1.1rem] font-medium rounded-md border-pink-400 text-black"
                name="password"
                id="password"
              />
              <p className="mt-4">Log-In into your Account</p>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="btn mt-2 text-lg font-bold border-[2px] border-pink-700 rounded-lg px-5 bg-black text-white py-[2px] hover:text-black hover:bg-white hover:text-xl hover:py-[3px]" onClick={login}
                
              ><div className="flex gap-2 ">
                <lord-icon
                  src="https://cdn.lordicon.com/cgzlioyf.json"
                  trigger="hover"
                  colors="primary:#c7166f"
                  style={{width:'27px',height:'27px'}}
                ></lord-icon>
                LogIn
              </div>
              </div>
            </div>
            <div className="text-center py-1 font-semibold"><p>OR</p></div>
            <div className="flex items-center justify-center">
              <div className="btn mt-2 text-lg font-bold border-[2px] border-pink-700 rounded-lg px-5 bg-black text-white py-[2px] hover:text-black hover:bg-white hover:text-xl hover:py-[3px]"><Link href='/signup' className="flex gap-1"><lord-icon
                  src="https://cdn.lordicon.com/cgzlioyf.json"
                  trigger="hover"
                  colors="primary:#c7166f"
                  style={{width:'27px',height:'27px'}}
                ></lord-icon>Don't Have an Account : Register</Link></div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default page
