import React from "react";
import Benefits from "../components/Benefits";
import Testimonial from "../components/TestimonialMain";
import ContactForm from "../components/ContactForm";


const Hero = () => {
  return (

    <div>
      <div id="home" className="relative -mt-20 h-screen">
        <img
          src="https://img.freepik.com/free-vector/college-class-concept-illustration_114360-10544.jpg?w=1060&t=st=1707025961~exp=1707026561~hmac=6fa6a6756c8ae15e6e954cf257e0b8c937becba19e12465112664cf933bf2b50"
          className="absolute inset-0 object-cover w-screen h-screen blur-sm"
        />
        <section className="absolute inset-0 flex flex-col justify-center items-center text-center gap-3">
          <h1 className="text-black text-lg sm:text-3xl md:text-6xl leading-[5rem] font-bold">
            Tutorशाला
          </h1>
          <h1 className="text-white -mt-20 text-lg sm:text-3xl md:text-6xl leading-[5rem] font-bold">
            Tutorशाला
          </h1>
          <h2 className="text-white text-xl font-bold">
            YOUR ONE STOP PLATFORM FOR ALL PVT TUITIONS
          </h2>
        </section>
      </div>
      <Benefits />
      <Testimonial />
      <ContactForm />
    </div>
  );
};

export default Hero;

