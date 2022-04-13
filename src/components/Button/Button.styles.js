import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${({theme, disabled}) => disabled ? theme.colors.gray : theme.colors.blue};
    width: 100%;
    border-radius: .4rem;
    color: white;
    font-size: ${({theme}) => theme.fontSize.font_14};
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    line-height: 1.6rem;
    text-align: center;
    padding: 1.2rem;
    border: 0;
    cursor: pointer;
    transition: all .35s ease-in-out;

    &:hover {
        background-color: ${({theme}) => theme.colors.blueDark};
    }
`;

export { StyledButton };