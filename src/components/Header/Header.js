import {useState} from 'react';
import { StyledHeader, StyledHeaderContainer, StyledLogo, StyledCheckboxWrapper } from "./Header.styles";
import Logo from '../../assets/images/logo.svg';
import { SearchInput, Checkbox } from '../index';

const Header = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = e => {
    
  };
  return (
    <StyledHeader>
        <StyledHeaderContainer>
          <StyledLogo src={Logo} alt='logo' />
          <SearchInput />
          <StyledCheckboxWrapper>
            <Checkbox 
              labelText='Active'
              name='Active'
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <Checkbox 
              labelText='Promo'
              name='Promo'
              checked={checked}
              onChange={handleCheckboxChange}
            />
          </StyledCheckboxWrapper>
        </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header;