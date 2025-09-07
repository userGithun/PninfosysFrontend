


///

{/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
                        >
                            {/* Full Name */}
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" "
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border-[#0000003b] peer w-full px-3 pt-5 pb-2 border rounded-lg text-black 
                 placeholder-transparent focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 
                 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm 
                 peer-focus:text-blue-500"
                                >
                                    Full Name *
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder=" "
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border-[#0000003b] peer w-full px-3 pt-5 pb-2 border rounded-lg text-black 
                 placeholder-transparent focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 
                 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm 
                 peer-focus:text-blue-500"
                                >
                                    Email *
                                </label>
                            </div>

                            {/* Phone */}
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder=" "
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="border-[#0000003b] peer w-full px-3 pt-5 pb-2 border rounded-lg text-black 
                 placeholder-transparent focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 
                 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm 
                 peer-focus:text-blue-500"
                                >
                                    Phone *
                                </label>
                            </div>
                            {/* College */}
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    name="college"
                                    placeholder=" "
                                    value={formData.college}
                                    onChange={handleChange}
                                    className="border-[#0000003b] peer w-full px-3 pt-5 pb-2 border rounded-lg text-black 
                 placeholder-transparent focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                                <label
                                    htmlFor="college"
                                    className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 
                 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm 
                 peer-focus:text-blue-500"
                                >
                                    College *
                                </label>
                            </div>


                            {/* Address */}
                            <div className="relative w-full md:col-span-2">
                                <textarea
                                    type="text"
                                    name="address"
                                    placeholder=" "
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="border-[#0000003b] peer w-full px-3 pt-5 pb-2 border rounded-lg text-black 
                 placeholder-transparent focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                                <label
                                    htmlFor="address"
                                    className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 
                 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm 
                 peer-focus:text-blue-500"
                                >
                                    Address *
                                </label>
                            </div>




                            {/* Qualification */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Qualification</label>
                                <select
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    className="border-[#0000003b] w-full px-4 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    required
                                >
                                    <option value="" selected disabled>Select Qualification</option>
                                    <option value="BTECH">B.TECH</option>
                                    <option value="BCA">BCA</option>
                                    <option value="MCA">MCA</option>
                                    <option value="BSC">B.SC.</option>
                                    <option value="OTHER">OTHER</option>
                                </select>
                            </div>

                            {/* Gender (normal radio, no floating) */}
                            <div>
                                <p className="text-gray-700 font-semibold mb-2">Gender</p>
                                <div className="flex items-center gap-6">
                                    <label className="flex items-center font-medium text-black gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={formData.gender === "Male"}
                                            onChange={handleChange}
                                            className=" text-blue-600 focus:ring-blue-500"
                                        />
                                        Male
                                    </label>
                                    <label className="flex items-center font-medium text-black gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            checked={formData.gender === "Female"}
                                            onChange={handleChange}
                                            className="text-pink-600 focus:ring-pink-500"
                                        />
                                        Female
                                    </label>
                                </div>
                            </div>
                            {/* Branch (select normal hi rahega, floating select acha nahi dikhta) */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Branch</label>
                                <select
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    className="border-[#0000003b] w-full px-4 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    required
                                >
                                    <option value="" selected disabled>Select Branch</option>
                                    <option value="CSE">CS</option>
                                    <option value="IT">IT</option>
                                    <option value="ECE">EE</option>
                                    <option value="EC">EC</option>
                                    <option value="MECHANICAL">MECHANICAL</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="AUTOMOBILE">AUTOMOBILE</option>
                                    <option value="OTHER">OTHER</option>


                                </select>
                            </div>

                            {/* Semester */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Semester</label>
                                <select
                                    name="semester"
                                    value={formData.semester}
                                    onChange={handleChange}
                                    className="border-[#0000003b] w-full px-4 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    required
                                >
                                    <option value="" selected disabled>Select Semester</option>
                                    <option value="1st">1st Semester</option>
                                    <option value="2nd">2nd Semester</option>
                                    <option value="3rd">3rd Semester</option>
                                    <option value="4th">4th Semester</option>
                                    <option value="5th">5th Semester</option>
                                    <option value="6th">6th Semester</option>
                                    <option value="7th">7th Semester</option>
                                    <option value="8th">8th Semester</option>
                                </select>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={bookingLoading}
                                className="col-span-1 md:col-span-2 w-full bg-gradient-to-r from-sky-400 to-indigo-600 
             text-white py-3 rounded-lg font-semibold shadow-md 
             hover:from-blue-700 hover:to-sky-700 transition transform 
             hover:scale-[1.01] flex items-center justify-center disabled:opacity-70"
                            >
                                {bookingLoading ? (
                                    <div className="flex items-center gap-2">
                                        {/* Modern Spinner */}
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a7 7 0 110 14 7 7 0 010-14z"
                                            />
                                        </svg>
                                        <span className="tracking-wide">Registering...</span>
                                    </div>
                                ) : (
                                    "CLICK TO REGISTER"
                                )}
                            </button>

                        </form>
