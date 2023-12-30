import React from 'react';

const Skills = () => {
    return (
        <div className='bg-gradient-to-b from-slate-200 to-slate-100 grid grid-cols-2 gap-4 w-full h-[65vh]'>
            <div className='mx-32'>
                <h1 className='text-5xl'>Skills</h1>
                <br/>
                <p>Languages: Python, C++, JavaScript</p>
                <p>Tools: Git, Github, VS Code, Tableau</p>
                <p>Frameworks: NextJS, Tailwind</p>
                <br/>
                <h1 className='text-5xl'>Education</h1>
                <p>BS in Computer Science form University of California Riverside</p>
            </div>
                
            <div>
            <h1 className='text-5xl'>Projects</h1>
                <br/>
                <h2 className='text-3xl'>ACM Official Website</h2>
                <ul className='list-disc'>
                    <li>Developed a website for the Association for Computing Machinery (ACM) club at UCR</li>
                    <li>Used NextJS and Tailwind to build the website</li>
                    <li>Used Git and Github to collaborate with other developers</li>
                </ul>
                <br/>
                <h2 className='text-3xl'>Cutie Sentimental</h2>
                <ul className='list-disc'>
                    <li>Created a discord bot that ingrates these algorithms into a bot that analyzes text and pictures</li>
                    <li>Utilized OpenAi API’s natural language processing algorithm</li>
                    <li>Used OpenCV’s API to analyze images and detect smiles</li>
                    <li>Created website using React.js to make it easy to add our bot to any discord server</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;