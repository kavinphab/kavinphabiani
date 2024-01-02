import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Landing = () => {
    return (
        <div className='w-full h-[90vh] flex justify-center items-center bg-gradient-to-b from-slate-700 to-slate-500'>
            
            <div>
                <h1 className='text-6xl'>Kavin Phabiani</h1>
                <br/>
                <p className='flex justify-center'>Student | Aspiring Software Engineer</p>
                <div className='mt-5 flex space-x-4 place-content-center'>
                    <a href="https://www.linkedin.com/in/kavin-phabiani/" className='text-black '>
                        
                            {<FaLinkedin className='text-2xl hover:scale-110' /> }
                    </a>
                    <a href="https://github.com/kavinphab" className='text-black '>
                    {<FaGithub className='text-2xl hover:scale-110' /> }
                    </a>
                </div>
            </div>
        </div>
        
    );
};

export default Landing;
