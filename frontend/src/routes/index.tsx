import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Catalog from '../pages/Catalog';
import Product from '../pages/Product';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Catalog} />
    <Route path="/product/:product+" component={Product} />
    <Route path="/product/" component={Product} />
  </Switch>
);

export default Routes;