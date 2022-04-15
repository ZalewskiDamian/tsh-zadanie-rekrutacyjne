import { StyledEmptyStoreWrapper, StyledEmptyStoreContent, StyledIcon, StyledEmptyStoreTitle, StyledEmptyStoreParagraph } from "./EmptyStore.styles"
import emptyStoreIcon from '../../assets/images/empty-store-icon.svg';

const EmptyStore = () => {
  return (
    <StyledEmptyStoreWrapper>
        <StyledEmptyStoreContent>
            <StyledIcon src={emptyStoreIcon} alt='empty store' />
            <StyledEmptyStoreTitle>
                Ooops… It’s empty here
            </StyledEmptyStoreTitle>
            <StyledEmptyStoreParagraph>
                There are no products on the list
            </StyledEmptyStoreParagraph>
        </StyledEmptyStoreContent>
    </StyledEmptyStoreWrapper>
  )
}

export default EmptyStore;