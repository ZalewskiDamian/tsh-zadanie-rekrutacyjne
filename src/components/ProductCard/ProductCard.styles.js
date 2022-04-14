import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
    border-radius: .8rem;
    background-color: white;
    width: 32.8rem;
    height: 40rem;
`;
export const StyledImageWrapper = styled.div`
    height: 18rem;
    width: 100%;
    position: relative;
`;
export const StyledImage = styled.img`
    width: 100%;
`;
export const StyledPromotionWrapper = styled.div`
    position: absolute;
    width: 7.5rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({theme}) => theme.fontSize.font_14};
    background-color: ${({theme}) => theme.colors.orange};
    color: white;
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    top: 1.5rem;
    left: 0;
`;
export const StyledCardContent = styled.div`
    padding: 2.4rem 1.6rem;
    height: 22rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const StyledCardTitle = styled.p`
    font-size: ${({theme}) => theme.fontSize.font_18};
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    color: ${({theme}) => theme.colors.black};
    margin-bottom: .8rem;
`;
export const StyledCardInner = styled.div`

`;
export const StyledCardDescription = styled.p`
    font-size: ${({theme}) => theme.fontSize.font_14};
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    color: ${({theme}) => theme.colors.gray};
`;
export const StyledRatingWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.8rem;
`;
export const StyledStarIcon = styled.img`
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 1rem;
`;