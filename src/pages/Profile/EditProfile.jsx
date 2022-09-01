import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [loading, setLoading] = useState(true);
  const handleEmail = (e) => setEmail(e.target.value);

  const navigate = useNavigate();
  const { storeToken, authenticateUser, user, logout } =
    useContext(AuthContext);

  const handleName = (e) => setName(e.target.value);
  const handleSurname = (e) => setSurname(e.target.value);

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    console.log(user);
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("profileImage", e.target.files[0]);
    console.log(e.target.files)

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
      .then((response) => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        console.log(response.data.fileUrl);
        setProfileImage(response.data.fileUrl);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error while uploading the file: ", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { email, surname, name, profileImage };

    const createUser = async () => {
      try {
        let response = await axios.put(
          `${process.env.REACT_APP_API_URL}/user/profile/${user.username}/edit`,
          body
        );
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/search-podcasts");
      } catch (error) {
        console.log(error);
      }
    };
    createUser();
  };

  const deleteUser = async () => {
    try {
      let response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/user/profile/${user.username}/delete`
      );
      navigate("/");
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
          placeholder="Type your name"
          className="input input-bordered w-full max-w-xs text-center"
          value={name}
          required
          onChange={handleName}
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          placeholder="Type your surname"
          className="input input-bordered w-full max-w-xs text-center"
          value={surname}
          required
          onChange={handleSurname}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Type your email"
          className="input input-bordered w-full max-w-xs self-center text-center"
          value={email}
          required
          onChange={handleEmail}
        />
        <div className="w-36 flex justify-center">
            <label htmlFor="image" className="text-center">
              <span className="self-center">Choose Profile Picture</span>
              <Input
                type="file"
                accept=".jpg, .png, .jpeg"
                className="mt-4"
                onChange={(e) => handleFileUpload(e)}
              />
            </label>
        </div>
        <div className=" flex flex-row">
          <Button className="mt-4" flat color="primary" auto type="submit">
            Edit Profile
          </Button>
          <Button className="mt-4 ml-4 justify-center" flat color="error" onClick={deleteUser}>
            Delete Account
          </Button>
        </div>
      </form>
    </div>
  );
}
