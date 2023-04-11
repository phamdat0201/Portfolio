import React, { useEffect } from 'react';
import SkillImages from '../assets/img/skill/skillImages';
import AOS from "aos";
import "aos/dist/aos.css";
const Skill = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div className='wrapper ' id='skill'>
            <h1 className='ndv__title'>SKILL</h1>
            <h3 className='text-center text-gray-500 mb-[100px]'>SKILLS IN THE PROCESS OF LEARNING AND WORKING WITH MANY PROJECTS</h3>
            <div className='grid grid-cols-4 sm:grid-cols-3 sm:gap-y-10 sm:gap-x-12 gap-y-20 justify-center items-center' data-aos="zoom-out-up">
                {
                    SkillImages.map((skill, index) => {
                        return (
                            <div key={index} className='w-[180px] h-[180px] sm:w-[100px] sm:h-[100px] flex justify-center items-center rounded-full animate-pulse border-gray-200 border-4'>
                                <div key={index} className='w-[110px] h-[110px] sm:w-[64px] sm:h-[64px]'>
                                    <img src={skill.img} className='w-full h-full object-center object-contain rounded-full' alt='Skill' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Skill;
