import { Button } from '@material-ui/core'
import React from 'react'
import '../App.css';

export default function Service() {
    return (
        <div className="clips">
            <img src="verified 1.png"/>
            <h1 style={{fontSize:'32px',color:'#EE4248'}}>Our Service</h1>
            <h3 style={{opacity:0.8,fontSize:'18px'}}>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</h3>
            <Button className='btn' size="large" style={{backgroundColor:'#EE4248',color:'white'}}>Read More</Button>
        </div>
    )
}
