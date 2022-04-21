import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: repeat(1, 1fr);

  ${breakpoints.md} {
    grid-template-columns: 40% 60%;
  }
`;
export const Header = styled.div`
  width: 100%;
  margin-bottom: 10rem;

  ${breakpoints.md} {
    margin-bottom: 22%;
  }
`;
export const Logo = styled.img`
  max-width: 10.3rem;
`;
export const ImageWrapper = styled.div`
  display: none;

  ${breakpoints.md} {
    display: block;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100vh;
`;
export const Content = styled.div`
  padding: 4rem 2.4rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  ${breakpoints.md} {
    align-items: flex-start;
    padding: 5.2rem 15%;
  }
`;
export const Inner = styled.div`
  width: 100%;
  max-width: 49.6rem;
`;
export const Heading = styled.h2(
  ({ theme }) => `
    font-size: ${theme.fontSize.font_30};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.black};
    margin-bottom: 2.9rem;
  `
);
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const InputGroup = styled.div`
  margin-bottom: 2.2rem;
  width: 100%;

  &:last-child {
    margin-bottom: 5.6rem;
  }
`;
export const Label = styled.label(
  ({ theme }) => `
  font-size: ${theme.fontSize.font_14};
  font-weight: ${theme.fontWeight.semiBold};
  color: ${theme.colors.black};
  display: block;
  margin-bottom: 0.8rem;
  `
);
export const Input = styled.input(
  ({ theme }) => `
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid ${theme.colors.grayLight};
  padding: 1.6rem;
  color: ${theme.colors.gray};

  &::placeholder {
    font-size: ${theme.fontSize.font_14};
    color: ${theme.colors.gray};
  }
  `
);
export const ForgotPassword = styled.a(
  ({ theme }) => `
  font-size: $theme.fontSize.font_14};
  color: ${theme.colors.gray};
  font-weight: ${theme.fontWeight.semiBold};
  text-decoration: underline;
  margin-top: 1.6rem;
  cursor: pointer;
  `
);
