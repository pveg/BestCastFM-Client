import React from "react";
import { useState, useContext } from "react";
import { Button } from "@nextui-org/react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
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
        navigate("/login");
      } catch (error) {
        console.log(error)
      }
    };
    createUser();
  };

    return (
      <div >
      <form className="flex justify-center items-center flex-col content-around" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="input input-bordered w-full max-w-xs"
          value={username}
          onChange={handleUsername}
        />
      <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="input input-bordered w-full max-w-xs"
          value={name}
          onChange={handleName}
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          placeholder="Enter your surname"
          className="input input-bordered w-full max-w-xs"
          value={surname}
          onChange={handleSurname}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="text"
          placeholder="Type your email"
          className="input input-bordered w-full max-w-xs self-center"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Type your password"
          className="input input-bordered w-full max-w-xs"
          value={password}
          onChange={handlePassword}
        />
        <Button className="mt-4" flat color="primary" auto type="submit" >Sign up</Button>
      </form>
      </div>
    );
  };
