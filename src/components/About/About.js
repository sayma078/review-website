import React from "react";
import image from "../../image/img.jpg";
import person1 from "../../image/person1.jpg";
import person2 from "../../image/person2.jpg";
import person3 from "../../image/person3.jpg";

const About = () => {
  return (
    <div div>
      <div className=" container d-flex justify-content-center  mt-5">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="m-5">
          <h1>A leader in educating artists since 2008</h1>
          <p>
            Crown Art School offers nationally accredited undergraduate,
            graduate, and post-baccalaureate programs to more than 2,800
            students from all over the world.
          </p>
          <br />
          <br />
          <p>
            Our school has an educational philosophy built upon an integrative
            approach to art, giving students exceptional opportunities to
            develop their creative and critical abilities, while working with
            leading faculty who include many of the famed artists.
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <h1>What Our Students Says</h1>
        <div className="row g-4 ms-5 mt-1 d-flex justify-content-center ">
          <div className="col">
            <div className="card ">
              <img src={person1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>Paula Patton</h3>
                <p className="card-text">
                  At this School we are teaching different art techniques to
                  students of all ages. During my lessons I try to bring out the
                  inner artists of students to help build their skills.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={person2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>Anna Galvin</h3>
                <p className="card-text">
                  My favourite part is talking to student ,It is so exciting as
                  each student is completely unique with their own story and
                  their own motivation for taking our classes.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={person3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>Anna Galvin</h3>
                <p className="card-text">
                  I love teaching and interacting with students. It’s so
                  fascinating to share all my experience and knowledge with this
                  talented people!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
