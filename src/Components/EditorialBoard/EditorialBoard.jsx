import React from 'react';
import { Link } from 'react-router-dom';
import "./Editorial.css";
import data from "../../data.json";
import Members from "../../InnerComponents/Members.jsx";
const EditorialBoard = () => {
  return (
    <div className='editorialContainer'>
        <h2 className='heading'>Editorial Board</h2>
        <h4><Link className="link" to="/"> IJEPAS </Link>&gt; Editorial Board</h4>
        <h3>Cheif-Editor:</h3>
        <div>
            <p>Prof. Subodh Kumar Sharma</p>
            <p>Adama Science and Technology University, Adama, Ethiopia.</p>
            <span>Email:-editorijepas@gmail.com, subodhamb@rediffmail.com</span>
        </div>
        <h3>Editor:</h3>
        <div>
            <p>Prof. Subodh Kumar Sharma</p>
            <p>Adama Science and Technology University, Adama, Ethiopia.</p>
            <span>Email:-editorijepas@gmail.com, subodhamb@rediffmail.com</span>
        </div>
        <h3>Editorial Board Members:</h3>
        <div>
            {
                data.EditorialBoardMembers && data.EditorialBoardMembers.map((item,index)=>{
                    return (<Members key={index} data={item}/>)
                })
            }           
        </div>
        <h3>Review Board Members:</h3>   
        <div>
            {
                data.ReviewBoardMembers && data.ReviewBoardMembers.map((item,index)=>{
                    return (<Members key={index} data={item}/>)
                })
            }           
        </div>
    </div>
  )
}

export default EditorialBoard