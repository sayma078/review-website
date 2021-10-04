import React from "react";
import "./Course.css";

const Course = (props) => {
  const { name, img, time, days, fee } = props.course;
  return (
    <div className="col-md-6 p-2 mt-5">
      <div className="card">
        <img src={img} className="course-img" alt="..." />
        <div className="card-body">
          <h1 className="card-title">{name}</h1>
          <br />
          <h4>Time:{time}</h4>
          <h4>Days of Week:{days}</h4>
          <br />
          <h6>{fee}</h6>
          <button className=" btn bg-warning">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
