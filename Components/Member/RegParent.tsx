// import React from 'react'
import { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
const getUser = localStorage.getItem("userData")
const user = parseInt(getUser)
export default function RegisterParent() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [form, setForm] = useState({
        f_name: "",
        surname: '',
        gender: '',
        occupation: '',
        dob: '',
        home_place: '',
        alive: true,
        email: "isaac@gmail.com",
        password: "",
        submitter: user
    })

    const today = new Date();

    const maxDate = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate()).toISOString().split('T')[0];
    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(form);
        axios.post("http://127.0.0.1:8000/post_parent/" + user, form)
            .then(res => {
                alert("Data Added Succesfully")
                navigate("/summary")
            }).catch(err => console.log(err))
    };
    return (
        <body>
            <div className="register-container">
                <header>Register Family Members</header>

                <form onSubmit={handleSubmit}>
                    <div className="form first">
                        <div className="details personal">
                            <span className="title">Personal Details</span>

                            <div className="fields">

                                <div className="input-field">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Enter your first name" name='f_name' onChange={handleChange} required />
                                </div>

                                <div className="input-field">
                                    <label>Surname</label>
                                    <input type="text" placeholder="Enter your surname" name='surname' onChange={handleChange} required />
                                </div>

                                <div className="input-field">
                                    <label>Sex</label>
                                    <select onChange={handleChange} name='gender' required>
                                        <option disabled selected>Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className="input-field">
                                    <label>Occupation</label>
                                    <input
                                        type="text"
                                        placeholder="Enter occupation"
                                        onChange={handleChange}
                                        name='occupation'
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="details ID">
                            <span className="title">Birth Details</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label>Birth Day</label>
                                    <input type="date" min="1900-01-01" max={maxDate} placeholder="Enter expiry date" name='dob' onChange={handleChange} required />
                                </div>

                                <div className="input-field">
                                    <label>Home Place</label>
                                    <input type="text" placeholder="Enter Home Place" name='home_place' onChange={handleChange} required />
                                </div>


                                <div className="input-field">
                                    <label>Status</label>
                                    <select onChange={handleChange} name='alive' required>
                                        <option disabled >Select status</option>
                                        <option selected>Alive</option>
                                        <option>Deceased</option>
                                    </select>
                                </div>

                                <button className="nextBtn">
                                    <span className="btnText"><button type='submit'>Submit</button></span>
                                    <i className="uil uil-navigator"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </body>
    )
}
