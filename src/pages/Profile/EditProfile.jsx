import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import axios from "axios";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);

  const navigate = useNavigate();
  const { storeToken, authenticateUser, user, logout } =
    useContext(AuthContext);

  const handleName = (e) => setName(e.target.value);
  const handleSurname = (e) => setSurname(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { email, surname, name };

    const createUser = async () => {
      try {
        let response = await axios.put(
          `${process.env.REACT_APP_API_URL}/user/profile/${user.username}/edit`,
          body
        );
        storeToken(response.data.authToken);
        authenticateUser();
        logout();
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };
    createUser();

};

const deleteUser = async () => {
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/profile/${user.username}/delete`
    );
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <form
        className="flex justify-center items-center flex-col content-around"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Name</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs text-center"
          value={name}
          onChange={handleName}
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs text-center"
          value={surname}
          onChange={handleSurname}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs self-center text-center"
          value={email}
          onChange={handleEmail}
        />
        <div className=" flex flex-row">
          <Button className="mt-4" flat color="primary" auto type="submit">
            Edit Profile
          </Button>
          <Button className="mt-4 ml-4" flat color="error" onPress={() => deleteUser()}>
            Delete Account
          </Button>
        </div>
      </form>
    </div>
  );
}
