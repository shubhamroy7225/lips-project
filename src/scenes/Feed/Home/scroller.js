import React, { useRef, useState } from 'react';

const addBodyClass = className => document.body.classList.add(className);
const removeBodyClass = className => document.body.classList.remove(className);

const scroller = (WrappedComponent) => {
    return (props) => {
        const lastScrollTop = useRef(0)
        const scrollY = useRef(document.body.getBoundingClientRect().top)

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

        return <WrappedComponent {...props} toggleHeader={toggleHeader} listener={listener} />;
    }
}

export default scroller;