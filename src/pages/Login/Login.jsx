import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate, Link } from "react-router-dom";
import { Button, Text } from "@nextui-org/react";
import axios from "axios";

export default function Login(props) {
    const {realistic} = props;
    console.log(realistic)
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
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/search-podcasts");
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
          placeholder="username"
          className="input input-bordered w-full max-w-xs mt-4 text-center"
          value={username}
          onChange={handleUsername}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered w-full max-w-xs mt-4 text-center"
          value={password}
          onChange={handlePassword}
        />
        <Button className="mt-4" flat color="primary" auto type="submit" >Login</Button>
      </form>
       <Text h6 className="text-center mt-4">Don't have an account yet?</Text>




      </div>
    );
  };
