import React from 'react';

// import caret from './images/caret.png';

export const ProductDesc = ({
  category,
  name,
  description,
  // rating,
  features,
  shade
}) => (
  <section className="prodDesc">
    <h4 className="prodDesc__cat">{category}</h4>
    <h2 className="prodDesc__name">{name}</h2>
    <p className="prodDesc__desc">{description}</p>
    <figure className="prodDesc__rating">
      {/* <img className="prodDesc__rating__stars" src={rating} alt="Product Rating" />
      <img className="prodDesc__rating__caret" src={caret} alt="View All Ratings" /> */}
      <span className="prodDesc__rating_stars">&#9733;&#9733;&#9733;&#9733;<span className="prodDesc__rating_stars-lt">&#9733;</span></span> (102) &#9662;
    </figure>

    <section className="prodDesc__prodDetail">
      <div className="prodDesc__detail">
        <h4 className="prodDesc__detail-hedLf">Benefits</h4>
        <p className="prodDesc__detail-featLf">{features.benefits}</p>
      </div>
      <div className="prodDesc__detail">
        <h4 className="prodDesc__detail-hedRt">Finish</h4>
        <p className="prodDesc__detail-featRt">{features.finish}</p>
      </div>
      <div className="prodDesc__detail">
        <h4 className="prodDesc__detail-hedLf">Coverage</h4>
        <p className="prodDesc__detail-featLf">{features.coverage}</p>
      </div>
      <div className="prodDesc__detail">
        <h4 className="prodDesc__detail-hedRt">Key ingredients</h4>
        <p className="prodDesc__detail-featRt">{features.keyIngredients} &nbsp;<a className="prodDesc__detail-link" href="http://www.clinique.com">More</a></p>
      </div>
    </section>

    <section className="prodDesc__shade">
      <span>{shade.name}</span>
      <div className="prodDesc__shade-color" style={{ background: shade.color }}></div>
    </section>
  </section>
);
