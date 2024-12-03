import React from "react";
import "./sidebar.css";
import { RxDashboard } from "react-icons/rx";

import sidelogo from "../../assets/sideBarLogo.png";
import drawerClose from "../../assets/closeDrawer.png";
import { Link } from "react-router-dom";

import { FaTachometerAlt, FaEnvelope, FaClipboardList, FaQuoteRight, FaShippingFast, FaUserCircle } from "react-icons/fa";
const SideBar = ({children}) => {


  return (

    <div>
    <div className="main_sidbar">
      <div className="inner_first_logo_box">
        <div className="logo_box">
          <img src={sidelogo} alt="Logo Goes here" />
        </div>

        <div className="close_nav">
          <div>
            <img src={drawerClose} alt="Close" />
          </div>
        </div>
      </div>
      <div className="dahboard_lists">
        <ul className="list_box">
      
      <li>
        <Link to="/">
          <RxDashboard style={{ marginRight: "8px" }} /> Dashboard
        </Link>
      </li>
      <li>
        <FaEnvelope style={{ marginRight: "8px" }} /> All Messages
      </li>
      <li>
        <FaClipboardList style={{ marginRight: "8px" }} /> Inquiries
      </li>
      <li>
        <FaQuoteRight style={{ marginRight: "8px" }} /> My Quotes
      </li>
      <li>
        <FaShippingFast style={{ marginRight: "8px" }} /> Order Status
      </li>
      <li>
        <FaUserCircle style={{ marginRight: "8px" }} /> Profile
      </li>
  
        </ul>
      </div>
    </div>
<div className="child">
    {children}
</div>
    </div>
  );
};

export default SideBar;
