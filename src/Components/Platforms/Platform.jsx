import React, { useState } from 'react';
import android from '../../assets/android.webp';
import Ios from '../../assets/iOS.webp';
import Mac from '../../assets/macOS.webp';
import Windows from '../../assets/windows.webp';
import tvOS from '../../assets/tvOS.webp';
import fireOS from '../../assets/fireOS.webp';
import './Platform.css';
import { useNavigate } from "react-router-dom";

const Platform = () => {
  const navigate = useNavigate();
  const [activePlatform, setActivePlatform] = useState('android');

  const togglePlatform = (platform) => {
    setActivePlatform(activePlatform === platform ? null : platform);
  };

  // Map platform IDs to their corresponding images
  const platformImages = {
    android: android,
    ios: Ios,
    macos: Mac,
    windows: Windows,
    tvos: tvOS,
    fireos: fireOS
  };

  const platforms = [
    {
      id: 'android',
      title: 'Android',
      description:
        "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
    },
    {
      id: 'ios',
      title: 'iOS',
      description:
        "Manage, secure, and monitor iOS devices in your organization. With Hexnode's ABM and ASM integration, deploy devices and apps with ease.",
    },
    {
      id: 'macos',
      title: 'macOS',
      description:
        "Leverage Hexnode's desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM."
    },
    {
      id: 'windows',
      title: 'Windows',
      description:
        "Spearhead modern PC management in your organization with Hexnode. Set limit's and monitor PC health and compliance remotely with Hexnode UEM.",
    },
    {
      id: 'tvos',
      title: 'tvOS',
      description:
        'Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.',
    },
    {
      id: 'fireos',
      title: 'FireOS',
      description:
        'Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.',
    },
  ];

  return (
    <div>
      <div className="platform" id='platform'>
        <div className="container">
          <div className="row">
            <h2 className="text-center custom_h2 mb-3">Multi-platform Endpoint Management</h2>
            <p className="text-center platform_para d-none d-md-block">
              Devices of varying platforms? Hexnode thrives in a diverse environment.
            </p>

            <div className="col-lg-6 text-center mt-2 mt-md-4">
              {Object.entries(platformImages).map(([platform, image]) => (
                <img
                  key={platform}
                  src={image}
                  style={{ width: "80%" }}
                  alt={`${platform} Devices`}
                  className={`img-fluid rounded mt-5 pt-3 platform-image ${activePlatform === platform ? 'active' : ''
                    }`}
                />
              ))}
            </div>

            <div className="col-lg-6 mt-4">
              {platforms.map((platform) => (
                <div key={platform.id} className="platform-item">
                  <h3
                    className={`cursor-pointer ${activePlatform === platform.id ? 'active platform_slide' : ''}`}
                    onClick={() => togglePlatform(platform.id)}
                    aria-expanded={activePlatform === platform.id}
                  >
                    {platform.title}
                  </h3>
                  <div
                    className={`content-wrapper ${activePlatform === platform.id ? 'show' : 'hide'
                      }`}
                  >
                    <p className="platform_desc">{platform.description}</p>
                    <a href="#" onClick={() => navigate("/trail")} className="text-danger fw-bold d-inline-block mb-3">
                      Try Hexnode on your endpoints
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;