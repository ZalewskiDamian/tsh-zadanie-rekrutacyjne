import styled from 'styled-components';
import { breakpoints } from '../../breakpoints/breakpoints';
import closeIcon from '../../assets/images/close-icon.svg';

export const StyledProductDetailsMask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .8);
    opacity: ${({modalActive}) => modalActive ? '1' : '0'};
    display: ${({modalActive}) => modalActive ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`;
export const StyledProductDetailsWrapper = styled.div`
    width: 100%;
    max-width: 60rem;
    border-radius: .8rem;
    box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.15);
    position: relative;
    background-color: white;
`;
export const StyledProductDetailsImageWrapper = styled.div`
    height: 35.4rem;
    width: 100%;
`;
export const StyledProductDetailsImage = styled.img``;
export const StyledProductDetailsContent = styled.div`
    padding: 2.4rem;
    text-align: left;

    ${breakpoints.md} {
        padding: 2.4rem 3.2rem 5.6rem 3.2rem;
    }
`;
export const StyledProductDetailsName = styled.p`
    font-size: ${({theme}) => theme.fontSize.font_24};
    line-height: 4rem;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    color: ${({theme}) => theme.colors.black};
    margin-bottom: .8rem;
`;
export const StyledProductDetailsParagraph = styled.p`
    font-size: ${({theme}) => theme.fontSize.font_18};
    line-height: 2.4rem;
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    color: ${({theme}) => theme.colors.gray};
`;
export const StyledProductDetailsCloseButton = styled.span`
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    background-image: url(${closeIcon});
`;