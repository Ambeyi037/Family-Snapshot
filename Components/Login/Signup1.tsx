// import React from 'react'
import { useState } from 'react'
import './Signup1.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import React from 'react'

export default function Signup1() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        // relationship: "",
        f_name: "",
        surname: '',
        gender: '',
        email: '',
        occupation: '',
        dob: '',
        home_place: '',
        alive: true,
        password: ''
    })
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
        axios.post("http://127.0.0.1:8000/post_person", form)
            .then(res => {
                alert("Data Added Succesfully")
                navigate("/login")
            }).catch(err => console.log(err))
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const handleEmail = (e: any) => {
        const email = e.target.value
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            return false;
        } else {
            setEmailError('');
            setForm({ ...form, email });
            return true;
        }
    };

    const handlePassword = (e: any) => {
        const password = e.target.value;
        if (!passwordRegex.test(password)) {
            setPasswordError('Your password strength is weak');
            return false;
        } else {
            setPasswordError('');
            setForm({ ...form, password })
            return true;
        }
    };

    const handleConfirmPassword = (e: any) => {
        const pass2 = e.target.value
        if (pass2 !== form.password) {
            setConfirmPasswordError("The passwords do not match")
            return false;
        } else {
            setConfirmPasswordError("")
            return true
        }

    }


    return (
        // <div className='signup-container1'>
        <div className="signup-container">
            <header>Create Your Family Snapshot Account and Join our Community.</header>

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
                                <label>Gender</label>
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
                                <input type="date" min="1900-01-01" max='2015-01-01' placeholder="Enter expiry date" name='dob' onChange={handleChange} required />
                            </div>

                            <div className="input-field">
                                <label>Home Place</label>
                                <input type="text" placeholder="Enter Home Place" name='home_place' onChange={handleChange} required />
                            </div>

                        </div>
                    </div>

                    <div className="details personal">
                        <span className="title">Login Credentials</span>

                        <div className="fields">

                            <div className="input-field">
                                <label>Enter Email</label>
                                <input type="email" placeholder="Enter your Email" name='email' onChange={handleEmail} required />
                                {emailError && <div className="error">{emailError}</div>}
                            </div>

                            <div className="input-field">
                                <label>Password</label>
                                <input type="password" placeholder="Enter Password" name='password' onChange={handlePassword} required />
                                {passwordError && <div className="error">{passwordError}</div>}
                            </div>
                            <div className="input-field">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Confirm Password" name='password' onChange={handleConfirmPassword} required />
                                {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
                            </div>

                            <button className="nextBtn">
                                <span className="btnText"><button type='submit'>Signup</button></span>
                                <i className="uil uil-navigator"></i>
                            </button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
        // </div>
    )
}
