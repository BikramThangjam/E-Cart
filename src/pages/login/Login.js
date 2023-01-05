import { useState } from "react";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import "./Login.css";

function Login() {

  const [loginUser, setLoginUser] = useState({});

  const handleLoginSubmit = () => {
    console.log(loginUser);
  }

  return (
    <>
      <Header/>
      <div className="container-fluid col-md-6 p-5 login-container">
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlInput1" className="form-label">
            Email
          </label>
          <input
            onChange={(e) => {
              loginUser.email = e.target.value;
              setLoginUser(loginUser);
            }}
            //   value ={loginUser.email}
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="examplehtmlFormControlTextarea1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              loginUser.password = e.target.value;
              setLoginUser(loginUser);
            }}
            // value={loginUser.password}
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"></input>
        </div>
        <input className="btn btn-primary " value="Login" type="submit" onClick={handleLoginSubmit} />
      </div>
      <Footer/>
    </>

  );
}

export default Login;