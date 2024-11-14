import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center justify-center gap-3 px-10 py-7 border-pink-500 border-2'>
      <h1 className='text-3xl font-extrabold'>BLACKPINK QUIZ FEVER</h1>
      <p className='md:text-[2vw] text-[4vw] p-1 text-pink-500 font-bold'>Test Your Knowledge and become a certified BLINK!</p>
      <p className='text-lg font-semibold'>Hello, I Khushi Varshney, is very pleased to introduce the "BLACKPINK QUIZ FEVER", a meticulously designed online platform dedicated to challenge fans'knowledge of the iconic K-Pop Group, BLACKPINK. This Website is for all of those BLINKS like me who have loved BLACKPINK infinitely and will continue to adore, respect and protect them. With Eight Questions spanning their discography, music videos, and member facts, this quiz is perfect for enthusiasts and casual fans alike.</p>
      <p className='text-lg font-semibold py-3 pl-5 pr-5'>This Blackpink Fan Page aims to provide a very user-friendly and engaging environment for fans worldwide, fostering a sense of community and connection. Our Goal is to enhance the awareness of the BLINKS towards the group and their music videos as well as let them appreciate the contributions and achievements of the group, BLACKPINK.</p>
      <p className='md:text-[2vw] text-[4vw] font-extrabold py-2 text-pink-800'>BLACKPINK-BLINK UNIVERSE &hearts; Explore, Connect and Celebrate.</p>
      <div><Link href="/contact" className="bg-yellow-50 text-lg hover:bg-black hover:text-pink-700 hover:border-red-600 hover:text-xl hover:font-bold text-black border-pink-500 border-[3px] rounded-lg px-7 py-2">Contact Us</Link></div>
    </div>
    <Footer />
    </div>
  )
}

export default page

export const metadata = {
  title: "Blackpink Quiz : About",
  description: "Quiz Applicaton Using Next",
};