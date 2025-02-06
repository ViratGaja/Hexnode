import React from "react";
import "./Hexnode.css";
import Hexnode_icon from '../../assets/hexnode-app-icon.svg'
import { useNavigate } from "react-router-dom";

const HexnodeFeatures = () => {
  const navigate = useNavigate();
  return (
    <div className="custom_bg" id="hexnode">
      <h2 className="text-center pt-5">Why Hexnode?</h2>
      <div className="hexnode-container">

        <div className="feature-card top-left">
          <div className="card-body">
            <div className="feature-icon">⚡</div>
            <h3 className="card-title">Adapt to the new normal</h3>
            <p className="card-text">
              Hybrid, remote or onsite, you can trust Hexnode UEM to deliver.
              Create policies that cater to your organization's protocols.
              Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.
            </p>
            <span onClick={() => navigate("/trail")} className="text-danger hidden-on-hover">
              Try Hexnode on your endpoints
            </span>
          </div>
        </div>


        <div className="feature-card top-right">
          <div className="card-body">
            <div className="feature-icon">🛡️</div>
            <h3 className="card-title">Zero compromise security</h3>
            <p className="card-text">
              Enable full-fledged device encryption, data loss prevention, and
              all-rounded device security with Hexnode UEM. Be at the bleeding edge of
              device security without any compromises.
            </p>
            <span onClick={() => navigate("/trail")} className="text-danger hidden-on-hover">
              Try Hexnode on your endpoints
            </span>
          </div>
        </div>


        <div className="center-icon">
          <img src={Hexnode_icon} alt="Hexnode" className="center-logo" />
        </div>


        <div className="feature-card bottom-left">
          <div className="card-body">
            <div className="feature-icon">⚙️</div>
            <h3 className="card-title">Get more done with automation</h3>
            <p className="card-text">
              Hexnode UEM automation features help free up IT's time spent on mundane
              and repetitive tasks. Do hours' worth of work in a few minutes.
            </p>
            <span onClick={() => navigate("/trail")} className="text-danger hidden-on-hover">
              Try Hexnode on your endpoints
            </span>
          </div>
        </div>


        <div className="feature-card bottom-right">
          <div className="card-body">
            <div className="feature-icon">📝</div>
            <h3 className="card-title">Unified Policy Management</h3>
            <p className="card-text">
              Create a single policy through Hexnode and apply it to all devices
              in your organization. Any platform or form factor, achieve single
              pane of glass management with Hexnode.
            </p>
            <span onClick={() => navigate("/trail")} className="text-danger hidden-on-hover">
              Try Hexnode on your endpoints
            </span>
          </div>
        </div>


        <div className="lines-container">
          <div className="dotted-line left-line"></div>
          <div className="dotted-line right-line"></div>
          <div className="dotted-line top-line"></div>
          <div className="dotted-line bottom-line"></div>
          <div className="dotted-line right-line-top"></div>
          <div className="dotted-line right-bottom-line"></div>
        </div>

      </div>
    </div>



  );
};

export default HexnodeFeatures;
