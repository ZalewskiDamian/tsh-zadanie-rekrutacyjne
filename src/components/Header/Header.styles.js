import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: white;
`;
export const StyledHeaderContainer = styled.div`
  width: 100%;
  max-width: 122.4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 4.8rem 2.4rem 3.2rem 2.4rem;
`;
export const StyledLogo = styled.img`
  max-width: 10.3rem;
  order: 1;
`;
export const StyledCheckboxWrapper = styled.div`
  order: 2;

  @media screen and (min-width: 630px) {
    order: 1;
  }
`;
export const StyledLoginButton = styled(Link)`
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.8rem;
  height: 3.8rem;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.font_14};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  text-decoration: none;
`;
export const StyledAvatarWrapper = styled.div`
  position: relative;
  order: 1;
`;
export const StyledAvatar = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  cursor: pointer;
`;
export const StyledDropdown = styled.div`
  box-shadow: 0 8px 32px 0 rgba(17, 18, 20, 0.16);
  background-color: white;
  border-radius: 0.4rem;
  width: 18.4rem;
  height: 5.6rem;
  padding: 2rem 1.6rem;
  position: absolute;
  right: 0;
  bottom: -7rem;
  display: ${({ dropdownActive }) => (dropdownActive ? "block" : "none")};
`;
export const StyledDropdownButton = styled.button`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.font_14};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: none;
  border: 0;
  cursor: pointer;
`;
