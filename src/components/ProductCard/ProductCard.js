import Button from "../Button/Button";
import cardImg from '../../assets/images/card-image.png';
import starIcon from '../../assets/images/star-icon-fill.svg';
import { StyledCardContent, StyledCardDescription, StyledCardInner, StyledCardTitle, StyledCardWrapper, StyledImage, StyledImageWrapper, StyledPromotionWrapper, StyledRatingWrapper, StyledStarIcon } from "./ProductCard.styles"

const ProductCard = () => {
  return (
    <StyledCardWrapper>
        <StyledImageWrapper>
            <StyledImage src={cardImg} alt='card img' />
            <StyledPromotionWrapper>Promo</StyledPromotionWrapper>
        </StyledImageWrapper>
        <StyledCardContent>
            <StyledCardInner>
                <StyledCardTitle>White Watch</StyledCardTitle>
                <StyledCardDescription>
                    How To Protect Your Computer Very Useful Tips
                </StyledCardDescription>
            </StyledCardInner>
            <StyledCardInner>
                <StyledRatingWrapper>
                    <StyledStarIcon src={starIcon} alt='star' />
                </StyledRatingWrapper>
                <Button>Show Details</Button>
            </StyledCardInner>
        </StyledCardContent>
    </StyledCardWrapper>
  )
}

export default ProductCard;