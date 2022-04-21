import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import closeIcon from "../../assets/images/close-icon.svg";

export const Mask = styled.div(
  ({ modalActive }) => `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(26, 27, 29, 0.9);
  opacity: ${modalActive ? "1" : "0"};
  visibility: ${modalActive ? "visible" : "hidden"};
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in;
  `
);
export const Wrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  border-radius: 0.8rem;
  box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.15);
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 2.4rem;
  overflow: hidden;

  ${breakpoints.md} {
    margin: 0;
  }
`;
export const ImageWrapper = styled.div`
  height: 35.4rem;
  width: 100%;
`;
export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;
export const Content = styled.div`
  padding: 2.4rem;
  text-align: left;

  ${breakpoints.md} {
    padding: 2.4rem 3.2rem 5.6rem 3.2rem;
  }
`;
export const Name = styled.p(
  ({ theme }) => `
  font-size: ${theme.fontSize.font_24};
  line-height: 4rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.black};
  margin-bottom: 0.8rem;
  `
);
export const Paragraph = styled.p(
  ({ theme }) => `
  font-size: ${theme.fontSize.font_18};
  line-height: 2.4rem;
  font-weight: ${theme.fontWeight.semiBold};
  color: ${theme.colors.gray};
  `
);
export const CloseButton = styled.span`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${closeIcon});
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #f8f8fa;
`;
