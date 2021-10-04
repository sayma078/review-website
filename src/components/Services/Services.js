import React, { useEffect, useState } from 'react';
import fakeData from '../../data/fakeData.json';
import Course from '../Course/Course';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
       setCourses(fakeData)
    },[]);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {courses.map((course) =>(
                <Course key={course.id} course={course}></Course>
            ) )}
        </div>
        </div>
    );
};

export default Services;