import { useState } from 'react';
import { StyledSearch } from "./SearchInput.styles";

const SearchInput = () => {
    const [focusInput, setFocusInput] = useState(false);

    return (
        <StyledSearch 
            type='search' 
            placeholder="Szukaj"
            focusInput={focusInput}
            onChange={() => setFocusInput(true)}
        />
    )
}

export default SearchInput;