import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import { Button, Text, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Login(props) {
  const { realistic } = props;
  console.log(realistic);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

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
        setErrorMessage(error.response.data.errorMessage);
      }
    };
    createUser();
  };
  console.log(errorMessage);
  return (
    <div>
      <form
        className="flex justify-center items-center flex-col content-around"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          className="input input-bordered w-full max-w-xs mt-4 text-center"
          value={username}
          required
          onChange={handleUsername}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered w-full max-w-xs mt-4 text-center"
          value={password}
          required
          onChange={handlePassword}
        />
        <Button className="mt-4" flat color="primary" auto type="submit">
          Login
        </Button>
      </form>
      <div className="flex justify-center flex-col items-center">
        <Text h6 className="text-center mt-10">
          Don't have an account yet?
        </Text>
        <Link className="text-center" href="/signup">
          <Text
            className="text-center"
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
          >
            Signup
          </Text>
        </Link>
      </div>

      {errorMessage && (
        <>
          <motion.div
            className="alert alert-error shadow-lg flex items-center"
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
