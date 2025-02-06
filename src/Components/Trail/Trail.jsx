import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import josh from '../../assets/josh.png';
import emir from '../../assets/emir-safar.png';
import raymond from '../../assets/raymond-macaisa.png';
import justin from '../../assets/justin-modrak.webp';
import larry from '../../assets/larry-franks.png';
import chris from '../../assets/chris-robinson.png';
import './Trail.css'

const HexnodeSignup = () => {
  const [email, setEmail] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Chris Robinson',
      title: 'Executive Account Manager, NCS',
      quote: '"It seemed to be in-line with everything we were looking at so wasnt a bargain, I was the most impressed with what Hexnode had offered compared to the others."',
      image: chris
    },
    {
      name: 'Larry Franks',
      title: 'IT Admin/ Social Studies Teacher, Hartley ISD',
      quote: 'The product has performed as advertised. I have never had a negative experience with Hexnode. A++ rating.',
      image: larry
    },
    {
      name: 'Justin Modrak',
      title: 'Technology Coordinator, East Troy Community School District',
      quote: 'The interface is very easy to use which cuts down on admin time. Support is very responsive and thorough.',
      image: justin
    },
    {
      name: 'Raymond Macaisa',
      title: 'IT Architect, Red Sea Gateway Terminal',
      quote: 'Hexnode have helped us in deploying our MDM solution in record time. From pricing, support, and ease of use—its a winner.',
      image: raymond
    },
    {
      name: 'Emir Saffar',
      title: 'Chief Information Officer, Ur&Penn',
      quote: 'We got the help and answers that we needed so fast and that made us take the decision faster that Hexnode is right for us. It saves a lot of time and support tickets... its a time saver.',
      image: emir
    },
    {
      name: 'Josh',
      title: 'IT Admin, St Katherine of Sienna',
      quote: 'Hexnode has really made my job a lot easier in terms of managing the iPads.',
      image: josh
    }
  ];

  const DotPagination = ({ totalSlides, activeSlide, onSlideChange }) => {
    return (
      <div className="d-flex justify-content-center align-items-center mt-4">
        {[...Array(totalSlides)].map((_, index) => (
          <button 
            key={index}
            onClick={() => onSlideChange(index)}
            className={`btn btn-sm rounded-circle mx-1 ${
              activeSlide === index ? 'btn-primary' : 'btn-secondary opacity-50'
            }`}
            style={{ width: '10px', height: '10px', padding: 0 }}
          />
        ))}
      </div>
    );
  };

  const handleGetStarted = () => {
    if (email && /\S+@\S+\.\S+/.test(email)) {
      alert(`Starting 14-day trial for: ${email}`);
    } else {
      alert('Please enter a valid work email');
    }
  };

  return (
    <div className="container-fluid">
       
      <div className="row min-vh-100">
        <div className="col-lg-8 col-md-8 col-12 p-4 p-md-4">
        <nav className="navbar bg-white py-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <span className="hexnode-logo">hexnode</span>
        </a>
        <div className="dropdown">
          <button className="btn dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown">
            English
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">English</a></li>
            {/* Add other languages as needed */}
          </ul>
        </div>
      </div>
    </nav>
    <div className='custom_trail'>
          <h2 className="mb-4 custom_h2 text-start">Try Hexnode free for 14 days</h2>
          <div className="row mt-4 g-3 mb-5">
            <div className="col-md-6 col-12 ">
              <input 
                type="email" 
                placeholder="Your work email"
                className="form-control p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-4 col-12">
              <button 
                onClick={handleGetStarted}
                className="btn btn-danger w-100 p-3"
              >
                GET STARTED
              </button>
            </div>
          </div>
          </div>
          
          <div className="mt-md-5 text-secondary">
            <div className="row">
              <div className="col-md-6 mb-2 mb-md-0">
                <p className="mb-0">+1-833-HEXNODE (439-6633) Toll Free</p>
              </div>
              <div className="col-md-6">
                <p className="mb-0">+44-800-368920 Toll Free</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-4 col-12 bg-light d-flex flex-column justify-content-center align-items-center text-center p-4 p-md-5">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="d-flex flex-column align-items-center"
            >
              <div className="rounded-circle overflow-hidden mb-3" style={{ width: '144px', height: '144px' }}>
                <img 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              
              <h2 className="fs-4 fw-semibold">
                {testimonials[activeTestimonial].name}
              </h2>
              <p className="text-secondary mb-2">
                {testimonials[activeTestimonial].title}
              </p>
              
              <p className="fst-italic mb-3 mx-auto" style={{ maxWidth: '320px' }}>
                {testimonials[activeTestimonial].quote}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <DotPagination 
            totalSlides={testimonials.length}
            activeSlide={activeTestimonial}
            onSlideChange={setActiveTestimonial}
          />
        </div>
      </div>
    </div>
  );
};

export default HexnodeSignup;