import React from "react";
import { useState, useContext } from "react";
import { Button } from "@nextui-org/react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

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
        setErrorMessage(error.response.data.errorMessage);
      }
    };
    createUser();
  };

  return (
    <div>
      <form
        className="flex justify-center items-center flex-col content-around"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="input input-bordered w-full max-w-xs"
          value={username}
          required
          onChange={handleUsername}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="input input-bordered w-full max-w-xs"
          value={name}
          required
          onChange={handleName}
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          placeholder="Enter your surname"
          className="input input-bordered w-full max-w-xs"
          value={surname}
          required
          onChange={handleSurname}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Type your email"
          className="input input-bordered w-full max-w-xs self-center"
          value={email}
          required
          onChange={handleEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Type your password"
          className="input input-bordered w-full max-w-xs"
          value={password}
          required
          onChange={handlePassword}
        />
        <Button className="mt-4" flat color="primary" auto type="submit">
          Sign up
        </Button>
      </form>

      {errorMessage && (
        <>
          <motion.div
            className="alert alert-error shadow-lg flex items-center mt-2"
            initial={{ scale: 1 }}
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 1, times: [0, 0.2, 1] }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-center">{errorMessage}</span>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
