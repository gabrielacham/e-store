import React, { useState } from "react";
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Form,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button
} from 'reactstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./styles.css";
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

const cart = [
  {
    cantidad: 1,
    nombre: 'Cachapas',
  },
  {
    cantidad: 2,
    nombre: 'Vasos',
  },
  {
    cantidad: 3,
    nombre: 'Agua',
  },
  {
    cantidad: 4,
    nombre: 'Hojas',
  },
  {
    cantidad: 5,
    nombre: 'Mantel',
  },
]

export default function Home(props) {

  const [cartModal, setCartModal] = useState(false);

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

  const toggleCartModal = () => setCartModal(!cartModal);

  function renderCart(cart) {
    if (cart) {
      return (
        cart.map((el, key) => {
          return (
            <Row key={key} className='justify-content-between mb-1'>
              <Col sm='6'>
                {el.nombre}
              </Col>
              <Col sm='6' className='justify-content-end'>
                <Row>
                  <Col className='align-self-center d-flex justify-content-end'>
                    <Label for="cantidad" className='mb-0'>
                      Cantidad:
                    </Label>
                  </Col>
                  <Col className='align-self-center pl-0'>
                    <Input
                      type="number"
                      name="cantidad"
                      id="cantidad"
                      disabled
                      defaultValue={el.cantidad}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })
      );
    }
    return;
  }

    return(
        <Form>
          <Col>
            {/* Cart Modal */}
            <Modal
              isOpen={cartModal}
              toggle={toggleCartModal}
            >
              <ModalHeader className='d-flex justify-content-center'>
                <Col>
                  <Row className='justify-content-center h4'>
                    <Label className='h4'>
                      Carrito de Compras
                    </Label>
                  </Row>
                </Col>
              </ModalHeader>
              <ModalBody className='d-flex justify-content-center'>
                <Col>
                  {renderCart(cart)}
                </Col>
              </ModalBody>
              <ModalFooter>
                <Button onClick={toggleCartModal}>
                  Comprar
                </Button>
              </ModalFooter>
            </Modal>

           {/* Header Row */}
           <Row className='mb-3'>
             <Col sm='2'>
               <Label className='h2'>
                 Home
               </Label>
             </Col>

             {/* View Title */}
             <Col sm='8' className='d-flex justify-content-center'>
               <Label className='h2'>
                 Input
               </Label>
             </Col>

             {/* Cart */}
             <Col sm='2' className='d-flex justify-content-end'>
               <ShoppingCartIcon
                 onClick={toggleCartModal}
                 className='home-cart-icon'
               />
             </Col>
           </Row>

           {/* Products*/}
            <Row className='p-2'>
              {products}
            </Row>
          </Col>
        </Form>
    );

}


const mapStateToProps = state => {};

const mapDispatchToProps = {};


const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export { connectedHome as Home };
