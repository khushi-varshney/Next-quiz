"use client"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    text: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //connecting with firebase
  const onSubmit = async(form) => {
    const res = await fetch("https://reactcontactformfirebase-default-rtdb.firebaseio.com/userMessageBlackpink.json",{
      method: "POST", 
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({form})
    })
    if(res){
      toast("Submit Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setForm({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        text: "",
      });
    }else{
      toast("Enter Valid Data", {
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
  };

  return (
    <div>
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
      <Navbar />
      <form method="POST"
        className="bg-black py-[6vw] h-[90vh] border-t-[1px] border-b-[2px] border-white"
        onSubmit={(e) => {
          e.preventDefault();
          if(form.phone.length!=10){
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
          }else{
            onSubmit(form);
          }
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="p-1 text-pink-500 font-bold text-xl">
            Name : &nbsp; *&nbsp;
            <input
              onChange={handleChange}
              type="text"
              value={form.fullName}
              name="fullName"
              className="p-1 m-1 rounded-xl text-black"
              placeholder="Your Full Name"
              required
            />
          </p>
          <p className="p-1 text-pink-500 font-bold text-xl">
            Email : &nbsp; *&nbsp;
            <input
              onChange={handleChange}
              type="email"
              value={form.email}
              name="email"
              className="p-1 m-1 rounded-xl text-black"
              placeholder="example@gmail.com"
              required
            />
          </p>
          <p className="p-1 text-pink-500 font-bold text-xl">
            Phone : &nbsp; *&nbsp;
            <input
              onChange={handleChange}
              type="number"
              value={form.phone}
              name="phone"
              className="p-1 m-1 rounded-xl text-black"
              placeholder="Mobile Number"
              required
            />
          </p>
          <p className="p-1 text-pink-500 font-bold text-xl">
            Subject : &nbsp; *&nbsp;
            <input
              onChange={handleChange}
              type="text"
              value={form.subject}
              name="subject"
              className="p-1 m-1 rounded-xl text-black"
              placeholder="Subject"
            />
          </p>
          <textarea
            onChange={handleChange}
            placeholder="Drop a Message"
            value={form.text}
            name="text"
            className="p-3 m-1 mt-3 md:w-[39vw] md:h-[13vw] h-[40vw] w-[77vw] rounded-xl text-black font-bold text-xl "
            required
          />
          <div className="bttn">
            <button className="bg-yellow-50 text-xl hover:bg-black hover:text-pink-700 hover:border-red-600 hover:text-xl hover:font-bold text-black border-pink-500 border-[3px] rounded-xl px-7 py-2 mt-5">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default page

// export const metadata = {
//     title: "Blackpink Quiz : Contact",
//     description: "Quiz Applicaton Using Next",
// };