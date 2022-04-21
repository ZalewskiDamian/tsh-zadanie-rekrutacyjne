import styled from "styled-components";
import searchIcon from "../../assets/images/search-icon.svg";

export const SearchInput = styled.input(
  ({ theme, focusInput }) => `
  order: 2;
  width: 100%;
  max-width: 39.2rem;
  margin: 2.8rem 0 2.4rem;
  border: 1px solid ${theme.colors.grayLight};
  border-radius: 0.8rem;
  font-size: ${theme.fontSize.font_14};
  color: ${theme.colors.black};
  padding: 1.6rem;
  outline: 0;
  background-image: url(${focusInput ? "" : searchIcon});
  background-repeat: no-repeat;
  background-position: 96% center;

  &::placeholder {
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.bold};
  }

  @media (min-width: 810px) {
    order: 1;
    margin: 0;
  }
  `
);

export default SearchInput;
