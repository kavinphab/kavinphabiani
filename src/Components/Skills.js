import React from 'react';

const Skills = () => {
    return (
        <div className='grid grid-cols-2 gap-4 ml-20'>
            <div>
                <h1 className='text-5xl'>Skills</h1>
                <br/>
                <p>Languages: Python, C++, JavaScript</p>
                <p>Tools: Git, Github, VS Code, Tableau</p>
                <p>Frameworks: NextJS, Tailwind</p>
            </div>

            <div>
                <h1 className='text-5xl'>Education</h1>
                <p>BS in Computer Science form University of California Riverside</p>
            </div>
        </div>
    );
};

export default Skills;