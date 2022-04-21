import {
  StyledProductDetailsMask,
  StyledProductDetailsWrapper,
  StyledProductDetailsImageWrapper,
  StyledProductDetailsImage,
  StyledProductDetailsContent,
  StyledProductDetailsName,
  StyledProductDetailsParagraph,
  StyledProductDetailsCloseButton,
} from "./ProductDetails.styles";

const ProductDetails = ({
  modalActive,
  setModalActive,
  name,
  description,
  image,
}) => {
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <StyledProductDetailsMask modalActive={modalActive}>
      <StyledProductDetailsWrapper>
        <StyledProductDetailsCloseButton onClick={() => handleModalClose()} />
        <StyledProductDetailsImageWrapper>
          <StyledProductDetailsImage src={image} alt={name} />
        </StyledProductDetailsImageWrapper>
        <StyledProductDetailsContent>
          <StyledProductDetailsName>{name}</StyledProductDetailsName>
          <StyledProductDetailsParagraph>
            {description}
          </StyledProductDetailsParagraph>
        </StyledProductDetailsContent>
      </StyledProductDetailsWrapper>
    </StyledProductDetailsMask>
  );
};

export default ProductDetails;
