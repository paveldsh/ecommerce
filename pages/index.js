import React from 'react'

import { client } from '../lib/client';
import { Product, HeroBanner } from '../components';

const Home = ({products}) => (
  <div>
    <HeroBanner/>

    <div className='products-heading'>
      <h2>Наши товары</h2>
    </div>

    <div className='products-container'> 
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Home;