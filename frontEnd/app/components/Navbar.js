"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname} from "next/navigation";

const Navbar = ({logged, id}) => {

  const pathname = usePathname();

  const href=`/login/${logged}`;

  return (
    <div className="w-full bg-black text-pink-600 p-2 flex md:flex-row flex-col gap-4 justify-between items-center ">
      <Image src="https://seeklogo.com/images/B/blackpink-logo-77A395F684-seeklogo.com.png" width={100} height={300} alt="blackpink-logo"/>
      <div className="flex justify-around items-center gap-9 text-2xl font-bold md:border-0 py-1 border-t-[1px] border-white">
        <Link href={href} className={pathname==`/login/${logged}` ? "text-lime-500 underline" : ""}>Home</Link>
        <Link href="/about" className={pathname=="/about" ? "text-lime-500 underline" : ""}>About</Link>
        <Link href="/">Logout</Link>
      </div>
      {logged!="undefined" ? <div className="text-2xl text-purple-500 font-bold cursor-none">{logged}</div> : <></>}
      
    </div>
  )
}

export default Navbar
