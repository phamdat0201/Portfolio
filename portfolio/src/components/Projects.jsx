import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectImg from '../assets/img/project/projectImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div className='wrapper' id='project'>
            <h1 className='ndv__title'>PROJECTS</h1>
            
            <div className='grid grid-cols-3 gap-y-20 gap-x-20 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-10'>
                {
                    ProjectImg.map((project,index)=>{
                        return(
                            <a href={project.link} key={index} className='relative group sm:h-[150px] sm:w-[150px] ' data-aos="fade-right" target="_blank" rel="noreferrer"
                            data-aos-easing="ease-in-sine">
                                <div className='absolute group-hover:hidden bg-second_color p-[6px] text-sm rounded-tl-lg rounded-br-lg'>{project.title}</div>
                                <img className='rounded-lg ndv__img ' src={project.img} alt='project'></img>
                                <div className='absolute top-0 items-center justify-center hidden w-full h-full group-hover:flex z-3 '>
                                    <div className='absolute top-0  left-0 bg-second_color p-[6px] text-sm rounded-tl-lg rounded-br-lg animate-tag_animate'>{project.description}</div>
                                    <div className='text-white '><FontAwesomeIcon className='text-3xl' icon={faEye}/></div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Projects;
