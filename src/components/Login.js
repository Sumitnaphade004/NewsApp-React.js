import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/newsApp/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    // console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      // console.log(localStorage)  //This used for to check authtoken is getting or not 
      props.showAlert(" Logged in successfully", "success");
      console.log("Harshal Don")
      navigate("/");
    }
    else {
      props.showAlert(" Invalid Credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{marginTop: "1rem","width": "50rem"}}>
      <h2>Login to Continue</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"> Email address </label>
          <input type="email" className="form-control" name="email" id="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"> Password </label>
          <input type="password" className="form-control" name="password" id="password" value={credentials.password} onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary"> Login </button>
      </form>
    </div>
  );
};

export default Login;
