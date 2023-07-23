import { NavLink, useRoutes } from 'react-router-dom';
import navigation from './utils/RoutesPaths';
import './App.css';

function App() {
  const routePath = useRoutes(navigation);

  return (
    <div className="App">
      <ul>
        <li>
          <NavLink style={linkDeco} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={linkDeco} to="/Products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink style={linkDeco} to="/about">
            about
          </NavLink>
        </li>
      </ul>
      <hr />
      {routePath}
    </div>
  );
}

export default App;

const linkDeco = {
  textDecoration: 'none',
};
