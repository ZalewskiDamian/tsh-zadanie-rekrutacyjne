import { useState } from "react";
import loginImage from "../../assets/images/login-image.png";
import logoIcon from "../../assets/images/logo.svg";
import {
  StyledLoginWrapper,
  StyledLoginImageWrapper,
  StyledLoginImage,
  StyledLoginContent,
  StyledLoginInner,
  StyledLoginHeader,
  StyledLogo,
  StyledLoginHeading,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledInput,
  StyledForgotPassword,
} from "./Login.styles";
import { Button } from "../../components/index";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
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
    // console.log(user);
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
    <StyledLoginWrapper>
      <StyledLoginImageWrapper>
        <StyledLoginImage src={loginImage} alt="login" />
      </StyledLoginImageWrapper>
      <StyledLoginContent>
        <StyledLoginHeader>
          <StyledLogo src={logoIcon} alt="logo" />
        </StyledLoginHeader>
        <StyledLoginInner>
          <StyledLoginHeading>Login</StyledLoginHeading>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInputGroup>
              <StyledLabel>Username</StyledLabel>
              <StyledInput
                name="username"
                value={username}
                onChange={handleUsername}
              />
            </StyledInputGroup>
            <StyledInputGroup>
              <StyledLabel>Password</StyledLabel>
              <StyledInput
                name="password"
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </StyledInputGroup>
            <Button type="submit">Log in</Button>
            <StyledForgotPassword>Forgot password?</StyledForgotPassword>
          </StyledForm>
        </StyledLoginInner>
      </StyledLoginContent>
    </StyledLoginWrapper>
  );
};
