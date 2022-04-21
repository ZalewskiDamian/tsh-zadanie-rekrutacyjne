import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/productsReducer";
import { Grid, Container } from "./Products.styles";
import {
  Header,
  ProductCard,
  Pagination,
  ProductDetails,
  EmptyStore,
} from "../../components";

export const Products = () => {
  const [modalProdut, setModalProduct] = useState({
    name: "",
    description: "",
    image: "",
  });
  const [modalActive, setModalActive] = useState(false);
  const { products } = useSelector((state) => state.products);
  const { page, promo, active, searchTerm } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  const getProducts = async () => {
    await axios
      .get(
        `https://join-tsh-api-staging.herokuapp.com/products?search=${searchTerm}&limit=8&page=${page}${
          promo ? "&promo=true" : ""
        }${active ? "&active=true" : ""}`,
        {
          headers: { accept: "application/json" },
        }
      )
      .then((res) => dispatch(setProducts(res.data.items)))
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getProducts();
  }, [promo, active, searchTerm]);

  const handleModalOpen = (id) => {
    setModalActive(true);

    products.forEach((product) => {
      if (product.id === id) {
        const newProduct = {
          name: product.name,
          description: product.description,
          image: product.image,
        };

        setModalProduct(newProduct);
      }
    });
  };

  return (
    <>
      <Header />
      <Container>
        {products.length > 0 ? (
          <>
            <Grid>
              {products.map((product) => {
                return (
                  <ProductCard
                    productData={product}
                    key={product.id}
                    handleModalOpen={handleModalOpen}
                  />
                );
              })}
            </Grid>
            <Pagination />
          </>
        ) : (
          <EmptyStore />
        )}
      </Container>
      <ProductDetails
        setModalActive={setModalActive}
        modalActive={modalActive}
        modalProdut={modalProdut}
      />
    </>
  );
};
