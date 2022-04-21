import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import starIconFill from "../../assets/images/star-icon-fill.svg";
import starIconEmpty from "../../assets/images/star-icon-empty.svg";
import {
  StyledCardContent,
  StyledCardDescription,
  StyledCardInner,
  StyledCardName,
  StyledCardWrapper,
  StyledImage,
  StyledImageWrapper,
  StyledPromotionWrapper,
  StyledRatingWrapper,
  StyledStarIcon,
} from "./ProductCard.styles";

const ProductCard = ({
  id,
  name,
  description,
  rating,
  image,
  promo,
  active,
  handleModalOpen,
}) => {
  const starArray = [
    {
      iconFill: starIconFill,
      iconEmpty: starIconEmpty,
    },
    {
      iconFill: starIconFill,
      iconEmpty: starIconEmpty,
    },
    {
      iconFill: starIconFill,
      iconEmpty: starIconEmpty,
    },
    {
      iconFill: starIconFill,
      iconEmpty: starIconEmpty,
    },
    {
      iconFill: starIconFill,
      iconEmpty: starIconEmpty,
    },
  ];

  return (
    <StyledCardWrapper>
      <StyledImageWrapper active={active}>
        <StyledImage src={image} alt={name} />
        {promo && <StyledPromotionWrapper>Promo</StyledPromotionWrapper>}
      </StyledImageWrapper>
      <StyledCardContent>
        <StyledCardInner>
          <StyledCardName>{name}</StyledCardName>
          <StyledCardDescription>{description}</StyledCardDescription>
        </StyledCardInner>
        <StyledCardInner>
          <StyledRatingWrapper>
            {starArray.map((star, index) => {
              if (index <= rating) {
                return <StyledStarIcon key={uuidv4()} src={star.iconFill} />;
              } else {
                return <StyledStarIcon key={uuidv4()} src={star.iconEmpty} />;
              }
            })}
          </StyledRatingWrapper>
          {active ? (
            <Button type="button" onClick={() => handleModalOpen(id)}>
              Show Details
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => handleModalOpen(id)}
              disabledBtn
            >
              Unavailable
            </Button>
          )}
        </StyledCardInner>
      </StyledCardContent>
    </StyledCardWrapper>
  );
};

export default ProductCard;
