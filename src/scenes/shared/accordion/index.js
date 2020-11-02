import React, { useState, useRef } from 'react';
import "./accordion.css";

const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const content = useRef(null);

    const toggleAccordion = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    return(
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <h3 className="accordion__title">{props.title}</h3>
            </button>
            <div ref={content} className="accordion__content" style={{ maxHeight: `${setHeight}` }}>
                <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} />
            </div>
        </div>
    );    
}

export default Accordion;