import React, { useEffect, useRef } from 'react';
import * as Icon from "../assets/icons";
const ScrollUp = () => {
    const scrollUp = useRef();
    const handleScroll=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    useEffect(()=>{
        window.addEventListener("scroll", (event) => {
            let scroll = window.scrollY;
            if(scroll>550){
                scrollUp.current.classList.add('ndv__showScroll')
            }
            else{
                scrollUp.current.classList.remove('ndv__showScroll')
            }
        })
    })
    return (
        <button ref={scrollUp} className='fixed right-7 sm:right-[26px] text-white bg-gray-600 hover:bg-black w-9 h-9 rounded-lg flex items-center justify-center' onClick={() => { handleScroll() }}>
            <i>
                {<Icon.UpIcon/>}
            </i>
        </button>
    );
}

export default ScrollUp;
