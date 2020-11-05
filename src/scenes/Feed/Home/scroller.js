import React, { useRef, useState } from 'react';


const addBodyClass = className => document.body.classList.add(className);
const removeBodyClass = className => document.body.classList.remove(className);

const scroller = (WrappedComponent) => {
    return (props) => {
        const lastScrollTop = useRef(0)
        // const [lastScrollTop, setLastScrollTop] = useState(0);
        // const [bodyOffset, setBodyOffset] = useState(
        //     document.body.getBoundingClientRect()
        // );
        // const [scrollY, setScrollY] = useState(bodyOffset.top);
        const scrollY = useRef(document.body.getBoundingClientRect().top)

        const [, setScrollX] = useState(document.body.getBoundingClientRect().left);
        const [, setScrollDirection] = useState();
        const [hideMenuOptionSlider, setHideMenuOptionSlider] = useState(false);
        const [bottomOffset, setBottomOffset] = useState(null);

        //scroll listener
        //detecting bottom to initiate pagination
        const listener = e => {
            let bodyOffset = document.body.getBoundingClientRect()
            scrollY.current = -bodyOffset.top
            let scrollDirection = lastScrollTop.current > -bodyOffset.top ? "down" : "up"

            if (scrollDirection === "up" && scrollY.current > 70) {
                toggleHeader(false)
            } else {
                toggleHeader(true)
            }

            lastScrollTop.current = -bodyOffset.top;
            let bottom = document.body.scrollHeight - (-bodyOffset.top + bodyOffset.height);
            // console.log(bottom);
            if (bottom < 200) {
                setBottomOffset(bottom);
            }

            if (scrollDirection === "up") {
                setHideMenuOptionSlider(true)
            } else {
                setHideMenuOptionSlider(false)
            }
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