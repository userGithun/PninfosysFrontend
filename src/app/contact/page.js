'use client'
import Banner from '@/component/Banner'
import React, { useState } from 'react'
import { FaMailBulk, FaMapPin, FaPhone } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useCreateContactMutation } from '../../../redux/features/contact/contactApi'


function page() {
  const [contactInsert] = useCreateContactMutation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactInsert(formData).unwrap();
      toast.success('Message sent successfully!')
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      toast.error('Failed to send message!')
    }
  }

  return (
    <>
      <Banner
        title='Say Hello To Us!'
        breadcrumb='CONTACT US'
      />

      <div className="w-full bg-gray-50 py-12 flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Email Card */}
          <div className="bg-white shadow-md rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 text-2xl shadow-xl group-hover:shadow-blue-400 transition-shadow duration-400">
                <FaMailBulk />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Email Address</h3>
            <p className="text-gray-600 mt-2">www.pninfosys.com</p>
            <p className="text-gray-600">support@pninfosys.com</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white shadow-md rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 text-2xl shadow-xl group-hover:shadow-blue-400 transition-shadow duration-500">
                <FaPhone />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Phone Number</h3>
            <p className="text-gray-600 mt-2">+91 7000846823</p>
            <p className="text-gray-600">+91 7415289378</p>
          </div>

          {/* Address Card */}
          <div className="bg-white shadow-md rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 text-2xl shadow-xl group-hover:shadow-blue-400 transition-shadow duration-500">
                <FaMapPin />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Street Address</h3>
            <p className="text-gray-600 mt-2">MIG-332</p>
            <p className="text-gray-600">Darpan Colony, Thatipur,</p>
            <p className="text-gray-600">Gwalior, Madhya Pradesh</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full bg-gray-50 px-6 md:px-6 py-12 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 items-start justify-center">
          {/* Left Form Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Say Hello To Us!
            </h2>
            <hr className="mb-6 opacity-15" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                name='name'
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-indigo-50 rounded-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                type="email"
                placeholder="E-Mail Address"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-4 py-3 bg-indigo-50 rounded-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                className="w-full px-4 py-3 bg-indigo-50 rounded-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-indigo-50 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              ></textarea>

              <button
                type="submit"
                className="mt-4 w-fit px-6 py-3 cursor-pointer bg-indigo-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-sky-600 hover:scale-105 transition-all duration-300"
              >
                Send Message Now
              </button>
            </form>
          </div>

          {/* Right Info Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/2 ">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">More Info</h2>
            <hr className="mb-6 opacity-15" />

            <h3 className="text-2xl font-bold mb-3">
              <span className="text-blue-300">PN</span><span className="text-black/80">INFO</span><span className="text-blue-400">SYS</span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              PN INFOSYS provides the best service possible to its customers because
              for us, our client’s happiness is important. Whatever we choose to do,
              we do it in an exorbitant manner. PN INFOSYS Company provides a full
              range of maintenance and compliance services for Government and
              Commercial facilities both large and small.
            </p>

            <button className="px-6 py-3 cursor-pointer bg-indigo-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-sky-600 hover:scale-105 ease-in-out transition-all duration-400">
              Read More..
            </button>
          </div>
        </div>
      </div>

      <section className="w-full flex justify-center items-center py-10">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Find Us On Map
          </h2>
          <hr className="mb-6 opacity-15" />
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.6462939939474!2d78.2043105746465!3d26.208181990013575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c3a3faabd5e3%3A0x88d563b9d79500ed!2sPN%20INFOSYS!5e0!3m2!1sen!2sin!4v1755378525478!5m2!1sen!2sin" title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </section>

    </>
  )
}

export default page
