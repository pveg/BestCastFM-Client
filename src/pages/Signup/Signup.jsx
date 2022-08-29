import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");

    const navigate = useNavigate();
   const { authenticateUser } = useContext(AuthContext);

  const handleName = (e) => setName(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleSurname = (e) => setSurname(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { username, password, name, surname, email };

        const createUser = async () => {
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/signup`,
          body
        );
        authenticateUser();
        navigate("/login");
      } catch (error) {
        console.log(error)
      }
    };
    createUser();
  };

    return (
      <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={name}
          onChange={handleName}
        />
      <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={username}
          onChange={handleUsername}
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={surname}
          onChange={handleSurname}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={password}
          onChange={handlePassword}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs self-center"
          value={email}
          onChange={handleEmail}
        />
        <button type="submit">signup</button>
      </form>
      </div>
    );
  };
