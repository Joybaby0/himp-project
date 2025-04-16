"use client"
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#54836F] text-white px-2 py-16 md:pl-18">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About */}
        <div>
          <h3 className="text-xl font-medium mb-4">About</h3>
          <p className="text-sm leading-relaxed text-white/90">
            Nigeria Real Estate Data Collation Management Program is the Quickest and easy place to access the data you need to make important business decisions.
          </p>
        </div>

        {/* Account Links */}
        <div>
          <h3 className="text-xl font-medium mb-4">Account Links</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li><a href="#" className="hover:underline">Property</a></li>
            <li><a href="#" className="hover:underline">Dashboard</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Survey Participation</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-medium mb-4">Contact Us</h3>
          <p className="text-sm mb-2">Nigeria Mortgage<br />Refinance COmpany</p>
          <div className="mt-12 flex items-center gap-2 text-sm">
            <Phone size={16} /> <span>Hr: +234 456 7890 12</span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Phone size={16} /> <span>Office: +234 456 7890 12</span>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      {/* Newsletter */}
<div className="max-w-4xl mx-auto mt-16">
  <div className="bg-[#729A89] rounded-md px-6 py-6 md:px-10 md:py-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left Side: Text */}
      <div className="text-xl text-white font-medium md:w-1/3">
        Newsletter Sign Up
      </div>

      {/* Right Side: Form with white background */}
      <form className="flex w-full md:w-2/3 bg-white rounded-md overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email here..."
          className="flex-grow px-4 py-3 text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#2F7726] hover:bg-[#276820] text-white px-6 py-3 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
    <div className='text-center mt-8'>
      <p>copyright @ 2023 , Nigeria Mortage Refinary Company</p>
    </div>
    </footer>
  );
}
