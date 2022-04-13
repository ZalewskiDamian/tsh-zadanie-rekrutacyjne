import styled from 'styled-components';
import searchIcon from '../../assets/images/search-icon.svg';

export const StyledHeader = styled.header`
    width: 100%;
    background-color: white;
`;
export const StyledHeaderContainer = styled.div`
    width: 100%;
    max-width: 122.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const StyledLogo = styled.img`
    max-width: 10.3rem;
`;
export const StyledSearch = styled.input`
    width: 100%;
    max-width: 39.2rem;
    border: 1px solid ${({theme}) => theme.colors.grayLight};
    border-radius: .8rem;
    font-size: ${({theme}) => theme.fontSize.font_14};
    color: ${({theme}) => theme.colors.black};
    padding: 1.6rem;
    outline: 0;
    background-image: url(${({focusInput}) => focusInput ? '' : searchIcon});
    background-repeat: no-repeat;
    background-position: 96% center;

    &::placeholder {
        color: ${({theme}) => theme.colors.black};
        font-weight: ${({theme}) => theme.fontWeight.bold};
    }
`;
export const StyledCheckboxWrapper = styled.div`

`;