import React from 'react';
import fakeData from '../../fakeData/fakeInformation'
import { useState } from 'react';
import './Course.css'
import CourseInformations from '../CourseInformations/CourseInformations';
import Enroll from '../enrollDetail/Enroll';



const Course = () => {
    const fifteenCourses = fakeData;
    const [courses, setCourses] = useState(fifteenCourses)

    const [courseCart, setCourseCart] = useState([])

    const handleEnrollButton = (course) => {
        const newcourseCart = [...courseCart, course];
        setCourseCart(newcourseCart);
    }

    return (
        <div className="allCourse-container">
            <div className="course-container">
                    {
                        courses.map(course => <CourseInformations handleEnrollButton={handleEnrollButton} course={course}></CourseInformations>)
                    }
            </div>

            <div className="enroaled-container">
                <Enroll enroll={courseCart}></Enroll> 
            </div>
            
            
        </div>
    );
};

export default Course;