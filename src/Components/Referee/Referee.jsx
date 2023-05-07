import React from 'react';
import { Link } from 'react-router-dom';
import "./Referee.css";

const Referee = () => {
  return (
    <div className='refereeContainer'>
        <h2 className='heading'>Apply Referee</h2>
        <h4><Link className='link' to="/"> IJEPAS </Link>&gt; Apply Referee</h4>
        <h2>Looking for</h2>
          <input type="radio" id="" name="formtype" value="General Inquiry"/>
          <label for="inquiry">General Inquiry</label>
         <input type="radio" id="" name="formtype" value="Journal"/>
          <label for="journal">Journal</label>
        <div className='form'>
            <form action="" method="post">
                <div>
                    <label htmlFor="Title">First Name</label>
                    <input type="text" name="fName" id="" />
                    <label htmlFor="Abstract">Last Name</label>
                    <input type="text" name="lName" id="" />
                    <label htmlFor="Author">Mobile No.</label>
                    <input type="text" name="mobileNumber" id="" />
                    <label htmlFor="Country">Your Email</label>
                    <input type="email" name="Email" id="" />
                    <label htmlFor="Author">Address</label>
                    <input type="text" name="address" id="" />
                </div>
                <div>
                    <label htmlFor="Title">City</label>
                    <input type="text" name="city" id="" />
                    <label htmlFor="Abstract">State</label>
                    <input type="text" name="state" id="" />
                    <label htmlFor="Author">Country</label>
                    <input type="text" name="country" id="" />
                    <label htmlFor="Author">Postal/Zip Code</label>
                    <input type="text" name="zipCode" id="" />
                    <label htmlFor="Author">Qualification (B.A, B.Tech, Diploma and Other)</label>
                    <input type="text" name="qualification" id="" />
                    <label htmlFor="Upload Paper">Upload Paper</label>
                    <input type="file" name="upload" id="" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Referee