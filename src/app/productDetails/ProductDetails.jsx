import { StyledProductDetailsMask, StyledProductDetailsWrapper, StyledProductDetailsImageWrapper, StyledProductDetailsImage, StyledProductDetailsContent, StyledProductDetailsName, StyledProductDetailsParagraph, StyledProductDetailsCloseButton } from "./ProductDetails.styles";

const ProductDetails = ({modalActive, setModalActive, name, description}) => {
  return (
    <StyledProductDetailsMask modalActive={modalActive}>
      <StyledProductDetailsWrapper>
        <StyledProductDetailsCloseButton onClick={() => setModalActive(false)} />
        <StyledProductDetailsImageWrapper>
          {/* <StyledProductDetailsImage src={} alt=''/> */}
        </StyledProductDetailsImageWrapper>
        <StyledProductDetailsContent>
          <StyledProductDetailsName>{name}</StyledProductDetailsName>
          <StyledProductDetailsParagraph>{description}</StyledProductDetailsParagraph>
        </StyledProductDetailsContent>
      </StyledProductDetailsWrapper>
    </StyledProductDetailsMask>
  )
}

export default ProductDetails;