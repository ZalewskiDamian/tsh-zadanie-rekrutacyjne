import styled from 'styled-components';
import { breakpoints } from '../../breakpoints/breakpoints';

export const StyledLoginWrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: repeat(1, 1fr);

    ${breakpoints.md} {
        grid-template-columns: 40% 60%;
    }
`;
export const StyledLoginHeader = styled.div`
    width: 100%;
    margin-bottom: 10rem;

    ${breakpoints.md} {
        margin-bottom: 22%;
    }
`;
export const StyledLogo = styled.img`
    max-width: 10.3rem;
`;
export const StyledLoginImageWrapper = styled.div`
    display: none;

    ${breakpoints.md} {
        display: block;
    }
`;
export const StyledLoginImage = styled.img`
    width: 100%;
    height: 100vh;
`;
export const StyledLoginContent = styled.div`
    padding: 4rem 2.4rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    position: relative;

    ${breakpoints.md} {
        align-items: flex-start;
        padding: 5.2rem 15%;
    }
`;
export const StyledLoginInner = styled.div`
    width: 100%;
    max-width: 49.6rem;
`;
export const StyledLoginHeading = styled.h2`
    font-size: ${({theme}) => theme.fontSize.font_30};
    font-weight: ${({theme}) => theme.fontWeight.bold};
    color: ${({theme}) => theme.colors.black};
    margin-bottom: 2.9rem;
`;
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
export const StyledInputGroup = styled.div`
    margin-bottom: 2.2rem;
    width: 100%;
    
    &:last-child {
        margin-bottom: 5.6rem;
    }
`;
export const StyledLabel = styled.label`
    font-size: ${({theme}) => theme.fontSize.font_14};
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    color: ${({theme}) => theme.colors.black};
    margin-bottom: .8rem;
`;
export const StyledInput = styled.input`
    width: 100%;
    border-radius: .8rem;
    border: 1px solid ${({theme}) => theme.colors.grayLight};
    padding: 1.6rem;
    color: ${({theme}) => theme.colors.gray};

    &::placeholder {
        font-size: ${({theme}) => theme.fontSize.font_14};
        color: ${({theme}) => theme.colors.gray};
    }
`;
export const StyledForgotPassword = styled.a`
    font-size: ${({theme}) => theme.fontSize.font_14};
    color: ${({theme}) => theme.colors.gray};
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    text-decoration: underline;
    margin-top: 1.6rem;
`;