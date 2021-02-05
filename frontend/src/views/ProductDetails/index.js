import React from "react";
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'reactstrap';


export default function ProductDetails(props) {
  console.log('props: ', props.location.aboutProps);
  return (
    <div>
       <Row>
         <Col>
            <label>Este es el Detalles de Producto</label>
            <NavLink href="/admin/productdetails" to="/admin/home" className="product-card-link btn btn-link">Home</NavLink>
         </Col>
       </Row>
     </div>
  );
}
