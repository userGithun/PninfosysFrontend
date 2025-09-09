import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#3a82b9] text-white px-4 md:px-16 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* About */}
          <div>
            <h1 className="text-6xl md:text-5xl font-bold mb-4">
              <span className="text-blue-300">PN</span><span className="text-black">INFO</span><span className="text-blue-400">SYS</span>
            </h1>
            <p className="text-sm text-justify">
              PN INFOSYS is a leading global business consulting and IT service company. We provide a full range of maintenance and compliance services for Government and Commercial facilities both large and small. Whether you need to run your business more efficiently or accelerate revenue growth, PN INFOSYS can get you there.
            </p>

            <div className="flex justify-center md:justify-start gap-8 mt-6 text-blue-500">
              <Link href="https://www.facebook.com/pninfosys/" className="bg-white w-10 h-10 pl-2 p-2 rounded-full text-xl hover:bg-blue-500 hover:text-white transition duration-300"><i className="fab fa-facebook-f"></i></Link>
              <Link href="https://www.instagram.com/pn_infosys/" className="bg-white w-10 h-10 pl-2 p-2 rounded-full text-xl hover:bg-[radial-gradient(circle_at_30%_107%,_rgba(253,203,110,1)_0%,_rgba(250,126,30,0.9)_45%,_rgba(214,41,118,0.9)_60%,_rgba(150,47,191,0.9)_90%)] hover:text-white transition duration-300"><i className="fab fa-instagram"></i></Link>
              <Link href="https://www.linkedin.com/company/pninfosys/" className="bg-white w-10 h-10 pl-2 p-2 rounded-full text-xl hover:bg-blue-500 hover:text-white transition duration-300"><i className="fab fa-linkedin-in"></i></Link>
              <Link href="https://www.youtube.com/@pninfosys" className="bg-white w-10 h-10 pl-2 p-2 rounded-full text-xl hover:bg-red-500 hover:text-white transition duration-300"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Get In Touch!</h2>
            <p className="text-sm">www.pninfosys.com</p>
            <p className="text-sm">support@pninfosys.com</p>
            <p className="text-sm mt-2">+91 7000846823<br />+91 7415289378</p>
            <p className="text-sm mt-3">MIG-332</p>
            <p className="text-sm mt-2">Darpan Colony, Thatipur,<br />Gwalior, <span className="font-semibold">Madhya Pradesh</span></p>
          </div>

          {/* Workshops */}
          <div>
            <h2 className="text-lg font-semibold mb-4">COMPANIES WORKSHOP</h2>
            <p className="text-sm mb-2"><span className='font-semibold'>Xiaomi MI Company</span><br />August 20 / Mr. Vaibhav Shrivastava</p>
            <p className="text-sm mb-2"><span className='font-semibold'>Bentchair Company</span><br />October 06 / Mr. Nicket Bansal</p>
            <p className="text-sm mb-2"><span className='font-semibold'>MPCT College Gwalior</span><br />November 02 / PN Infosys Team</p>
            <p className="text-sm mb-2"><span className='font-semibold'>RJIT College Tekanpur</span><br />February 24 / PN Infosys Team</p>
          </div>

        </div>

        <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm">
          Copyright © 2025-2026 | PN INFOSYS IT COMPANY IN GWALIOR ! All rights reserved.
        </div>
      </footer>

    </>
  )
}

export default Footer
