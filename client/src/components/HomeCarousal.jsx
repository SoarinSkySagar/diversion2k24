import React from 'react';
import Slider from 'react-slick';
// import "tailwindcss/tailwind.css";
import reviews from './reviews.json';
import ReviewCards from './ReviewCards';

export default function HomeCarousel() {
  
    const reviewArr = JSON.parse(JSON.stringify(reviews));
    const data = reviewArr.reviews;

    var settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
      return (
        <div className='w-11/12 p-7 mx-auto'>
        <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <h1 className='text-7xl mb-20 text-white font-extrabold'>Our Happy Customers :D</h1>
        <Slider {...settings}>
        
        {data.map((review) => (
            <ReviewCards
            name={review.name}
            description={review.description}
            imageLink={review.image}
            />
        ))}

        </Slider> 
        </div>
      )
}