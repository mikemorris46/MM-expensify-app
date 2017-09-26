import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt, note }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    {note ? <p>{amount} - {createdAt} - {note}</p> : <p>{amount} - {createdAt}</p>} 
  </div>
);

export default ExpenseListItem;
