import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      image: 'img/testimonial-debashisBiswas.jpg',
      quote: 'I am continually impressed by the results you produce!',
      name: 'Debashis Biswas',
      profession: ' IT Consultant, Director (INTOLAP TECHNOLOGIES PVT LTD)'
    },
    {
      id: 2,
      image: 'img/testimonial-kai-td.jpg',
      quote: 'Indranil consistently delivers high-quality, efficient code and has been instrumental in driving our projects to success with his MERN stack expertise.',
      name: 'Kai Platschke',
      profession: 'Founder of teamdecoder'
    },
    // {
    //   id: 3,
    //   image: 'img/testimonial-3.jpg',
    //   quote: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum...',
    //   name: 'Client Name 3',
    //   profession: 'Profession 3'
    // }
  ];

  // Owl Carousel options
  const options = {
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  return (
    <div className="container-fluid bg-light py-5 my-5" id="testimonial">
      <div className="container-fluid py-5">
        <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Testimonial</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="testimonial-left h-100">
              {testimonials.map(testimonial => (
                <img key={testimonial.id} className="img-fluid wow fadeIn" src={testimonial.image} alt="" />
              ))}
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <OwlCarousel className="owl-theme testimonial-carousel" {...options}>
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src={testimonial.image} alt="" style={{width:"auto"}}/>
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">{testimonial.quote}</p>
                  <hr className="w-25 mx-auto" />
                  <h5>{testimonial.name}</h5>
                  <span>{testimonial.profession}</span>
                </div>
              ))}
            </OwlCarousel>
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <div className="testimonial-right h-100">
              {testimonials.map(testimonial => (
                <img key={testimonial.id} className="img-fluid wow fadeIn" src={testimonial.image} alt="client"  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
