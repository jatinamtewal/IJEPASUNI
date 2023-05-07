import React from 'react'
import { Link } from 'react-router-dom';
import "./Archive.css";
import data from "../../data.json";
import AFile from '../../InnerComponents/AFile.jsx';
const Archive = () => {
  return (
    <div className='archiveContainer'>
        <h2 className='heading'>Archive</h2>
        <h4><Link className="link" to="/"> IJEPAS </Link>&gt; Archive</h4>

        {data.archive && data.archive.map((item,index)=>{
            return(<AFile key={index} data={item}/>)
        })}
    </div>
  )
}

export default Archive