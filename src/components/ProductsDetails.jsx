import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductsDetails = () => {
  //const { id } = useParams();
  const location = useLocation();
  return (
    <div className="prodDetailContainer">
      <div className="imgContainer">
        <img alt="product" src={location.state.img} />
      </div>
      <div className="details">
        <h2>
          {location.state.pname} @ {location.state.price}
        </h2>
        <h3>{location.state.desc}</h3>
        <h4>Shipping:{location.state.shipping}</h4>
      </div>
    </div>
  );
};

export default ProductsDetails;
