// pages/contact.js

import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className='text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-pink-500'>Contact Us</h1>

      {/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <div>
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-base font-medium text-indigo-900"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-base font-medium text-indigo-900"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="youremail@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-base font-medium text-indigo-900"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Type your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-1/4 bg-pink-500 text-white text-base font-medium p-2 rounded-md hover:bg-gray-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Our Location</h2>
          <p className="text-gray-600">123 Main Street,City Karachi, Pakistan</p>

          <h2 className="text-xl font-semibold">Phone</h2>
          <p className="text-gray-600">(+92) 3456-7890</p>

          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-gray-600">contact@fashionstore.com</p>

          <h2 className="text-xl font-semibold">Business Hours</h2>
          <p className="text-gray-600">
            Monday - Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday: 10:00 AM - 4:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
