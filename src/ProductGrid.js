import React from 'react';
import { ProductImage } from './ProductImage';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
<section className="prodGrid">
    <h2 className="prodGrid__heading">{heading}</h2>
    <div className="prodGrid__body">
      <div className="prodGrid__item">
        <div className="prodGrid__item-image">
          <ProductImage image={p1Img} />
        </div>
        <div className="prodGrid__item-detail">
          <div className="prodGrid__item-title">{p1Name}</div>
          <div className="prodGrid__item-price">{p1Price}</div>
        </div>
        <button className="prodGrid__item-button">{cta1}</button>
      </div>
      <div className="prodGrid__item">
        <div className="prodGrid__item-image">
          <ProductImage image={p2Img} />
        </div>
        <div className="prodGrid__item-detail">
          <div className="prodGrid__item-title">{p2Name}</div>
          <div className="prodGrid__item-price">{p2Price}</div>
        </div>
        <button className="prodGrid__item-button">{cta1}</button>
      </div>
      <div className="prodGrid__item">
        <div className="prodGrid__item-image">
          <ProductImage image={p3Img} />
        </div>
        <div className="prodGrid__item-detail">
          <div className="prodGrid__item-title">{p3Name}</div>
          <div className="prodGrid__item-price">{p3Price}</div>
        </div>
        <button className="prodGrid__item-button">{cta1}</button>
      </div>
      <div className="prodGrid__item">
        <div className="prodGrid__item-image">
          <ProductImage image={p4Img} />
        </div>
        <div className="prodGrid__item-detail">
          <div className="prodGrid__item-title">{p4Name}</div>
          <div className="prodGrid__item-price">{p4Price}</div>
        </div>
        <button className="prodGrid__item-button">{cta1}</button>
      </div>
    </div>
  </section>
