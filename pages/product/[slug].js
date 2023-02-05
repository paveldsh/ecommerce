import React, { useState } from 'react';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index] = useState(0);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          { name === "Икра Кеты" 
          ? <p>Цена указана за 250 грамм. <p className="price">{price} ₽</p></p> 
          : <div>
              <h4>Детали: </h4>
              <p>{details}</p>
              <p>Цена за килограмм: 
                <p className="price">{price} ₽</p>
              </p>
            </div> 
          }
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>Наши товары</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product }
  }
}

export default ProductDetails;