'use client';
import { motion } from "framer-motion";
import HeroSlider from "@/component/HeroSlider";
import TechnoHome from "@/component/TechnoHome";
import PortfolioHome from "@/component/PortfolioHome";
import EventHome from "@/component/EventHome";
import img1 from '/public/image/home/box1.jpg';
import img2 from '/public/image/home/box2.png';
import img3 from '/public/image/home/box3.jpg';
import img4 from '/public/image/home/box4.png';
import img5 from '/public/image/home/box5.png';
import img6 from '/public/image/home/box6.png';


export default function Home() {



  return (
    <>
      {/* BANNER Start */}
      <HeroSlider />
      {/* BANNER End */}

      {/* Box Start */}
      <section className='mt-14 mb-15 px-4 md:px-14'>
        <h2 className='text-2xl text-center text-gray-600 mb-7'>
          PN INFOSYS is a leading global business consulting and IT service company, Whether you need to run your business more efficiently or accelerate revenue growth, PN INFOSYS can get you there.
        </h2>

        <div className='flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6'>
          {/* Card 1 */}
          <div className='bg-white shadow-[#00000024] shadow-lg flex flex-col items-center rounded-xl group flex-grow md:flex-shrink-0 w-full sm:w-[45%] md:w-[300px]'>
            <div className='py-2 px-6 mt-8 rounded-[60px] shadow-[#00000024] place-items-center w-34 h-31 mx-auto grid shadow-lg transition-all duration-600 group-hover:-translate-y-2 ease-in-out group-hover:shadow-blue-500'>
              <img src={img1.src} className='w-full pt-3' alt='' />
            </div>
            <div>
              <h1 className='text-[27px] leading-7 font-medium pt-8 pb-6 text-center'>
                Collaborative <br /> Spirit
              </h1>
              <p className='text-[#716f95] text-[17px] px-2 pb-15 text-center'>
                We believe in developing true partnerships and making clients happy.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-white shadow-[#00000024] shadow-md flex flex-col items-center rounded-xl group flex-grow md:flex-shrink-0 w-full sm:w-[45%] md:w-[300px]'>
            <div className='py-2 px-6 mt-8 rounded-[60px] shadow-[#00000024] shadow-md place-items-center w-34 h-31 mx-auto grid transition-all duration-600 group-hover:-translate-y-2 ease-in-out group-hover:shadow-xl group-hover:shadow-blue-500'>
              <img src={img2.src} className='w-full pt-3' alt='' />
            </div>
            <div>
              <h1 className='text-[27px] leading-7 font-medium pt-8 pb-6 text-center'>
                Expert <br /> Thinking
              </h1>
              <p className='text-[#716f95] text-[17px] px-2 pb-15 text-center'>
                We bring robust skill and forward-looking perspectives to solve customer challenges.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-white shadow-[#00000024] shadow-md flex flex-col items-center rounded-xl group flex-grow md:flex-shrink-0 w-full sm:w-[45%] md:w-[300px]'>
            <div className='py-2 px-6 mt-8 rounded-[60px] shadow-[#00000024] shadow-md place-items-center w-34 h-31 mx-auto grid transition-all duration-600 group-hover:-translate-y-2 ease-in-out group-hover:shadow-xl group-hover:shadow-blue-500'>
              <img src={img3.src} className='w-full pt-3' alt='' />
            </div>
            <div>
              <h1 className='text-[27px] leading-7 font-medium pt-8 pb-6 text-center'>
                Exorbitant Dedication
              </h1>
              <p className='text-[#716f95] text-[17px] px-2 pb-15 text-center'>
                PN Infosys is driven to meet client needs with determination and grit. We embrace tough challenges.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className='bg-white shadow-[#00000024] shadow-md flex flex-col items-center rounded-xl group flex-grow md:flex-shrink-0 w-full sm:w-[45%] md:w-[300px]'>
            <div className='py-2 px-6 mt-8 rounded-[60px] shadow-[#00000024] shadow-md place-items-center w-34 h-31 mx-auto grid transition-all duration-600 group-hover:-translate-y-2 ease-in-out group-hover:shadow-xl group-hover:shadow-blue-500'>
              <img src={img4.src} className='w-full pt-3' alt='' />
            </div>
            <div>
              <h1 className='text-[27px] leading-7 font-medium pt-8 pb-6 text-center'>
                Industrial <br /> Training
              </h1>
              <p className='text-[#716f95] text-[17px] px-2 pb-15 text-center'>
                We provide free Industrial Internship to novice undergraduates. Basically our aim is to help students.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Box End */}






      {/* Middle Start */}
      <section className="bg-[#009df2] text-white py-12 px-4 mb-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center pt-14 pb-14 gap-10 md:w-[73%] mb-10">

          {/* Left Side */}
          <div className="flex-1 space-y-6">
            <p className="text-3xl md:text-4xl font-bold text-white pb-12 leading-[1.4]">
              Learning environment, Free <br /> Internship to novice students.
            </p>
            {/* Box 1 */}
            <div className="flex items-start gap-4 pb-4">
              <div className="bg-white text-red-600 rounded-full w-52 h-15 sm:w-32 sm:h-17 md:w-58 md:h-16 lg:w-36 lg:h-16 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white">
                <i className="fa-solid fa-laptop text-xl sm:text-2xl md:text-3xl lg:text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">WEB DESIGNING</h3>
                <p className="text-md text-white leading-6">
                  Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-start gap-4 pb-4">
              <div className="bg-white text-red-600 rounded-full w-52 h-15 sm:w-32 sm:h-17 md:w-58 md:h-16 lg:w-36 lg:h-16 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white">
                <i className="fa-solid fa-laptop text-xl sm:text-2xl md:text-3xl lg:text-3xl"></i>
              </div>              <div>
                <h3 className="font-bold text-xl mb-2">WEB DEVELOPMENT
                </h3>
                <p className="text-md text-white leading-6">
                  Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-start gap-4 pb-4">
              <div className="bg-white text-red-600 rounded-full w-52 h-15 sm:w-32 sm:h-17 md:w-58 md:h-16 lg:w-36 lg:h-16 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white">
                <i className="fa-solid fa-mobile-screen-button text-xl sm:text-2xl md:text-3xl lg:text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">APP DEVELOPMENT</h3>
                <p className="text-md text-white leading-6">
                  Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="flex items-start gap-4">
              <div className="bg-white text-red-600 rounded-full w-52 h-15 sm:w-32 sm:h-17 md:w-58 md:h-16 lg:w-36 lg:h-16 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white">
                <i className="fa-solid fa-laptop text-xl sm:text-2xl md:text-3xl lg:text-3xl"></i>
              </div>              <div>
                <h3 className="font-bold text-xl mb-2">ANGULAR, PYTHON, DJANGO, LARAVEL
                </h3>
                <p className="text-md text-white leading-6">
                  Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side Image */}
          < motion.div className="flex-1 flex justify-center mt-24"
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img
              src={img5.src}
              alt="services"
              className="w-full max-w-md"
            />
          </motion.div>

        </div>
      </section>
      {/* Middle End */}


      {/* Technology Start */}
      <TechnoHome />
      {/* Technology End */}


      {/* Portfolio Start */}
      <PortfolioHome />
      {/* Portfolio End */}

      {/* Service Start */}
      <section className="bg-[#009df2] text-white py-12 px-4 mb-16 overflow-x-hidden">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mt-16 mb-16">Our Services</h2>

        <div className="container mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full md:w-[73%] mb-24">

          {/* Left Side */}
          <div className="flex-1 space-y-6">

            {/* Box 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-white text-red-600 rounded-full w-24 h-8 sm:w-20 sm:h-11 md:w-48 md:h-12 lg:w-40 lg:h-20 2xl:w-24 2xl:h-12  flex items-center justify-center text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white">
                <i className="fas fa-lightbulb text-sm md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">INNOVATIVE Ideas</h3>
                <p className="text-sm sm:text-md leading-5 sm:leading-6">
                  PN INFOSYS believes in developing true partnerships. We foster a collegial environment where individual perspectives are respected and honest dialogue is expected.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-white text-red-600 rounded-full w-24 h-8 sm:w-20 sm:h-11 md:w-52 md:h-11 lg:w-40 lg:h-16 2xl:w-28 2xl:h-12  flex items-center justify-center text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white">
                <i className="fa fa-server text-sm md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">CREATIVE Designing</h3>
                <p className="text-sm sm:text-md leading-5 sm:leading-6">
                  PN INFOSYS brings robust skills and forward looking perspectives to solve customer challenges. We use proven knowledge to make recommendations and provide expert guidance to our customers.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-white text-red-600 rounded-full w-20 h-8 sm:w-20 sm:h-11 md:w-52 md:h-14 lg:w-40 lg:h-20 2xl:w-28 2xl:h-14  flex items-center justify-center text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white">
                <i className="fas fa-users text-sm md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">CLIENT'S Happiness</h3>
                <p className="text-sm sm:text-md leading-5 sm:leading-6">
                  PN INFOSYS is driven to meet client needs with determination and grit. We embrace tough challenges and do not rest until the problem is solved, the right way.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="flex items-start gap-4">
              <div className="bg-white text-red-600 rounded-full w-20 h-8 sm:w-20 sm:h-12 md:w-48 md:h-14 lg:w-40 lg:h-20 2xl:w-28 2xl:h-16  flex items-center justify-center text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white">
                <i className="fa fa-tasks text-sm md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">FULL Maintenance</h3>
                <p className="text-sm sm:text-md leading-5 sm:leading-6">
                  PN INFOSYS Company provides a full range of maintenance and compliance services for Government and Commercial facilities both large and small.
                </p>
              </div>
            </div>

            {/* Box 5 */}
            <div className="flex items-start gap-4">
              <div className="bg-white text-red-600 rounded-full w-20 h-9 sm:w-20 sm:h-14 md:w-40 md:h-14 lg:w-32 lg:h-20 2xl:w-24 2xl:h-16  flex items-center justify-center text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white">
                <i className="fas fa-chalkboard-teacher text-sm md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">PRACTICAL Training</h3>
                <p className="text-sm sm:text-md leading-5 sm:leading-6">
                  We don't use paper and pencil at all in our training sessions. We are provided only practical work at training class session.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side Image */}
          <motion.div className="flex-1 flex justify-center mt-10 md:mt-0"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img
              src={img6.src}
              alt="services"
              className="w-full max-w-md"
            />
          </motion.div>

        </div>
      </section>
      {/* Service End */}



      {/* Event Start */}
      <EventHome />
      {/* Event End */}
    </>
  );
}
