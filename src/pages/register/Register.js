import { useState } from "react";
import "./Register.css";
import {useNavigate} from "react-router-dom";
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";

function Register() {
    
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleSubmit() {
    //console.log(user);
    fetch("http://localhost:4100/api/auth/register", {
            method: "POST",
            headers: {
                "Content-type":"application/json"
                },
            body: JSON.stringify(user),         
        })
        .then((res) => {
            //console.log(res);
            if (res.status === 200) {
              console.log("User registered! go to http://localhost:4100/api/auth/getUsers to see the user details")
              navigate("/login");
            } else if (res.status === 401) {
              console.log("Unauthorized request");
            }
          })
          .catch((err) => {
            console.log(err);
          });

  }

  return (
    <>
      <Header/>
      <div className="container-fluid col-md-6 p-5">
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">
            Email address
          </label>
          <input
            onInput={(e) => {
              user.email = e.target.value;
              setUser(user);
            }}
            value={user.email}
            type="email"
            className="form-control"
            id="register-email"
            placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlTextarea1" className="form-label">
            Full Name
          </label>
          <input
            onInput={(e) => {
              user.name = e.target.value;
              setUser(user);
            }}
            value={user.name}
            type="text"
            className="form-control"
            id="register-name"
            placeholder=""></input>
        </div>
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">
            Password
          </label>
          <input
            onInput={(e) => {
              user.password = e.target.value;
              setUser(user);
            }}
            value={user.password}
            type="password"
            className="form-control"
            id="register-password"
            placeholder="Enter password..."></input>
        </div>
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlTextarea1" className="form-label">
            Date of Birth
          </label>
          <input
            onInput={(e) => {
              user.dob = e.target.value;
              setUser(user);
            }}
            value={user.dob}
            type="date"
            className="form-control"
            id="register-dob"
            placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlTextarea1" className="form-label">
            Country
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              user.country = e.target.value;
              setUser(user);
            }}>
            <option value="1">India</option>
            <option value="2">USA</option>
            <option value="3">UK</option>
          </select>
        </div>
        <input
          onClick={handleSubmit}
          className="btn btn-primary"
          value="Register"
          type="submit"
        />
      </div>
      <Footer/>
    </>
    
  );
}

export default Register;