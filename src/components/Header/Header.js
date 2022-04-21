import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setPromo, searchProduct } from "../../redux/filtersReducer";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledCheckboxWrapper,
  StyledLoginButton,
  StyledAvatar,
  StyledAvatarWrapper,
  StyledDropdown,
  StyledDropdownButton,
} from "./Header.styles";
import Logo from "../../assets/images/logo.svg";
import userAvatar from "../../assets/images/user-avatar.png";
import { SearchInput, Checkbox } from "../index";
import { AppRoute } from "../../routing/AppRoute.enum";

const Header = () => {
  const [focusInput, setFocusInput] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const { active, promo, searchTerm } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleDropdownActive = () => {
    setDropdownActive(!dropdownActive);
  };
  const handleCheckboxActive = () => {
    dispatch(setActive());
  };

  const handleCheckboxPromo = () => {
    dispatch(setPromo());
  };

  const handleSearchProduct = (e) => {
    setFocusInput(true);
    dispatch(searchProduct(e.target.value));
  };

  const userLogin = () => {
    const localData = JSON.parse(window.localStorage.getItem("user-info"));
    setUserData(localData);
    if (localData !== null) {
      setIsUserLogin(localData.isLogged);
    }
  };

  const userLogout = () => {
    window.localStorage.removeItem("user-info");
    setIsUserLogin(false);
  };

  useEffect(() => {
    userLogin();
  }, []);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledLogo src={Logo} alt="logo" />
        <SearchInput
          type="search"
          placeholder="Search"
          focusInput={focusInput}
          onChange={handleSearchProduct}
          value={searchTerm}
        />
        <StyledCheckboxWrapper>
          <Checkbox
            labelText="Active"
            checked={active}
            onChange={handleCheckboxActive}
          />
          <Checkbox
            labelText="Promo"
            checked={promo}
            onChange={handleCheckboxPromo}
          />
        </StyledCheckboxWrapper>
        {isUserLogin ? (
          <StyledAvatarWrapper onClick={handleDropdownActive}>
            <StyledAvatar src={userAvatar} alt="avatar" />
            <StyledDropdown dropdownActive={dropdownActive}>
              <StyledDropdownButton onClick={userLogout}>
                Log out
              </StyledDropdownButton>
            </StyledDropdown>
          </StyledAvatarWrapper>
        ) : (
          <StyledLoginButton to={AppRoute.login}>Log in</StyledLoginButton>
        )}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
