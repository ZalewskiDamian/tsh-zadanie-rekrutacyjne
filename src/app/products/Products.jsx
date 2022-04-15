import { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledProductsGrid, StyledProductContainer } from './Products.styles';
import { Header, ProductCard } from '../../components';

import { AppRoute } from '../../routing/AppRoute.enum';


export const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios
    .get('https://join-tsh-api-staging.herokuapp.com/products', {
      headers: {accept: 'application/json'}
    })
    .then(res => setProducts(res.data.items))
    .catch((err) => {
      console.log("err", err);
    });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const productsList = products.map((product) => {
    return (
      <ProductCard 
        key={product.id}
        name={product.name}
        description={product.description}
        image={product.image}
        active={product.active}
        promo={product.promo}
        rating={product.rating}
      />
    )
  });
  
  return (
    <>
      <Header />
      <StyledProductContainer>
        <StyledProductsGrid>
          {productsList}
        </StyledProductsGrid>
      </StyledProductContainer>
    </>
  );
};
