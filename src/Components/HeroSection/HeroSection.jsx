import React from 'react';
import './HeroSection.css';
import Hero_Img from '../../assets/Hero_banner.webp';
import { assets as Assets } from '../../assets/assets';
const HeroSection = () => {
  const imageKeys = ['Idc', 'Gartner', 'Forrester'];
  return (
    <div>
      <section className='custom_Hero'>
        <div style={{ width: "87%", margin: "0 auto" }}>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 order-lg-1 order-2">
              <div className='custom_hero_left text-center text-lg-start mt-lg-5'>
                <h1>Unified Endpoint Management</h1>
                <h3>Gain control and visibility over your endpoints</h3>
                <p className='custom_para'>
                  Hexnode's UEM solution allows you to simplify endpoint management and free up IT.
                  Focus on the big picture while Hexnode works on the details.
                </p>
                <div className='d-flex gap-md-2 gap-3 custom_hero_section mb-5'>
                  <input type="text" className="custom_hero_input ps-2" placeholder="Email" />
                  <button className="btn btn-danger rounded-0 text-uppercase custom_input">
                    LET'S TRY IT OUT!
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="col-12 col-md-12 col-lg-6 order-lg-2 order-1">
              <div className='hero_image mb-5'>
                <img src={Hero_Img} className='w-100 hero_img' alt="Hero Banner" />
                <div className="notification-container">
                  <div className="ppa">
                    <i className="fas fa-check-circle"></i>
                    <span>Password policy applied</span>
                  </div>
                  <div className="tka">
                    <i className="fas fa-check-circle"></i>
                    <span>TvOS Kiosk Active</span>
                  </div>
                  <div className="de">
                    <i className="fas fa-check-circle"></i>
                    <span>Device Enrolled</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="info_nexnode">
        <div className='container'>
          <div className="row">
            {Assets.Info_hexnode.map((item, index) => (
              <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center  info_column mt-2 mb-2" key={index}>
                <div className="info_detail text-center text-md-start info-card  px-4">
                  <img className="mb-2"
                    src={Assets[imageKeys[index]]} style={{ width: "33%" }}
                    alt={`${imageKeys[index]} logo`}
                  />
                  <p className='mt-3  info_para'>{item.Info_para}</p>
                </div>
              </div>
            ))}


          </div>

        </div>

      </div>
    </div>
  );
}

export default HeroSection;
