import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive, setPromo, searchProduct } from '../../redux/filtersReducer';
import { StyledHeader, StyledHeaderContainer, StyledLogo, StyledCheckboxWrapper, StyledLoginButton } from "./Header.styles";
import Logo from '../../assets/images/logo.svg';
import { SearchInput, Checkbox } from '../index';
import { AppRoute } from '../../routing/AppRoute.enum';

const Header = () => {
  // const [checkedActive, setCheckedActive] = useState(false);
  // const [checkedPromo, setCheckedPromo] = useState(false);
  const { active, promo, search } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleCheckboxActive = () => {
    dispatch(setActive(!active));
  };

  const handleCheckboxPromo = () => {
    dispatch(setPromo(!promo));
  };

  

  return (
    <StyledHeader>
        <StyledHeaderContainer>
          <StyledLogo src={Logo} alt='logo' />
          <SearchInput />
          <StyledCheckboxWrapper>
            <Checkbox 
              labelText='Active'
              checked={active}
              onChange={handleCheckboxActive}
            />
            <Checkbox 
              labelText='Promo'
              checked={promo}
              onChange={handleCheckboxPromo}
            />
          </StyledCheckboxWrapper>
          <StyledLoginButton to={AppRoute.login}>Log in</StyledLoginButton>
        </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header;