import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// Get the id in URL

export default function () {
  const navigate = useNavigate();
  const { id } = useParams();
  const BASEURL = "http://127.0.0.1:8000/person/" + id;

  // const [form, setform] = useState([]);
  const [form, setForm] = useState({
    f_name: "",
    surname: "",
    gender: "",
    occupation: "",
    dob: "",
    home_place: "",
    alive: true,
    email: "isaac@gmail.com",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  useEffect(() => {
    fetch(BASEURL)
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, []);
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    axios
      .put("http://127.0.0.1:8000/update_person/" + id, form)
      .then((res) => {
        alert("Updated Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} contentEditable="true">
      <div className="form first">
        <div className="details personal">
          <span className="title">Personal Details</span>

          <div className="fields">
            <div className="input-field">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="f_name"
                contentEditable="true"
                value={form.f_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <label>Surname</label>
              <input
                type="text"
                placeholder="Enter Surname"
                contentEditable="true"
                name="surname"
                value={form.surname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <label>Sex</label>
              <select
                value={form.gender}
                name="gender"
                onChange={handleChange}
                required
              >
                <option disabled selected>
                  Select gender
                </option>
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
                value={form.occupation}
                onChange={handleChange}
                name="occupation"
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
              <input
                type="date"
                placeholder="Enter expiry date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <label>Home Place</label>
              <input
                type="text"
                placeholder="Enter Home Place"
                name="home_place"
                value={form.home_place}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <label>Status</label>
              <select
                name="alive"
                value={form.alive}
                onChange={handleChange}
                required
              >
                <option disabled>Select status</option>
                <option selected>Alive</option>
                <option>Deceased</option>
              </select>
            </div>

            <button className="nextBtn">
              <span className="btnText">
                <button type="submit">Update</button>
              </span>
              <i className="uil uil-navigator"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
    // <h2>Yes Update</h2>
  );
}
