import { Button } from '@material-ui/core'
import React from 'react'
import '../App.css';

export default function Technology() {
    return (
        <div className="clips">
            <img src="/cogwheel 1.png"/>
            <h1 style={{fontSize:'32px',color:'#EE4248'}}>Our Technology</h1>
            <h3 style={{opacity:0.8,fontSize:'18px'}}>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</h3>
            <Button  className='btn' size="large" style={{backgroundColor:'#EE4248',color:'white'}}>Read More</Button>
        </div>
    )
}
