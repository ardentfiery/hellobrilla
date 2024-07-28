/* src/TestimonialSlider.js */
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = ({ paginaTestimonials }) => {
  useEffect(() => {
    console.log("Pagina Testimonials: ", paginaTestimonials);
  }, [paginaTestimonials]);

  const settings = {
    dots: true,
    infinite: paginaTestimonials.length > 1, // Only enable infinite loop if there are more than one testimonial
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: paginaTestimonials.length > 1, // Only enable autoplay if there are more than one testimonial
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-[100%] mx-auto py-5">
      {paginaTestimonials && paginaTestimonials.length > 0 ? (
        <Slider {...settings}>
          {paginaTestimonials.map((testimonial, index) => (
            <div key={index} className="p-8">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <div>
                <p className="font-bold text-[1.23rem] text-center">
                  {testimonial.name} / {testimonial.position}
                </p>
              </div>
              <p className="text-lg text-center">"{testimonial.feedback}"</p>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center p-8">Loading testimonials...</div>
      )}
    </div>
  );
};

export default TestimonialSlider;
