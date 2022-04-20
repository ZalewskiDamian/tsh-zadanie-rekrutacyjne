import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../../redux/filtersReducer';
import { StyledSearch } from "./SearchInput.styles";

const SearchInput = () => {
    const [focusInput, setFocusInput] = useState(false);
    const { searchTerm } = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const handleSearchProduct = e => {
        setFocusInput(true);
        dispatch(searchProduct(e.target.value));
        console.log(searchTerm);
      }

    return (
        <StyledSearch 
            type='search' 
            placeholder="Szukaj"
            value={searchTerm}
            focusInput={focusInput}
            onChange={handleSearchProduct}
        />
    )
}

export default SearchInput;