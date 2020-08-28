import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome to SkillUp</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/course">Courses</a>
                <a href="/order">Order</a>
            </nav>
        </div>
    );
};

export default Header;