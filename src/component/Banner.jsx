import Link from "next/link";
import React from "react";
import bannerImage from '/public/image/BannerBackground.png'; // imported as an object

function Banner({ title, breadcrumb }) {
  return (
    <>
      {/* Banner Start */}
      <section className="pt-[68px] md:pt-[74px]">
        <div
          className="w-full relative bg-black/80 flex items-center justify-center h-[200px] md:h-[300px] lg:h-[500px]"
          style={{
            backgroundImage: `url(${bannerImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative text-center text-white px-4">
            <h1 className="pt-2 md:pt-12 text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="mt-2 text-sm md:text-base font-bold">
              <Link href="/" className="text-white hover:underline">
                HOME
              </Link>{" "}
              / <span className="cursor-text text-blue-500">{breadcrumb}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Banner End */}
    </>
  );
}

export default Banner;
