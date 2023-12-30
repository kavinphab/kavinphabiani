import React from 'react';
import picofme from './picofme.jpg'

const About = () => {
    return (
        <div className='w-full h-[50vh] flex justify-start items-center p-20 bg-gradient-to-b from-slate-300 to-slate-200' >
            
            <div>
                <h1 className='text-5xl w-full text-center'>About Me</h1>
                <br/>
                <p className='text-center mx-60'>Welcome to my webiste! My name is Kavin Phabiani, a computer science student at UC Riverside with a passion for full-stack development 
                and data science. Beyond coding, I'm love playing sports like basketball, tennis, soccer, and pickleball. I thrive on constant learning, embracing new skills 
                and hobbies to stay ahead of an ever-evolving world.</p>
            </div>
        </div>
    );
}

export default About;