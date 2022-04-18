import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login-image.png';
import logoIcon from '../../assets/images/logo.svg';
import { StyledLoginWrapper, StyledLoginImageWrapper, StyledLoginImage, StyledLoginContent, StyledLoginInner, StyledLoginHeader, StyledLogo, StyledLoginHeading, StyledForm, StyledInputGroup, StyledLabel, StyledInput, StyledForgotPassword } from './Login.styles';
import { Button } from '../../components/index';
import { AppRoute } from '../../routing/AppRoute.enum';

export const Login = () => {
  return (
    <StyledLoginWrapper>
      <StyledLoginImageWrapper>
        <StyledLoginImage src={loginImage} alt='login' />
      </StyledLoginImageWrapper>
      <StyledLoginContent>
        <StyledLoginHeader>
          <StyledLogo src={logoIcon} alt='logo' />
        </StyledLoginHeader>
        <StyledLoginInner>
          <StyledLoginHeading>Login</StyledLoginHeading>
          <StyledForm>
            <StyledInputGroup>
              <StyledLabel>Username</StyledLabel>
              <StyledInput name="username" />
            </StyledInputGroup>
            <StyledInputGroup>
              <StyledLabel>Password</StyledLabel>
                <StyledInput name="password" type="password" />
            </StyledInputGroup>
            <Button type="submit">Log in</Button>
            <StyledForgotPassword>Forgot password?</StyledForgotPassword>
          </StyledForm>
        </StyledLoginInner>
      </StyledLoginContent>
    </StyledLoginWrapper>
  );
};