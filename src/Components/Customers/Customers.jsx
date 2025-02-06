import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Customers.css';
import Testimonial_Img_1 from '../../assets/dalibor-kruljac.webp'
import Testimonial_Img_2 from '../../assets/chris-robinson.png'
import Testimonial_Img_3 from '../../assets/justin-modrak.webp'
import Merck from '../../assets/merck.svg'
import Costco from '../../assets/costco.svg'
import SAIC from '../../assets/saic.svg'
import Hilton from '../../assets/hilton.svg'
import Group_1 from '../../assets/group1-automotive.png'
import Lowes from '../../assets/lowes.svg'
import gorillas from '../../assets/gorillas.svg'
import wolt from '../../assets/wolt.svg'
import marriotti_ntl from '../../assets/marriott-intl.svg'


const Customers = () => {
    const testimonials = [
        {
            quote: "Most complete MDM solution I found, and I tested many of them, including major names",
            name: "Dalibor Kruljac",
            company: "KAMELEYA LTD",
            image: Testimonial_Img_1
        },
        {
            quote: "It seemed to be in-line with everything we were looking at.",
            name: "Chris Robinson",
            company: "Executive Account Manager, NCS",
            image: Testimonial_Img_2
        },
        {
            quote: "Hexnode is of great e. Works great with Android and iOS!",
            name: "Justin Modrak",
            company: "Technology Coordinator,East Troy Community School District",
            image: Testimonial_Img_3
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideDirection, setSlideDirection] = useState('right');

    const nextSlide = () => {
        setSlideDirection('right');
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setSlideDirection('left');
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    const logos = [
        { name: 'Merck', url: Merck },
        { name: 'Costco', url: Costco },
        { name: 'SAIC', url: SAIC },
        { name: 'Hilton', url: Hilton },
        { name: 'Group_1', url: Group_1 },
        { name: 'Lowes', url: Lowes },
        { name: 'gorillas', url: gorillas },
        { name: 'wolt', url: wolt },
        { name: 'marriott-intl', url: marriotti_ntl },
    ];
    return (
        <div>
            <div className="customers" id='customers' >
                <div className="container">
                    <div className="row justify-content-center">
                        <h2 className='custom_h2 text-center mb-4'>What our customers say</h2>
                        <div className="col-md-12">
                            <div className="position-relative testimonial-container">
                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="position-absolute start-0 top-50 translate-middle-y btn btn-light rounded-circle p-2 shadow nav-button"
                                    style={{ zIndex: 10 }}
                                >
                                    <ChevronLeft size={24} />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="position-absolute end-0 top-50 translate-middle-y btn btn-light rounded-circle p-2 shadow nav-button"
                                    style={{ zIndex: 10 }}
                                >
                                    <ChevronRight size={24} />
                                </button>

                                {/* Testimonial Card */}
                                <div className="testimonial-wrapper" style={{ overflow: 'hidden' }}>
                                    <div
                                        key={currentSlide}
                                        className={`testimonial-slide slide-${slideDirection}`}
                                    >
                                        <div className=" rounded custom_bg mt-3  py-1 ">
                                            <div className="row align-items-center">
                                                <div className="col-md-3">
                                                    <img
                                                        src={testimonials[currentSlide].image}
                                                        alt={testimonials[currentSlide].name}
                                                        className="img-fluid rounded client_img"
                                                    />
                                                </div>
                                                <div className="col-md-9">
                                                    <blockquote className="tes_para mb-3">
                                                        "{testimonials[currentSlide].quote}"
                                                    </blockquote>
                                                    <div className='custom_tes'>
                                                        <p className="tes_name mb-1">{testimonials[currentSlide].name}</p>
                                                        <p className="tes_company">{testimonials[currentSlide].company}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12 mt-5">
                            <div className="logo-slider">
                                <div className="logo-slide-track">
                                    {logos.map((logo, index) => (
                                        <div className="logo-slide" key={`logo-${index}`}>
                                            <img
                                                src={logo.url}
                                                alt={logo.name}
                                                className="img-fluid"

                                            />
                                        </div>
                                    ))}

                                    {logos.map((logo, index) => (
                                        <div className="logo-slide" key={`logo-duplicate-${index}`}>
                                            <img
                                                src={logo.url}
                                                alt={logo.name}
                                                className="img-fluid"

                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;