import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="card border-0 d-flex align-items-center justify-content-center mt-5">
      <div className="card-body bg-warning w-5  ">
        <h4>
          <BsTelephoneFill /> 18881234567
        </h4>
        <h4>
          <SiGmail /> info@artgallary.com
        </h4>
        <h4>
          <MdLocationOn /> 566 Potter Ave, Ridgewood,NY 11385
        </h4>
      </div>
    </div>
  );
};

export default Contact;
