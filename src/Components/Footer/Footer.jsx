import React from 'react'
import './Footer.css'
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div>

            <div className="footer">
                <div className="container custom_style">
                    <div className="row justify-content-center">

                        <div className="col-md-10">
                            <h2 className='custom_h2 text-center text-white'>Get Hexnode UEM and start securing your endpoints</h2>
                            <div className="text-center">
                                <button onClick={() => navigate("/trail")} className="btn btn-danger rounded-0  p-3 mt-2 text-uppercase custom_button">
                                    14 DAY FREE TRIAL
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className="bottom_footer d-flex flex-column flex-lg-row justify-content-lg-around">

                <div className='mb-1 p-1 text-center text-md-start'>
                    <span className='footer_content '>Terms of Use - Privacy - Cookies</span>
                </div>
                <div className='mb-1 p-1  text-center text-md-start'>
                    <span className='footer_content'>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</span>
                </div>

            </div>
        </div>
    )
}

export default Footer
