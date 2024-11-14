import Script from "next/script";
import "./globals.css";
import { BrowserRouter } from "react-router-dom";

export const metadata = {
  title: "Blackpink Quiz Fever",
  description: "Quiz Applicaton Using Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
      <Script src="https://cdn.lordicon.com/lordicon.js"></Script>     
        {children}
      </body>
    </html>
  );
}
