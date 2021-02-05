import React from "react";
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Form,
  Label,
 } from 'reactstrap';
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

export default function Home(props) {
    var products = [];
    data.forEach((item, i) => {
      products.push(
        <ProductCard
          key={i}
          title={item.nombre}
          discount={item.descuento}
          price= {item.precio}
          value= {item.id}
          id= {item.id}
         />
      )
    });

    return(
        <Form>
          <Col>
            <Label>Home</Label>
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
