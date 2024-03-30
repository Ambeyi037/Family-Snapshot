import { useContext, useState } from 'react'
import './Login1.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserContext from './UserContext/UserContext'
import { useRef } from 'react'

export default function Login1() {
    // Local storage email and password
    const userData = useRef()
    const getUserData = localStorage.getItem("userData")


    const navigate = useNavigate()
    const { loginUser } = useContext(UserContext);


    // State for user login
    const [userForm, setUserForm] = useState({
        email: "",
        password: ''
    })

    // State for admin login
    const [adminForm, setAdminForm] = useState({
        email: "",
        password: ''
    })

    // State for email errors
    const [userEmailError, setUserEmailError] = useState("")
    const [adminEmailError, setAdminEmailError] = useState("")

    // Handlers for user login
    const handleUserChange = (e: any) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        })
    }

    const handleUserEmail = (e: any) => {
        const email = e.target.value;
        setUserForm(prevState => ({ ...prevState, email }));
        validateUserEmail(email);
    }

    // Handlers for admin login
    const handleAdminChange = (e: any) => {
        setAdminForm({
            ...adminForm,
            [e.target.name]: e.target.value
        })
    }

    const handleAdminEmail = (e: any) => {
        const email = e.target.value;
        setAdminForm(prevState => ({ ...prevState, email }));
        validateAdminEmail(email);
    }

    const handleSubmitUser = (e: any) => {
        e.preventDefault();
        console.log(userForm);
        const params = new URLSearchParams();

        params.append('username', userForm.email);

        params.append('password', userForm.password);
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/login",
            data: params,
        })
            .then(res => {
                const userId = res.data.logged_in_user;

                localStorage.setItem("userData", userId)
                console.log(res.data.logged_in_user)
                alert("User Login Successfull")
                navigate(`/home/`)
            }).catch(err => alert("Invalid Email or password!!"))
    };

    const handleSubmitAdmin = (e: any) => {
        e.preventDefault();
        console.log(adminForm);
        const params = new URLSearchParams();

        params.append('username', adminForm.email);

        params.append('password', adminForm.password);
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/login",
            data: params,
        })
            .then(res => {
                console.log(res.data.logged_in_user)
                alert("Admin Login Successfull")

                // setIsSignedIn(true)
                navigate("/home")
            }).catch(err => alert(err))
        navigate('/home')
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateUserEmail = (email: string) => {
        if (!emailRegex.test(email)) {
            setUserEmailError('Invalid email address.');
        } else {
            setUserEmailError('');
        }
    };

    const validateAdminEmail = (email: string) => {
        if (!emailRegex.test(email)) {
            setAdminEmailError('Invalid email address.');
        } else {
            setAdminEmailError('');
        }
    };

    return (
        <div className="login-container">
            <header>Login in Your Family Snapshot Account and Enjoy the Services Offered.</header>

            <form onSubmit={handleSubmitUser}>
                <div className="form first">
                    <div className="details personal">
                        <span className="title">User Login</span>
                        <div className="fields">
                            <div className="input-field">
                                <label>Enter Email</label>
                                <input type="email" placeholder="Enter your Email" name='email' onChange={handleUserEmail} value={userForm.email} required />
                                {userEmailError && <div className="error">{userEmailError}</div>}
                            </div>
                        </div>

                        <div className="fields">
                            <div className="input-field">
                                <label>Password</label>
                                <input type="password" placeholder="Enter Password" name='password' onChange={handleUserChange} value={userForm.password} required />
                            </div>
                        </div>
                        <button className="nextBtn" type='submit'>
                            <span className="btnText">Login</span>
                            <i className="uil uil-navigator"></i>
                        </button>
                    </div>
                </div>
            </form>

            {/* <form onSubmit={handleSubmitAdmin}>
                <div className="form first">
                    <div className="details personal">
                        <span className="title">Administrator Login</span>
                        <div className="fields">
                            <div className="input-field">
                                <label>Enter Email</label>
                                <input type="email" placeholder="Enter your Email" name='email' onChange={handleAdminEmail} value={adminForm.email} required />
                                {adminEmailError && <div className="error">{adminEmailError}</div>}
                            </div>
                        </div>

                        <div className="fields">
                            <div className="input-field">
                                <label>Password</label>
                                <input type="password" placeholder="Enter Password" name='password' onChange={handleAdminChange} value={adminForm.password} required />
                            </div>
                        </div>
                        <button className="nextBtn" type='submit'>
                            <span className="btnText">Login</span>
                            <i className="uil uil-navigator"></i>
                        </button>
                    </div>
                </div>
            </form> */}
        </div >
    )


}

// export const loggedIn
