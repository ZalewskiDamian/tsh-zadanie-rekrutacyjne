import { useState } from 'react';
import { StyledHeader, StyledHeaderContainer, StyledLogo, StyledSearch } from "./Header.styles";
import Logo from '../../assets/images/logo.svg';

const Header = () => {
  const [focusInput, setFocusInput] = useState(false);
  return (
    <StyledHeader>
        <StyledHeaderContainer>
          <StyledLogo src={Logo} alt='logo' />
          <StyledSearch 
            type='search' 
            placeholder="Szukaj"
            onChange={() => setFocusInput(true)}
            focusInput={focusInput} 
          />
        </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header;