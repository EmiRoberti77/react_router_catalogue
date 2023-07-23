import Home from '../components/Home';
import About from '../components/About';
import Products from '../components/Products';
import ProductsDetails from '../components/ProductsDetails';
import NotFound from '../components/NotFound';

const navigation = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
        children: [
          {
            path: ':id',
            element: <ProductsDetails />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default navigation;
