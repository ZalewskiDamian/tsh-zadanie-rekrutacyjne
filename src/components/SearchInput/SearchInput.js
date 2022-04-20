// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchProduct } from '../../redux/filtersReducer';
// import { StyledSearch } from "./SearchInput.styles";

// const SearchInput = () => {
//     const [focusInput, setFocusInput] = useState(false);
//     const { searchTerm } = useSelector((state) => state.filters);
//     const dispatch = useDispatch();

//     const handleSearchProduct = e => {
//         setFocusInput(true);
//         dispatch(searchProduct(e.target.value));
//       }

//     return (
//         <StyledSearch 
//             type='search' 
//             placeholder="Szukaj"
//             value={searchTerm}
//             focusInput={focusInput}
//             onChange={handleSearchProduct}
//         />
//     )
// }

// export default SearchInput;

import styled from 'styled-components';
import searchIcon from '../../assets/images/search-icon.svg';

export const SearchInput = styled.input`
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

export default SearchInput;