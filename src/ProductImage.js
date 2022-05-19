import React from 'react';

export const ProductImage = ({ image }) => (
  <figure className="prodImg">
    <img src={image} alt="Product" className="prodImg__img" />
  </figure>
);