import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRoute } from "../../routing/AppRoute.enum";
import { setActive, setPromo, searchProduct } from "../../redux/filtersReducer";
import { SearchInput, Checkbox } from "../index";
import {
  Wrapper,
  Container,
  Logo,
  CheckboxWrapper,
  LoginButton,
  Avatar,
  AvatarWrapper,
  Dropdown,
  DropdownButton,
} from "./Header.styles";
import logoIcon from "../../assets/images/logo.svg";
import userAvatar from "../../assets/images/user-avatar.png";

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
    <Wrapper>
      <Container>
        <Logo src={logoIcon} alt="logo" />
        <SearchInput
          type="search"
          placeholder="Search"
          focusInput={focusInput}
          onChange={handleSearchProduct}
          value={searchTerm}
        />
        <CheckboxWrapper>
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
        </CheckboxWrapper>
        {isUserLogin ? (
          <AvatarWrapper onClick={handleDropdownActive}>
            <Avatar src={userAvatar} alt="avatar" />
            <Dropdown dropdownActive={dropdownActive}>
              <DropdownButton onClick={userLogout}>Log out</DropdownButton>
            </Dropdown>
          </AvatarWrapper>
        ) : (
          <LoginButton to={AppRoute.login}>Log in</LoginButton>
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;
