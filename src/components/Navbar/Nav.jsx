import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Button,
} from "@nextui-org/react";
import { Layout } from "./Layout.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const collapseItems = ["Podcasts"];
  const { loggedIn, user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b hideIn="xs">
            <p className="text-black">BESTCASTFM</p>
          </Text>
        </Navbar.Brand>
        {!user && (
          <Navbar.Content
            enableCursorHighlight
            activeColor="warning"
            hideIn="xs"
            variant="highlight"
          >
            <Navbar.Link href="#">How it works</Navbar.Link>
            <Navbar.Link isActive href="/signup">
              Sign Up
            </Navbar.Link>
            <Navbar.Link href="#">About BestCastFM</Navbar.Link>
          </Navbar.Content>
        )}
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          {!user && (
            <Link href="/login">
              <Button size="xs" ordered color="gradient">
                {" "}
                Login{" "}
              </Button>
            </Link>
          )}
          {user && (
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    size="md"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="warning"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                    <Text
                      className="ml-1"
                      css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                      }}
                    >
                      {user.username}
                    </Text>
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}></Text>
                </Dropdown.Item>
                <Dropdown.Item key="favorites" withDivider>
                  My Favorites
                </Dropdown.Item>
                <Dropdown.Item key="favorites" withDivider>
                  <Link href="/profile">My Profile</Link>
                </Dropdown.Item>

                <Dropdown.Item key="logout" withDivider color="error">
                  <p onClick={() => logout()}>Log Out</p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/search-podcasts"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
