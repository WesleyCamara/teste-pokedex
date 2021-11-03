import react from 'react';
import { link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/">Details</Link>
      <p>Esse é o header</p>
    </div>
  );
};

export default Header;
