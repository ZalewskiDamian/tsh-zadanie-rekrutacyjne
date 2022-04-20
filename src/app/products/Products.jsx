import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import { StyledProductsGrid, StyledProductContainer } from './Products.styles';
import { Header, ProductCard, Pagination } from '../../components';

import ProductDetails from '../productDetails/ProductDetails';

// const fetchProducts = async () => {
//   const res = await fetch('https://join-tsh-api-staging.herokuapp.com/products');
//   const product = await res.json();
//   return product;
// }

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [modalName, setModalName] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const { active, promo, searchTerm } = useSelector((state) => state.filters);

  const getProducts = async () => {
    await axios
    .get(`https://join-tsh-api-staging.herokuapp.com/products?limit=8&page=1`, {
      headers: {accept: 'application/json'}
    })
    .then(res => setProducts(res.data.items))
    .catch((err) => {
      console.log("err", err);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  let productsList = [];

  const handleModalOpen = id => {
    console.log(id);
    setModalActive(true);
    products.forEach(product => {
      if (product.id === id) {
        setModalName(product.name);
        console.log(modalName);
      }
    })
  }

  // if (active) {
  //   productsList = products
  //   .filter((product) => product.active === active)
  //   .map((product) => {
  //     return (
  //       <ProductCard 
  //         key={product.id}
  //         id={product.id}
  //         name={product.name}
  //         description={product.description}
  //         image={product.image}
  //         active={product.active}
  //         promo={product.promo}
  //         rating={product.rating}
  //         handleModalOpen={handleModalOpen}
  //       />
  //     )
  //   })
  // } else if (promo) {
  //   productsList = products
  //   .filter((product) => product.promo === promo)
  //   .map((product) => {
  //     return (
  //       <ProductCard 
  //         key={product.id}
  //         id={product.id}
  //         name={product.name}
  //         description={product.description}
  //         image={product.image}
  //         active={product.active}
  //         promo={product.promo}
  //         rating={product.rating}
  //         handleModalOpen={handleModalOpen}
  //       />
  //     )
  //   });
  // } else if (searchTerm !== '') {
  //   productsList = products
  //   .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  //   .map((product) => {
  //     return (
  //       <ProductCard 
  //         key={product.id}
  //         id={product.id}
  //         name={product.name}
  //         description={product.description}
  //         image={product.image}
  //         active={product.active}
  //         promo={product.promo}
  //         rating={product.rating}
  //         handleModalOpen={handleModalOpen}
  //       />
  //     )
  //   });
  // } else {
  //   productsList = products.map((product) => {
  //     return (
  //       <ProductCard 
  //         key={product.id}
  //         id={product.id}
  //         name={product.name}
  //         description={product.description}
  //         image={product.image}
  //         active={product.active}
  //         promo={product.promo}
  //         rating={product.rating}
  //         handleModalOpen={handleModalOpen}
  //       />
  //     )
  //   });
  // }
  
  return (
    <>
      <Header />
      <StyledProductContainer>
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
        <Pagination setProducts={setProducts} />
      </StyledProductContainer>
      <ProductDetails setModalActive={setModalActive} modalActive={modalActive} name={modalName} />
    </>
  );
};
