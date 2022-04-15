import {useState} from 'react';
import { StyledHeader, StyledHeaderContainer, StyledLogo, StyledCheckboxWrapper, StyledLoginButton } from "./Header.styles";
import Logo from '../../assets/images/logo.svg';
import { SearchInput, Checkbox } from '../index';
import { AppRoute } from '../../routing/AppRoute.enum';

const Header = () => {
  const [checkedActive, setCheckedActive] = useState(false);
  const [checkedPromo, setCheckedPromo] = useState(false);

  const handleCheckboxActive = e => {
    setCheckedActive(!checkedActive);
  };

  const handleCheckboxPromo = e => {
    setCheckedPromo(!checkedPromo);
  };

  return (
    <StyledHeader>
        <StyledHeaderContainer>
          <StyledLogo src={Logo} alt='logo' />
          <SearchInput />
          <StyledCheckboxWrapper>
            <Checkbox 
              labelText='Active'
              checked={checkedActive}
              onChange={handleCheckboxActive}
            />
            <Checkbox 
              labelText='Promo'
              checked={checkedPromo}
              onChange={handleCheckboxPromo}
            />
          </StyledCheckboxWrapper>
          <StyledLoginButton to={AppRoute.login}>Log in</StyledLoginButton>
        </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header;