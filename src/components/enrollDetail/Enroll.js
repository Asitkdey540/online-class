import React from 'react';

const Enroll = (props) => {
    const enrollDetail = props.enroll
    // console.log(enrollDetail)
    let total = 0;
    for(let i = 0; i< enrollDetail.length; i++){
        const course = enrollDetail[i];
        total = total + course.price;
    }

    return (
        <div className="enroll">
            <h3>Order Sammary</h3>
            <p><small>Course ordered: {enrollDetail.length}</small></p>
            <p>Total price: ${total}</p>

        </div>
    );
};

export default Enroll;