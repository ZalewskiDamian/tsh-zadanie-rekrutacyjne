import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useQuery } from 'react-query';
import { setProducts } from '../../redux/productsReducer';
import axios from 'axios';
import { StyledProductsGrid, StyledProductContainer } from './Products.styles';
import { Header, ProductCard, Pagination, ProductDetails, EmptyStore } from '../../components';

export const Products = () => {
  const [modalName, setModalName] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalImage, setModalImage] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const { products } = useSelector((state) => state.products);
  const { page, promo, active, searchTerm } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const getProducts = async () => {
    await axios
    .get(`https://join-tsh-api-staging.herokuapp.com/products?search=${searchTerm}&limit=8&page=${page}${promo ? '&promo=true' : ''}${active ? '&active=true' : ''}`, {
      headers: {accept: 'application/json'}
    })
    .then(res => dispatch(setProducts(res.data.items)))
    .catch((err) => {
      console.log("err", err);
    });
  }

  useEffect(() => {
    getProducts();
    console.log(products);
  }, [promo, active, searchTerm]);

  const handleModalOpen = id => {
    setModalActive(true);

    products.forEach(product => {
      if (product.id === id) {
        setModalName(product.name);
        setModalDescription(product.description);
        setModalImage(product.image);
      }
    })
  }
  
  return (
    <>
      <Header />
      <StyledProductContainer>
        {products.length > 0 ? 
          <StyledProductsGrid>
          {products.map((product) => {
            return (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                active={product.active}
                promo={product.promo}
                rating={product.rating}
                handleModalOpen={handleModalOpen}
              />
            )
          })}
          </StyledProductsGrid>
          : 
            <EmptyStore />
          }
        <Pagination  />
      </StyledProductContainer>
      <ProductDetails 
        setModalActive={setModalActive}
        modalActive={modalActive} 
        description={modalDescription}
        image={modalImage} 
        name={modalName} 
      />
    </>
  );
};
