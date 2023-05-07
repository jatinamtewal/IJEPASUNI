import React from 'react'
import { Link } from 'react-router-dom';
import "./Submission.css";
const Submission = () => {
  return (
    <div className='submissionContainer'>
        <h2 className='heading'>Submission</h2>
        <h4><Link className="link" to="/"> IJEPAS </Link>&gt; Submission</h4>
        <div className='form'>
            <form action="" method="post">
                <label htmlFor="Title">Title for Research Paper</label>
                <input type="text" name="Title" id="" required/>
                <label htmlFor="Abstract">Abstract</label>
                <input type="text" name="abstract" id="" required/>
                <label htmlFor="Author">Author's</label>
                <input type="text" name="Author" id="" required/>
                <label htmlFor="Country">Country</label>
                <input type="text" name="Country" id="" />
                <label htmlFor="Country">Your Email</label>
                <input type="email" name="Email" id="" required/>
                <label htmlFor="Upload Paper">Upload Paper</label>
                <input type="file" name="upload" id="" accept=".pdf"  required />
                <input type="submit" value="Submit" />
                
            </form>
        </div>
    </div>
  )
}

export default Submission