import React, { useState } from 'react';


const addBodyClass = className => document.body.classList.add(className);
const removeBodyClass = className => document.body.classList.remove(className);

const scroller = (WrappedComponent) => {
    return (props) => {
        const [lastScrollTop, setLastScrollTop] = useState(0);
        const [bodyOffset, setBodyOffset] = useState(
            document.body.getBoundingClientRect()
        );
        const [scrollY, setScrollY] = useState(bodyOffset.top);
        const [, setScrollX] = useState(bodyOffset.left);
        const [, setScrollDirection] = useState();
        const [hideMenuOptionSlider, setHideMenuOptionSlider] = useState(false);
        const [bottomOffset, setBottomOffset] = useState(null);

        //scroll listener
        //detecting bottom to initiate pagination
        const listener = e => {

            setBodyOffset(document.body.getBoundingClientRect());
            setScrollY(-bodyOffset.top);
            setScrollX(bodyOffset.left);
            setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
            // console.log(scrollDirection);
            let scrollDirection = lastScrollTop > -bodyOffset.top ? "down" : "up"

            if (scrollDirection === "up" && scrollY > 70) {
                toggleHeader(false)
            } else {
                toggleHeader(true)
            }
            // debugger;
            setLastScrollTop(-bodyOffset.top);

            let bottom = document.body.scrollHeight - (-bodyOffset.top + bodyOffset.height);
            console.log(bottom);
            setBottomOffset(bottom);
            setHideMenuOptionSlider(!hideMenuOptionSlider)
        };

        //for hiding/showing header
        const toggleHeader = (enable) => {
            if (enable) {
                removeBodyClass("scroll-down")
                addBodyClass("scroll-up")
            } else {
                addBodyClass("scroll-down")
                removeBodyClass("scroll-up")
            }
        }

        return <WrappedComponent {...props} bottomOffset={bottomOffset} toggleHeader={toggleHeader} listener={listener} />;
    }
}

export default scroller;