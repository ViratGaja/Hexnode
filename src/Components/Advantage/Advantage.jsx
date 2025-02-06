import React from 'react';
import './Advantage.css';
import { assets_1 as Assets1 } from '../../assets/assets';

const Advantage = () => {
  return (
    <div className="features" id='features'>
      <div className="container">
        <div className="row">
          <h2 className="custom_h2">
            Powerful endpoint management, built for <br /> the devices you choose
          </h2>

          {Assets1.Features_Title.map((featureTitle, index) => (
            <div className="col-12 col-md-6 col-lg-4 custom_features mt-4 mb-3" key={index}>
              <img
                src={Object.values(Assets1)[index]}
                alt={featureTitle.Heading}
                className="feature-image w-100"
              />
              <h3 className="feature-title">{featureTitle.Heading}</h3>
              <p className="feature-description">
                {Assets1.Features[index]?.para}
              </p>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantage;
