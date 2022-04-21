import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  height: 34.4rem;
  max-width: 60rem;
  margin: 0 auto;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.img`
  width: 3.6rem;
  height: 4.6rem;
  margin-bottom: 2.2rem;
`;
export const Title = styled.p(
  ({ theme }) => `
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.font_18};
  font-weight: ${theme.fontWeight.semiBold};
  margin-bottom: 0.8rem;
  `
);
export const Paragraph = styled.p(
  ({ theme }) => `
  color: ${theme.colors.gray};
  font-size: ${theme.fontSize.font_14};
  font-weight: ${theme.fontWeight.semiBold};
  `
);
