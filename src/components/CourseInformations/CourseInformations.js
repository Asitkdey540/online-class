import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './CourseInformations.css'

const CourseInformations = (props) => {
    const { img, title, instructor, price } = props.course

    return (
        <div className="courses">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>by: {instructor}</p>
                <p>Price: {price}</p>
                <h5>Bestseller</h5>
                <button className="enroll-btn" onClick={() => props.handleEnrollButton(props.course)}><FontAwesomeIcon icon={faShoppingCart} />Enroll Now</button>
            </div>
        </div>
    );
};

export default CourseInformations;