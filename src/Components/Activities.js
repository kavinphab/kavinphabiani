import React from 'react';

const DisplayActivities = ({title, description,link}) => {
    
        return (
            <div>
                <p className='inline-block text-2xl font-medium'>{title}</p>
            <p>{description}</p>
            </div>
            
        );
        }


const Activities = () => {
    return (
        <div className='w-full h-[65vh] bg-gradient-to-b from-slate-300 to-slate-200'>
            <h1 className='text-5xl font-extrabold text-center'>Extracurricular Activities</h1>
            <br/>
            <div className='flex justify-center gap-80'>
                <div> 
                    <DisplayActivities title='Highlander Racing' description='UCR Formula SAE team'/>
                    <br/>
                    <DisplayActivities title='ACM @ UCR' description='UCR Association for Computing Machinery'/>
                    
                    
                </div>
                
                
                <div>
                    <DisplayActivities title='GIS @ UCR' description='UCR Geographic Information Systems'/>
                    <br/>
                    <DisplayActivities title='Intamural Sports' description='Basketball, Tennis, Soccer'/>
                    
                    
                </div>
                
                
            </div>
            
            
                
                
        
        </div>
    );
}

export default Activities;

// 