import React,{useState} from 'react'
import '../App.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Navbar() {
    const[open,setopen]=useState("");
    const[count,setcount]=useState(0);
    window.addEventListener("scroll",()=>{
        if(window.pageYOffset>0)
        {
            setopen("");
        }
    })
    return (
        <div className='nav'>
            <div className="nav-whole">
            <img className="app-header" src="./Group 1317.png"/>
            <ul className={`links${open}`}>
            <li>Services</li>
            <li>Product</li>
            <li>Technology</li>
            <li style={{display:'flex',alignItems:'center'}}>
            <span>About</span>
            <ExpandMoreIcon fontSize='large'/>
            </li>
            <li style={{display:'flex',alignItems:'center'}}>
            <span>client</span>
            <ExpandMoreIcon fontSize='large'/>
            </li>
            <li>Partner</li>
            </ul>
            <ul className="links-2">
            <li><img src="/Union (1).png"/></li>
            <li><img src="/mail.png"/></li>
            <li><img src="/shuffle.png"/></li>
            </ul>
            <ul className="hamburger" onClick={(e)=>{(count%2==0)?setopen("open"):setopen("");setcount(count+1);}}>
             <img src="./text_align_right.png"/>
            </ul>
            </div>
        </div>
    )
}
