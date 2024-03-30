// import React from 'react'
import { useState } from 'react'
import './CreateEvent.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import React from 'react'

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

const getUser = localStorage.getItem("userData")
const user = parseInt(getUser)


export default function CreateEvent() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [form, setForm] = useState({
        f_name: "",
        surname: '',
        host_title: '',
        event_title: '',
        venue: '',
        event_date: '',
        event_time: "",
        created_at: null,
        description: '',
        created_by: user
        // id
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
        axios.post("http://127.0.0.1:8000/post_event", form)
            .then(res => {
                alert("Event added Succesfully")
                navigate("/events")
            }).catch(err => console.log(err))
    };
    return (
        <body>
            <div className="register-container">
                <header>Create A Family Event</header>

                <form onSubmit={handleSubmit}>
                    <div className="form first">
                        <div className="details personal">
                            <span className="title">Host Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Host first name" name='f_name' onChange={handleChange} required />
                                </div>

                                <div className="input-field">
                                    <label>Surname</label>
                                    <input type="text" placeholder="Host surname" name='surname' onChange={handleChange} required />
                                </div>

                                <div className="input-field">
                                    <label>Host Title</label>
                                    <select onChange={handleChange} name='host_title' required>
                                        <option disabled selected>Select Your Title</option>
                                        <option>Sir</option>
                                        <option>Dr</option>
                                        <option>Mr</option>
                                    </select>
                                </div>

                                <div className="input-field">
                                    <label>Event Title</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Event title"
                                        onChange={handleChange}
                                        name='event_title'
                                        required
                                    />
                                </div>

                                <div className="input-field">
                                    <label>Venue</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the Event Venue"
                                        onChange={handleChange}
                                        name='venue'
                                        required
                                    />
                                </div>

                                <div className="input-field">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        placeholder="Date of the Event"
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        name='event_date'
                                        required
                                    />
                                </div>

                                <div className="input-field">
                                    <label>Time</label>
                                    <input
                                        type="time"
                                        onChange={handleChange}
                                        min={getCurrentTime()}
                                        name='event_time'
                                        required
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="details ID">
                            <span className="title">Description</span>

                            <div className="fields">
                                <textarea className="input-field" onChange={handleChange} name="description" id="" cols={200} rows={8}></textarea>

                                <button className="nextBtn">
                                    <span className="btnText"><button type='submit'>Create Event</button></span>
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
