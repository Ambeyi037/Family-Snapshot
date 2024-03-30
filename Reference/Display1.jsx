import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASEURL = "http://127.0.0.1:8000/persons";

export default function Display() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(BASEURL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);
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
              {users.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.f_name}</td>
                  <td>{data.surname}</td>
                  <td>{data.dob}</td>
                  <td>{data.email}</td>
                  <td>{data.gender}</td>
                  <td>{data.marital_status}</td>
                  <td>
                    <Link
                      to={`/read/${data.id}`}
                      className="btn btn-sm btn-info me-2"
                    >
                      Read
                    </Link>
                    <Link
                      to={`/update/${data.id}`}
                      className="btn btn-sm btn-primary "
                    >
                      Edit
                    </Link>
                    <Link to="/delete" className="btn btn-sm btn-danger ms-1">
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
