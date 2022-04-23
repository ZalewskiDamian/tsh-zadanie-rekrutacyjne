import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  height: 40rem;
  overflow: hidden;
`;
export const ImageWrapper = styled.div`
  height: 17rem;
  width: 100%;
  position: relative;
  filter: ${({ active }) => (active ? "none" : "grayscale(.9)")};
`;
export const Image = styled.img`
  width: 100%;
  height: 17rem;
`;
export const PromotionWrapper = styled.div(
  ({ theme }) => `
  position: absolute;
  width: 7.5rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSize.font_14};
  background-color: ${theme.colors.orange};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.semiBold};
  top: 1.5rem;
  left: 0;
  `
);
export const Content = styled.div`
  padding: 2.4rem 1.6rem;
  height: 23rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Name = styled.p(
  ({ theme }) => `
  font-size: ${theme.fontSize.font_18};
  font-weight: ${theme.fontWeight.semiBold};
  color: ${theme.colors.black};
  margin-bottom: 0.8rem;
  `
);
export const Inner = styled.div``;
export const Description = styled.p(
  ({ theme }) => `
  font-size: ${theme.fontSize.font_14};
  font-weight: ${theme.fontWeight.semiBold};
  color: ${theme.colors.gray};
  `
);
export const RatingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.8rem;
`;
export const StarIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 1rem;
`;
