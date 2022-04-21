import {
  Mask,
  Wrapper,
  ImageWrapper,
  Image,
  Content,
  Name,
  Paragraph,
  CloseButton,
} from "./ProductDetails.styles";

const ProductDetails = ({
  modalActive,
  setModalActive,
  modalProdut,
}) => {
  const handleModalClose = () => {
    setModalActive(false);
  };
  const { name, image, description } = modalProdut;
  return (
    <Mask modalActive={modalActive}>
      <Wrapper>
        <CloseButton onClick={() => handleModalClose()} />
        <ImageWrapper>
          <Image src={image} alt={name} />
        </ImageWrapper>
        <Content>
          <Name>{name}</Name>
          <Paragraph>{description}</Paragraph>
        </Content>
      </Wrapper>
    </Mask>
  );
};

export default ProductDetails;
