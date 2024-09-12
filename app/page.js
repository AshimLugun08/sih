import Image from "next/image";
import { Navbar } from "./Components/navbar";
import { Section2 } from "./Components/section2";
import { Section3 } from "./Components/section3";
import { MainHome } from "./Components/mainHome";
import { Section4 } from "./Components/section4";
import { Section5 } from "./Components/section5";
import { Section6 } from "./Components/section6";
import NewsletterAndFooter from "./Components/footer";

export default function Home() {
  return (
    <div className="">
      {/* Navbar */}
      <div className="px-4 py-1 h-auto bg-bgblue "><Navbar/></div>

      {/* Main Section */}
      <div className="md:px-4 md:py-8 bg-bgblue">
      <MainHome/>
      </div>

      {/* Section 2 */}
      <div className="mt-8 md:mt-12 lg:mt-16 px-4">
        <Section2 />
      </div>

      {/* Section 3 */}
      <div className="mt-8 md:mt-12 lg:mt-16 px-4">
        <Section3 />
      </div>

      {/* Section 4 */}
      <div className='mt-8 md:mt-12 lg:mt-16 px-4'>
    <Section4/>
      </div>
      {/* Section 5*/}
      <div className='mt-8 md:mt-12 lg:mt-16 px-4'>
    <Section5/>
      </div>
      {/* Section 6*/}
      <div className='mt-8 md:mt-12 lg:mt-16 px-4'>
    <Section6/>
      </div>
       {/* Section */}
       <div className='mt-8 md:mt-12 lg:mt-16 px-4'>
    <NewsletterAndFooter/>
      </div>
    </div>
  );
}
