import { Button } from '@material-ui/core';
import React from 'react';
import '../App.css';

function Product() {
    return (
        <div className="clips">
            <img src="/product-description 1.svg"/>
            <h1 style={{fontSize:'32px',color:'#EE4248'}}>Our Product</h1>
            <h3 style={{opacity:0.8,fontSize:'18px'}}>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</h3>
            <Button className='btn' size="large" style={{backgroundColor:'#EE4248',color:'white'}}>Read More</Button>
        </div>
    )
}

export default Product
