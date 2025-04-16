'use client';

import Image from 'next/image';

export default function HousingPulse() {
  return (
    <section className="relative bg-gradient-to-r from-[#3A5A65] to-[#5CA47A] text-white px-6 md:px-16 py-18 ">
      {/* Globe image positioned right */}
      <div className="absolute bottom-0 right-0 w-[60%] max-w-[430px] hidden md:block pointer-events-none opacity-80 translate-y-2">
      <Image
        src="/groupimg.png"
        alt="Globe"
        width={700}
        height={700}
        className="object-contain"
      />
      </div>


      <div className="relative z-10 max-w-3xl pl-2 sm:pl-4 lg:pl-12">
        <h2 className="text-2xl bg-[url('/indices.png')] bg-[length:100%] bg-center bg-no-repeat px-4 py-4 inline-block">
          HOUSING PULSE
        </h2>

        <p className="text-gray-200 max-w-3xl mb-10 text-sm">
          Access core housing data from multiple sources, including the renowned NMRC Research team.
        </p>

        <h3 className="text-xl font-lg mb-4">Datasets</h3>
        <p className="text-gray-200 max-w-2xl mb-4 text-sm">
          Explore key economic indicators, construction spending and real estate development indexes,
          settlement area data and many more indices and datasets.
        </p>
        <p className="text-gray-200 max-w-2xl mb-4 text-sm">
          With the HMIP being your one-stop-shop, you can make more informed decisions as you improve
          your business forecasts and identify opportunities within the real estate and property development/investment space.
        </p>
        <p className="text-gray-200 max-w-2xl mb-10 text-sm">
          Power your ideas using data you can trust. Leverage our datasets below to gain insights,
          spur creativity, innovate, and grow your business in the Nigerian mortgage markets.
        </p>

        {/* Dataset Icons */}
        <div className="flex flex-wrap gap-6 mb-10 items-center">
          {[
            {
              icon: '/icons/link1.png',
              title: 'Housing Statistics',
              subtitle: 'HMIP Mortgage Statistics Dashboard',
            },
            {
              icon: '/icons/link.png',
              title: 'Housing Pricing',
              subtitle: 'HMIP Housing Price Index',
            },
            {
              icon: '/icons/link2.png',
              title: 'NRE-DCMP',
              subtitle: 'Nigeria Mortgage Refinance',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-row items-center w-48 gap-2">
              <div className="w-20 h-20">
                <Image src={item.icon} alt={item.title} width={68} height={68} />
              </div>
              <div className='flex flex-col'>
              <p className="font-2xl text-md">{item.title}</p>
              <p className="text-sm text-gray-300">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-green-700 hover:bg-green-800 px-6 py-2 rounded text-white transition">
          View All
        </button>
      </div>
    </section>
  );
}
