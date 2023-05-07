import React from 'react';
import { Link } from 'react-router-dom';
import "./Scope.css";
import ScopeTitle from "../../InnerComponents/ScopeTitle.jsx";
import data from "../../data.json";

const Scope = () => {
  return (
    <div className='scopeContainer'>
        <h2 className='heading'>Scope</h2>
        <h4><Link className="link" to="/"> IJEPAS </Link>&gt; Scope</h4>
        <div>
            <p>The below mentioned areas are just indicative. The editorial board also welcomes innovative articles that redefine any Science and Technology field.</p>
            <div>
              {data.scope && data.scope.map((item,index)=>{
                return (<ScopeTitle key={index} data={item}/>)
              })}
            </div>
        </div>
    </div>
  )
}

export default Scope