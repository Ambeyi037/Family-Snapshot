import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASEURL = "http://127.0.0.1:8000/person_relationships/11";

export default function Display() {
  const [users, setUsers] = useState({
    children: [],
    spouses: [],
    parents: [],
    siblings: [],
  });

  useEffect(() => {
    fetch(BASEURL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(typeof users);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <h1>Family Members</h1>
        <div className="w-75 rounded bg-white border shadow p-4">
          <div className="d-flex justify-content-end">
            <Link to="/addMember" className="btn btn-sm btn-primary me-2">
              Add Member +
            </Link>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Surname</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Married</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.children.map((child, index) => (
                <tr key={index}>
                  <td>{child.id}</td>
                  <td>{child.f_name}</td>
                  <td>{child.surname}</td>
                  <td>{child.dob}</td>
                  <td>{child.email}</td>
                  <td>{child.gender}</td>
                  <td>{child.marital_status}</td>
                  {/* Add more columns if needed */}
                </tr>
              ))}
              {users.spouses.map((spouse, index) => (
                <tr key={index}>
                  <td>{spouse.id}</td>
                  <td>{spouse.f_name}</td>
                  <td>{spouse.surname}</td>
                  <td>{spouse.dob}</td>
                  <td>{spouse.email}</td>
                  <td>{spouse.gender}</td>
                  <td>{spouse.marital_status}</td>
                  {/* Add more columns if needed */}
                </tr>
              ))}
              {/* Render parents and siblings similarly */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
