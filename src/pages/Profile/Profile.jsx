import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { Avatar, Grid, Text, Button, Link } from "@nextui-org/react";

function Profile() {
  const { loggedIn, user, logout } = useContext(AuthContext);


  return (
    <>
      {user && (
        <div className="flex items-center justify-center flex-col justify-around">
          <Grid>
            <Avatar
              src=""
              css={{ size: "$20" }}
            />
          </Grid>
          <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $yellow600 100%",
        }}
        weight="bold"
      >
        {user.username}
      </Text>
          <Text
        h3
        css={{
          textGradient: "45deg, $blue600 -20%, $yellow600 100%",
        }}
        weight="bold"
      >
        {user.name}
      </Text>
          <Text
        h3
        css={{
          textGradient: "45deg, $blue600 -20%, $yellow600 100%",
        }}
        weight="bold"
      >
        {user.surname}
      </Text>
          <Text
        h3
        css={{
          textGradient: "45deg, $blue600 -20%, $yellow600 100%",
        }}
        weight="bold"
      >
        {user.email}
      </Text>

      <Link href="/profile/edit-profile">
        <Button> Edit profile</Button>
      </Link>
        </div>
      )}
    </>
  );
}

export default Profile;
