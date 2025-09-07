"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function TestimonialsStudentFeedback() {
  const testimonials = [
    {
      name: "Riya Parashar",
      role: "Full Stack Developer",
      feedback:
        "It is the best learning hub for all students. Best place to learn. Thank you, PN Infosys! The hands-on projects and real-world examples made a big difference in how I learned web development. The mentors are always ready to help, and I really appreciated the friendly environment. ",
    },
    {
      name: "Akansha Tomar",
      role: "Full Stack Developer",
      feedback:
        "Best place to learn, grow, and nourish technical skills. Working on the latest technologies helped me stay up-to-date with industry trends. The real-life projects gave me the confidence to handle any work scenario after the course completion. PN Infosys also helped me build a solid portfolio.",
    },
    {
      name: "Harsh Verma",
      role: "Mern Stack Developer",
      feedback: "PN Infosys gave me the perfect platform to grow as a developer. From learning the basics to building advanced projects, every step was practical and career-focused. The mentors not only taught technology but also guided me like friends. Because of their training, I feel confident working on real-world projects and interviews. Truly the best decision I made for my career!"
    },
    {
      name: "Rohit Kumar",
      role: "UI/UX Developer",
      feedback:
        "It's a great experience at PN Infosys. The working environment is incredible, and I gained a lot of practical exposure. The curriculum is thoughtfully designed, allowing students to stay ahead of the curve in UI/UX design. Highly recommend this institute for anyone looking to excel in their career.",
    },
    {
      name: "Vinod Chauhan",
      role: "Full Stack Developer",
      feedback:
        "Excellent teaching staff, hands-on experience on the latest technologies. 80% practical, 20% theory, which is a great balance. The projects were challenging but rewarding, and I now feel confident tackling any full stack job thanks to the knowledge gained here.",
    },
    {
      name: "Vipin Sharma",
      role: "UI/UX Designer",
      feedback:
        "A great place to learn web designing, development, and presentation skills. The instructors at PN Infosys ensured that I understood each and every concept thoroughly. I can now build dynamic, responsive websites with ease, thanks to the skills I acquired during the training.",
    },
    {
      name: "Manoj Palwaliya",
      role: "Backend Developer",
      feedback:
        "It is the best learning hub for all adamant students. It is based on a 100% practical approach. Trainees get to work on Live Projects, which strengthens their portfolio (C.V). The trainers here are very experienced and guide you through every step of the process. I would highly recommend PN Infosys to anyone serious about a career in tech.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-14">
        What Our Students Say
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold pb-2 text-gray-700">{t.name}</h3>
              <p className="text-sky-600 text-sm font-medium mb-4">{t.role}</p>
              <p className="text-gray-600 pb-8 px-0 italic leading-relaxed">
                <FaQuoteLeft className="inline-block text-gray-400 mr-2 text-sm" />
                {t.feedback}
                <FaQuoteRight className="inline-block text-gray-400 ml-2 text-sm" />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
