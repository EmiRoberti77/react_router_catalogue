import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const productList = [
  {
    id: 1,
    pname: 'Apples',
    desc: 'Red Juicy Apples',
    price: '$50',
    shipping: '$3',
    img: 'https://www.freepnglogos.com/uploads/apple-png/apple-icon-paradise-fruits-iconset-artbees-0.png',
  },
  {
    id: 2,
    pname: 'Bananas',
    desc: 'Sweetest Organic Bananas',
    price: '$40',
    shipping: '$10',
    img: 'https://www.freepnglogos.com/uploads/banana-png/banana-maui-wowi-hawaiian-coffees-smoothies-23.png',
  },
  {
    id: 3,
    pname: 'Grapes',
    desc: 'Jumbo Grapes',
    price: '$30',
    shipping: '$5',
    img: 'https://www.freepnglogos.com/uploads/grapes-png/grapes-grape-red-transparent-png-stickpng-5.png',
  },
  {
    id: 4,
    pname: 'Oranges',
    desc: 'Packed With Vitamin C',
    price: '$32',
    shipping: '$0',
    img: 'https://www.freepnglogos.com/uploads/orange-png/fruit-orange-png-image-pixabay-22.png',
  },
];

const Products = () => {
  const [products, setProducts] = useState(productList);
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li className="card">
            <Link
              state={product}
              style={linkDeco}
              to={`/products/${product.id}`}
            >
              <img alt={product.pname} src={product.img} />
              <div className="text">
                <h3>{product.pname}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet context={productList} />
    </div>
  );
};

export default Products;

const linkDeco = {
  textDecoration: 'none',
};
