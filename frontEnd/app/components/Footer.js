import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-5 py-3 bg-black">
      <div className="md:grid grid-cols-2 flex flex-col gap-5">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <lord-icon
              src="https://cdn.lordicon.com/mahizafr.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#911051,secondary:#911710"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
            <p className="text-lg text-pink-500 font-semibold">8279530928</p>
          </div>
          <div className="flex items-center gap-3">
            <lord-icon
              src="https://cdn.lordicon.com/jeuxydnh.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#911051,secondary:#911710"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
            <p className="text-lg text-pink-500 font-semibold">
              Sanjay Nagar, Bareilly (Uttar Pradesh), India.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <lord-icon
              src="https://cdn.lordicon.com/vpbspaec.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#911051,secondary:#911710"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
            <p className="text-lg text-pink-500 font-semibold">
              anuragkhushi703@gmail.com
            </p>
          </div>
          <div className="m-3">
          <Link className="text-white border-[2px] hover:border-green-200 border-pink-400 m-7 font-semibold hover:font-bold rounded-[3px] hover:text-purple-400 py-1 text-lg px-8" href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="text-pink-500 md:border-0 py-1 border-t-[1px] border-white">
          <h2 className="text-2xl font-bold py-1 underline">About The Company</h2>
          <h4 className="text-lg py-1 font-medium font-serif text-pink-300">
            Hello, This is Khushi Varshney. I am a Frontend Developer and Java
            Developer as well. I have designed this application for all the
            blinks who want to test their knowledge when it comes to BLACKPINK.
          </h4>
          <div className="flex flex-row gap-2">
            <Link href="https://www.instagram.com/khushi_varshney07?igsh=MXZ6ZzJqODBjMTF0dw==">
              <lord-icon
                src="https://cdn.lordicon.com/ewswvzmw.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#911051,secondary:#911710"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
            </Link>
            <Link href="https://www.linkedin.com/in/khushi-varshney-083242293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <lord-icon
                src="https://cdn.lordicon.com/dsdlqjde.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#911051,secondary:#911710"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
            </Link>
            <Link href="https://github.com/khushi-varshney">
              <lord-icon
                src="https://cdn.lordicon.com/yvjimpju.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#911051,secondary:#911710"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-2xl text-pink-400 border-t-[2px] border-white font-medium py-1 text-center">Copyright &copy; 2024 &hearts; Designed by Khushi Varshney</div>
    </div>
  );
};

export default Footer;
