import styled from 'styled-components';

export const StyledEmptyStoreWrapper = styled.div`
    background-color: white;
    border-radius: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 100%;
    height: 34.4rem;
    max-width: 60rem;
    margin: 0 auto;
`;
export const StyledEmptyStoreContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const StyledIcon = styled.img`
    width: 3.6rem;
    height: 4.6rem;
    margin-bottom: 2.2rem;
`;
export const StyledEmptyStoreTitle = styled.p`
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fontSize.font_18};
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    margin-bottom: .8rem;
`;
export const StyledEmptyStoreParagraph = styled.p`
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fontSize.font_14};
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
`;