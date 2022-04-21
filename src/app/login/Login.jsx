import { useState } from "react";
import { Button } from "../../components/index";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../routing/AppRoute.enum";
import loginImage from "../../assets/images/login-image.png";
import logoIcon from "../../assets/images/logo.svg";
import {
  Wrapper,
  ImageWrapper,
  Image,
  Content,
  Inner,
  Header,
  Logo,
  Heading,
  Form,
  InputGroup,
  Label,
  Input,
  ForgotPassword,
} from "./Login.styles";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const UserLogin = async () => {
    let user = {
      username: username,
      password: password,
    };
    let result = await fetch(
      "https://join-tsh-api-staging.herokuapp.com/users/login",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    result = await result.json();
    const userObj = {
      isLogged: true,
      accesToken: result.access_token,
      expiresIn: result.expiresIn,
      userId: result.user.id,
      userName: result.user.username,
      userAvatar: result.user.avatar,
    };
    localStorage.setItem("user-info", JSON.stringify(userObj));
    window.location.href = "/";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserLogin();
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={loginImage} alt="login" />
      </ImageWrapper>
      <Content>
        <Header>
          <NavLink to={AppRoute.home}>
            <Logo src={logoIcon} alt="logo" />
          </NavLink>
        </Header>
        <Inner>
          <Heading>Login</Heading>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Username</Label>
              <Input
                name="username"
                value={username}
                onChange={handleUsername}
              />
            </InputGroup>
            <InputGroup>
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </InputGroup>
            <Button type="submit">Log in</Button>
            <ForgotPassword>Forgot password?</ForgotPassword>
          </Form>
        </Inner>
      </Content>
    </Wrapper>
  );
};
