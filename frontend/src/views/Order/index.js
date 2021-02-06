import React, { useState } from "react";
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Label,
  Button,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
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
  const [modal, setModal] = useState(false);

  function subtotal (price, cantidad) {
    setTotal(total+(price*cantidad))
  }

  const toggleModal = () => setModal(!modal);

  function renderProducts(products) {
    if (products){
      return (
        products.map((el, key) => {
          return (
            <Col key={key} className='mb-3'>
              {/* Render Bill Item */}
              <Row className='mx-0 justify-content-between'>
                <Label className='h5'>
                  {el.nombre}
                </Label>
                <Label className='h6'>
                  {el.precio * el.precio}
                </Label>
              </Row>
              <Row className='mx-0 justify-content-between'>
                <Label className='h6 mb-0'>
                  Cantidad: {el.precio}
                </Label>
                <Button onClick={() => toggleModal()} className='valorar-producto'>
                  Valorar
                </Button>
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
          {/* Valorar Modal */}
          <Modal
            isOpen={modal}
            toggle={toggleModal}
          >
            <ModalHeader className='d-flex justify-content-center'>
              <Col>
                <Row className='justify-content-center h4'>
                  <Label className='h4'>
                    Valorar Producto
                  </Label>
                </Row>
              </Col>
            </ModalHeader>
            <ModalBody className='d-flex justify-content-center'>
              <Col>
                <Row className='mx-0 mb-3 justify-content-between'>
                  <Label className='' for='cantidad'>
                    Puntuación (1-5)
                  </Label>
                  <Input
                    className='w-25'
                    type="number"
                    name="cantidad"
                    id="cantidad"
                  />
                </Row>
                <FormGroup>
                  <Label for="descripcion">
                    Comentario
                  </Label>
                  <Input
                    className='w-100'
                    type="textarea"
                    name="descripcion"
                    id="descripcion"
                  />
                </FormGroup>

              </Col>
            </ModalBody>
            <ModalFooter>
              <Button
               onClick={() => toggleModal()}
              >
                Aceptar
              </Button>
            </ModalFooter>
          </Modal>
        </Row>
     </Col>
  );
}

const mapStateToProps = state => {};

const mapDispatchToProps = {};


const connectedOrder = connect(mapStateToProps, mapDispatchToProps)(Order);
export { connectedOrder as Order };
