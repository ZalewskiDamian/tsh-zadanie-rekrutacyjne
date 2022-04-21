import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import starIconFill from "../../assets/images/star-icon-fill.svg";
import starIconEmpty from "../../assets/images/star-icon-empty.svg";
import {
  Content,
  Description,
  Inner,
  Name,
  Wrapper,
  Image,
  ImageWrapper,
  PromotionWrapper,
  RatingWrapper,
  StarIcon,
} from "./ProductCard.styles";

const ProductCard = ({ handleModalOpen, productData }) => {
  const { id, name, description, rating, image, promo, active } =
    productData;
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
    <Wrapper>
      <ImageWrapper active={active}>
        <Image src={image} alt={name} />
        {promo && <PromotionWrapper>Promo</PromotionWrapper>}
      </ImageWrapper>
      <Content>
        <Inner>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Inner>
        <Inner>
          <RatingWrapper>
            {starArray.map((star, index) => {
              if (index <= rating) {
                return (
                  <StarIcon key={uuidv4()} src={star.iconFill} />
                );
              } else {
                return (
                  <StarIcon key={uuidv4()} src={star.iconEmpty} />
                );
              }
            })}
          </RatingWrapper>
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
        </Inner>
      </Content>
    </Wrapper>
  );
};

export default ProductCard;
