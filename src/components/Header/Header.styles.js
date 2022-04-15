import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;
export const StyledCheckboxWrapper = styled.div``;
export const StyledLoginButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.8rem;
    height: 3.8rem;
    border-radius: .4rem;
    color: ${({theme}) => theme.colors.blue};
    font-size: ${({theme}) => theme.fontSize.font_14};
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    border: 1px solid ${({theme}) => theme.colors.blue};
    cursor: pointer;
    text-decoration: none;
`;