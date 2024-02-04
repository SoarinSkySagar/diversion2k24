import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div id="contact">
      <div className="w-screen pt-24 bg-[#15B9FF]">
        <h1 className="text-3xl pl-8">Contact Us</h1>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:px-8 flex-wrap w-screen py-12">
          <div className="w-full lg:w-[45vw]">
            <p className="text-white text-xl">
              Ready to get started, or have a question for our team? Reach out,
              and we’ll respond as soon as possible.
            </p>
            <img src="/Doctor.svg" alt="skin" className="sm:pr-8" />
          </div>
          <div className="w-full lg:w-[45vw]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;