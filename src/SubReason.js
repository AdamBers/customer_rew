import React, { useState } from 'react';

const SubReason = ({ i, item }) => {

    const [isActive, setActive] = useState(false)

    const toggleClass = (i) => {
        setActive(!isActive);
    }
    return (
        <span className={isActive ? "sub_reasons__items active" : "sub_reasons__items"} key={i} onClick={() => toggleClass(i)} >
            {item}
        </span >
    )
}

export default SubReason