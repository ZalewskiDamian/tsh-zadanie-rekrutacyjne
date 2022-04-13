import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header } from '../../components';

import { AppRoute } from '../../routing/AppRoute.enum';

export const Products = () => {
  return (
    <>
      <Header />
      <h2>Products page</h2>
      <Button>Log in</Button>
      <Button disabled>Log in</Button>
      <Link to={AppRoute.login}> Login </Link>
    </>
  );
};
