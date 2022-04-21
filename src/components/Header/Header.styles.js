import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const Container = styled.div`
  width: 100%;
  max-width: 122.4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 4.8rem 2.4rem 3.2rem 2.4rem;
`;
export const Logo = styled.img`
  max-width: 10.3rem;
  order: 1;
`;
export const CheckboxWrapper = styled.div`
  order: 2;

  @media (min-width: 630px) {
    order: 1;
  }
`;
export const LoginButton = styled(Link)(
  ({ theme }) => `
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.8rem;
  height: 3.8rem;
  border-radius: 0.4rem;
  color: ${theme.colors.blue};
  font-size: ${theme.fontSize.font_14};
  font-weight: ${theme.fontWeight.semiBold};
  border: 1px solid ${theme.colors.blue};
  cursor: pointer;
  text-decoration: none;
  transition: all .35s ease-in-out;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
  }
  `
);
export const AvatarWrapper = styled.div`
  position: relative;
  order: 1;
`;
export const Avatar = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  cursor: pointer;
`;
export const Dropdown = styled.div(
  ({ theme, dropdownActive }) => `
  box-shadow: 0 8px 32px 0 rgba(17, 18, 20, 0.16);
  background-color: ${theme.colors.white};
  border-radius: 0.4rem;
  width: 18.4rem;
  height: 5.6rem;
  padding: 2rem 1.6rem;
  position: absolute;
  right: 0;
  bottom: -7rem;
  display: ${dropdownActive ? "block" : "none"};
  `
);
export const DropdownButton = styled.button(
  ({ theme }) => `
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.font_14};
  font-weight: ${theme.fontWeight.bold};
  background: none;
  border: 0;
  cursor: pointer;
  `
);
