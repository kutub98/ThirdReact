import React from 'react';
import './ArrOb.css'

const ArrOb = () => {
    const arraies= ['Karim', 'Rahim', 'Jabbar', 'Rahman'];
    const objects = [
        {name: 'Karimullah',  Job: 'Business' , Address: 'Chattogram'},
        {name: 'Rahim Ullah',  Job: 'Teacher' , Address: 'Chattogram'},
        {name: 'Obaid ullah',  Job: 'Advocate' , Address: 'Chattogram'},
        {name: 'Chalim ullah',  Job: 'Probashi' , Address: 'Chattogram'},
        ]
    return (
        <div>
            {
                arraies.map(arr => <li>{arr}</li>)
            }
            {
                <div className='ObjBox'>
                          {
            objects.map(obj => <DisplayObject name= {obj.name} job={obj.Job} Address= {obj.Address}></DisplayObject>)
        }
                </div>
            }
        </div>
    );
};

function DisplayObject(props){
    const {name, job, Address}= props
    return(
        <div className='DisplayObj'>
            <h4>Name:{name}</h4>
            <h5>Job: {job}</h5>
            <p>Adree: {Address}</p>
        </div>
    )
}

export default ArrOb;