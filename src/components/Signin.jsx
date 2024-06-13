import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    const [data, setData] = useState(
        {
            "emailid": "",
            "password": ""
        }
    )
    const inputHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8000/signin",data).then(
            (Response)=>{
                console.log(Response.data)
                if(Response.data.status == "success"){
                    alert("Successfully added")
                } else {
                    alert("Error")
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>EmailID</label>
                                <input type="text" className='form-control' name="emailid" value={data.emailid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Password</label>
                                <input type="password" className='form-control' name="password" value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary" onClick={readValue}>Submit</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <Link to="/signup">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin