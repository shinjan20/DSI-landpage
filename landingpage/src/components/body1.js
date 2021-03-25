import { Button } from '@material-ui/core'
import React from 'react'
import '../App.css';
import '../responsiveapp.css';

function Body1() {
    return (
        <div className="body1info">
        <div className="body1infofirst">
           <h1>Making the most of the</h1>
           <h1>ever-growing</h1>
           <h1 style={{color:'#EE4248'}}>Information Technology</h1>
           <h3 style={{opacity:1,padding:'20px 0'}}>Managed by a team of professional experts with extensive experience and impressive track records</h3>
           <Button className='btn' size="large"  style={{backgroundColor:'#EE4248',color:'white'}}>Read More</Button>
        </div>
        <img src='/pana (2).png'/>
        </div>
    )
}

export default Body1;
