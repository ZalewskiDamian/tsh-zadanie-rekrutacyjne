import styled from 'styled-components';
import {breakpoints} from '../../breakpoints/breakpoints';

export const StyledProductContainer = styled.div`
    width: 100%;
    max-width: 122.4rem;
    margin: 0 auto;
    padding: 2.4rem;

    ${breakpoints.lg} {
        padding: 5.6rem 0;
    }

`;
export const StyledProductsGrid = styled.div`
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(auto-fill, 32.7rem);
    justify-content: center;
    grid-gap: 3.2rem 2.4rem;

    ${breakpoints.md} {
        grid-template-columns: repeat(auto-fill, 28.8rem);
    }
`;
