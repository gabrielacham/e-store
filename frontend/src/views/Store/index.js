import React, { useState,  useEffect } from "react";
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Label,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

const data = [
  {
    id: 1,
    nombre: 'Cachapas',
    precio: 100,
    descuento: 0.2
  },
  {
    id: 2,
    nombre: 'Vasos',
    precio: 20,
    descuento: 0.1
  },
  {
    id: 3,
    nombre: 'Agua',
    precio: 0,
    descuento: 0
  },
  {
    id: 4,
    nombre: 'Hojas',
    precio: 100,
    descuento: 0.3
  },
  {
    id: 5,
    nombre: 'Mantel',
    precio: 200,
    descuento: 0.15
  },
  {
    id: 1,
    nombre: 'Coca-Cola',
    precio: 50,
    descuento: 0.05
  },
  {
    id: 2,
    nombre: 'Oregano',
    precio: 5,
    descuento: 0.01
  },
  {
    id: 3,
    nombre: 'Servilletas',
    precio: 100,
    descuento: 0.1
  },
  {
    id: 4,
    nombre: 'Ventilador',
    precio: 300,
    descuento: 0.2
  },
]

export default function Store(props) {

  const [storeid, setStoreID] = useState(0);
  const [productid, setProductID] = useState(0);

  useEffect(() => {
    const newid = (new URL(window.location.href)).searchParams.get('store');
    const prevProductId = (new URL(window.location.href)).searchParams.get('product');
    setStoreID(newid);
    setProductID(prevProductId);
}, [setStoreID, setProductID]);

  var products = [];
  data.forEach((item, i) => {
    products.push(
      <ProductCard
        key={i}
        title={item.nombre}
        discount={item.descuento}
        price= {item.precio}
        calification= {item.id}
        id= {item.id}
       />
    )
  });

  return (
    <Col>
       {/* Header Row */}
       <Row className='mb-3'>
         {/* Return Link */}
         <Col sm='2'>
           <NavLink
            to={`/admin/productdetails?id=${productid}`}
            className="product-card-link btn btn-link"
           >
            Regresar
           </NavLink>
         </Col>

         {/* View Title */}
         <Col sm='8' className='d-flex justify-content-center'>
           <Label className='h2'>
             Tienda {storeid}
           </Label>
         </Col>

         {/* Buy Button */}
         <Col sm='2' className='d-flex justify-content-end'>
         </Col>
       </Row>

       <Row className='mx-0'>
         <Label className='h4'>
           Productos:
         </Label>
       </Row>

       {/* Products*/}
        <Row className='p-2'>
          {products}
        </Row>
     </Col>
  );
}


const mapStateToProps = state => {};

const mapDispatchToProps = {};


const connectedStore = connect(mapStateToProps, mapDispatchToProps)(Store);
export { connectedStore as Store };
