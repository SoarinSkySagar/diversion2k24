import React from 'react';
// import "tailwindcss/tailwind.css";

export default function HomeHeader() {
  return (
    <header className='w-96vw relative left-8 overflow-hidden h-90vh mb-20 header'>
        <div class="w-11/12 my-0 mx-auto grid grid-cols-2 items-center gap-x-20 h-full">
            <div class="header-left">   
                <div class="h-max w-auto">
                    <img className='header-img' src="/header.png" alt='header' height="600px"/>
                </div>
            </div>
            <div class="my-4 pt-6 pb-12 header-content">
                <h1 className='size-1'>Lorem ipsum dolorum</h1>
                <p className='my-4 pb-9'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga eum debitis, deleniti reprehenderit tenetur quidem repellendus eius veniam aspernatur fugit quia deserunt corrupti at dicta. Id consectetur porro doloremque provident!
                </p>
                <a href="/" class="btn btn-primary">Get Started   <span>&#8594;</span></a>
            </div>
        
        </div>
    </header>
  )
}