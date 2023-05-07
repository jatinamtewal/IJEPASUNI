import React from 'react';
import { Link } from 'react-router-dom';
import "./Current.css";
import File from "../../InnerComponents/File.jsx";
import data from "../../data.json";

const Current = () => {
  return (
    <div className='currentContainer'>
        <h2 className='heading'>Current</h2>
        <h4><Link className="link" to="/"> IJEPAS </Link>&gt; Current</h4>

        {   data.current && data.current.map((item,index)=>{
                 return(<File key={index} data={item}/>)
        })}
        
    </div>
  )
}

export default Current