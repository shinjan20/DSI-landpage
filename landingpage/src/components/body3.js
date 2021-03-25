import React from 'react'
import Product from './Product'
import Service from './Service'
import Technology from './Technology'
import '../App.css';
import '../responsiveapp.css';
function Body3() {
    return (
        <div className="body3info">
            <h1>Product and Service</h1>
            <div className="body3sec" style={{display:'flex',width:'80%',justifyContent:'space-evenly',height:'100%'}}>
              <Product/>
              <Service/>
              <Technology/>
            </div>
        </div>
    )
}

export default Body3
