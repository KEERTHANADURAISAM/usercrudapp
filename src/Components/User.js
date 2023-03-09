import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Base from "../Base/Base";
import "./User.css";
export default function User() {
  const [user, setUser] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const navigate = useNavigate();
  const login = () => {
    navigate("/create-user");
  };

  useEffect(() => {
    loaddata();
  }, []);
  let loaddata = async () => {
    setIsloading(true);
    let user = await axios.get(
      "https://63ae58f93e465169166fab20.mockapi.io/user"
    );
    
    setUser(user.data);
    setIsloading(false);
  };

  // delete user data
  let userDelete = async (id) => {
   
    try {
      let ask=window.confirm(`Are you sure? you want to delete this data?`)
      if(ask){
      await axios.delete(
        `https://63ae58f93e465169166fab20.mockapi.io/user/${id}`
             );
        loaddata()
      }
    } catch (err) {}
  };

  return (
    <Base>
      <h1>User Details</h1>
      <button className="user-btn" onClick={login}>
        Create User
      </button>
      <br></br>
      <br></br>
      <div className="container">
        <table className="table">
          <tr>
            <th>#Sl</th>
            <th>Name</th>
            <th>Office</th>
            <th>Position</th>
            <th>Age</th>
            <th>Start_Date</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>

          <tbody>
            {user.map((user, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.office}</td>
                <td>{user.position}</td>
                <td>{user.age}</td>
                <td>{user.start_date}</td>
                <td>${user.salary}</td>
                <td className="btn">
                  <Link to={`/user/${user.id}`}>
                    <button className="btn-color1">View</button>
                  </Link>
                  <Link to={`/user/edit/${user.id}`}>
                    <button className="btn-color2">Edit</button>
                  </Link>
                  <button
                    className="btn-color3"
                    onClick={() => userDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Base>
  );
}
