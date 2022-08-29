import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


    const navigate = useNavigate();
   const {storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { username, password };

        const createUser = async () => {
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/login`,
          body
        );
        let createToken = await storeToken(response.data.authToken);
        authenticateUser();
        navigate("/signup");
      } catch (error) {
        console.log(error)
      }
    };
    createUser();
  };

    return (
      <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={username}
          onChange={handleUsername}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">signup</button>
      </form>
      </div>
    );
  };
