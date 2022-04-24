import emptyStoreIcon from "../../assets/images/empty-store-icon.svg";
import {
  Wrapper,
  Content,
  Icon,
  Title,
  Paragraph,
} from "./EmptyStore.styles";

const EmptyStore = () => {
  return (
    <Wrapper>
      <Content>
        <Icon src={emptyStoreIcon} alt="empty store" />
        <Title>Ooops… It’s empty here</Title>
        <Paragraph>There are no products on the list</Paragraph>
      </Content>
    </Wrapper>
  );
};

export default EmptyStore;
