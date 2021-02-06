import React, { useState,  useEffect } from "react";
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Label,
  Button,
  Card,
  CardBody,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './styles.css';

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

export default function Order(props) {

  const [total, setTotal] = useState(0);

  function subtotal (price, cantidad) {
    setTotal(total+(price*cantidad))
  }


  function renderProducts(products) {
    if (products){
      return (
        products.map((el, key) => {
          return (
            <Col key={key}>
              <Row className='mx-0 justify-content-between'>
                <Label className='h5'>
                  {el.nombre}
                </Label>
                <Label className='h6'>
                  {el.precio * el.precio}
                </Label>
              </Row>
              <Row className='mx-0'>
                <Label className='h6'>Cantidad: {el.precio}</Label>
              </Row>
            </Col>
          );
        })
      );
    }
    return;
  }

  return (
     <Col>
        {/* Header Row */}
        <Row className='mb-3'>
          {/* Return Link */}
          <Col sm='2'>
            <NavLink
             to="/admin/home"
             className="product-card-link btn btn-link"
            >
             Inicio
            </NavLink>
          </Col>
        </Row>

        {/* Card Row */}
        <Row>
          <Card className='product-details-card'>
            <CardBody>
              {/* Bill, Date */}
              <Row className='mx-0 justify-content-between mb-2'>
                {/* Bill number*/}
                <Col sm='10' className='mx-0 d-flex align-items-center'>
                  <Label className='h3 mb-0'>
                    Factura 1
                  </Label>
                </Col>

                {/* Date */}
                <Col sm='2' className='mx-0 d-flex align-items-center'>
                  <Label className='h5 mb-0'>
                    6/02/2021
                  </Label>
                </Col>
              </Row>

              {/* Client */}
              <Row className='mx-0 mb-2'>
                <Col sm='6' className='mx-0 d-flex align-items-center'>
                  <Label className='h5 mb-0'>
                    Cliente
                  </Label>
                </Col>
              </Row>

              {/* Client */}
              <Row className='mx-0 mb-2'>
                <Col sm='6' className='mx-0 d-flex align-items-center'>
                  <Label className='h6 mb-3'>
                    Direccion
                  </Label>
                </Col>
              </Row>

              {/* Product List */}
              <Row className='mx-0 mb-2'>
                <Col>
                  <Label className='h5 mb-3'>
                    Productos:
                  </Label>
                  <Card className='product-details-card order-product-card mb-3'>
                    <CardBody>
                      {renderProducts(data)}
                      <Col>
                        <Row className='mx-0 justify-content-between'>
                          <Label className='h4'> Total: </Label>
                          <Label className='h6'>{total}</Label>
                        </Row>
                      </Col>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Row>
     </Col>
  );
}

const mapStateToProps = state => {};

const mapDispatchToProps = {};


const connectedOrder = connect(mapStateToProps, mapDispatchToProps)(Order);
export { connectedOrder as Order };
