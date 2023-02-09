import React from 'react';
import { useParams } from 'react-router';
import "./productDescription.scss";

function ProductDescription(props) {
    const {id} = useParams()
  return (
    <div>
      {id}
    </div>
  );
}

export default ProductDescription;