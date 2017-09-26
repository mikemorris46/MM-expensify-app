import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h2>Oops (404) - this page doesn't exist.</h2>
    <Link to="/">Go to Home Page</Link>
  </div>
);

export default NotFoundPage;
