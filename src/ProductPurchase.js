import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';

export const ProductPurchase = ({ price }) => (
  <section className="prodPurch">
    <div className="prodPurch__quantity">
      Quantity <img className="prodPurch__quantity__img" src={minus} alt="Decrease Quantity" /> 1 <img className="prodPurch__quantity__img" src={plus} alt="Increase Quantity" />
    </div>
    <div className="prodPurch__freq">
      One time purchase  <img className="prodPurch__freq__img" src={caret} alt="Select Frequency" />
    </div>
    <div className="prodPurch__price">{price}</div>
    <button className="prodPurch__btn" name="AddToBag">Add To Bag</button>
  </section>
);