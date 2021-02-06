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
import StarIcon from '@material-ui/icons/Star';
import StoreIcon from '@material-ui/icons/Store';
import './styles.css';

const category =
  {
    categoria: 'Categoria 1',
    subcategoria: 'subcategoria 1'
  }

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

const comments = [
  {
    cliente: 'cliente 1',
    comentario: 'Super bueno'
  },
  {
    cliente: 'cliente 2',
    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    cliente: 'cliente 3',
    comentario: 'Super malo'
  },
  {
    cliente: 'cliente 4',
    comentario: 'Me encanta'
  },
  {
    cliente: 'cliente 5',
    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    cliente: 'cliente 1',
    comentario: 'estrellita donde estas quiero verte titilar'
  },
]

export default function ProductDetails(props) {

  const [id, setID] = useState(0);
  const [product, setProduct] = useState({});
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newid = (new URL(window.location.href)).searchParams.get('id');
    setID(newid);
    let product = data.find(el => el.id == newid)
    setProduct(product);
    var stars = [];
    for (var i = 0; i < product.id; i++) {
        stars.push(<StarIcon key={i} style={{ color: '#F5C116' }} />);
    };
    setStars(stars);
}, [setID, setStars]);

  function renderComments(comments) {
    if (comments){
      return (
        comments.map((el, key) => {
          return (
            <Card key={key} className='product-details-card product-details-comment-card mb-3'>
              <CardBody>
                <Col>
                  <Row className='mx-0'>
                    <Label className='h5'>{el.cliente}</Label>
                  </Row>
                  <Row className='mx-0'>
                    <Label className='h6'>{el.comentario}</Label>
                  </Row>
                </Col>
              </CardBody>
            </Card>
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
             href="/admin/productdetails"
             to="/admin/home"
             className="product-card-link btn btn-link"
            >
             Inicio
            </NavLink>
          </Col>

          {/* View Title */}
          <Col sm='8' className='d-flex justify-content-center'>
            <Label className='h2 text-white'>
              Detalles de Producto
            </Label>
          </Col>

          {/* Buy Button */}
          <Col sm='2' className='d-flex justify-content-end'>
            <Button className='h2'>
              Comprar
            </Button>
          </Col>
        </Row>

        {/* Card Row */}
        <Row>
          <Card className='product-details-card'>
            <CardBody>
              {/* Categories */}
              <Row className='mx-0 mb-2'>
                <Label>
                  {category.categoria} /
                  {category.subcategoria}
                </Label>
              </Row>

              {/* Title, Discount, Price, */}
              <Row className='mx-0 mb-2'>
                {/* Title */}
                <Col sm='10' className='mx-0 d-flex align-items-center'>
                  <Label className='h4 mb-0'>
                    {product.nombre}
                  </Label>
                </Col>

                {/* Price With Discount */}
                <Col sm='2' className='d-flex justify-content-end pr-0 align-items-center'>
                  <Row className='mx-0 justify-content-end'>
                    <Col className='d-flex justify-content-end pr-0 align-items-center'>
                      {product.descuento &&
                        <Label className="text-muted h5 mb-0 tachado">
                          {product.precio}$
                        </Label>
                      }
                    </Col>
                    <Col className='d-flex justify-content-end pr-0 align-items-center'>
                      <Label className="h5 mb-0">
                        {product.precio-(product.precio*product.descuento)}$
                      </Label>
                    </Col>
                  </Row>
                </Col>
              </Row>

              {/* Availability, Discount */}
              <Row className='mx-0 mb-2'>
                {/* Availability */}
                <Col sm='6' className='mx-0 d-flex align-items-center'>
                  <Label className='h6 mb-0'>
                    Disponibles:{' '}{id}
                  </Label>
                </Col>

                {/* Discount */}
                <Col sm='6' className='d-flex align-items-center pr-0 justify-content-end'>
                  {product.descuento &&
                    <Label className="h6 mb-0">
                      Descuento:{' '}{product.descuento*100}%
                    </Label>
                  }
                </Col>
              </Row>

              {/* Calification */}
              <Row className='mx-0 mb-2'>
                <Col className='d-flex align-items-center'>
                  <Label className='h6 mb-0'>
                    Calificacion:{' '}
                  </Label>
                  {stars}
                </Col>
              </Row>

              {/* Store */}
              <Row className='mx-0 mb-2'>
                <Col className='d-flex align-items-center'>
                  <StoreIcon style={{ color: '#5EB837', width: '1.5em', height: '1.5em' }} />
                  <NavLink
                    href="/admin/productdetails"
                    to={`/admin/store?store=${id}&product=${id}`}
                      className="product-card-link h-3 btn btn-link"
                    >
                      Tienda 1
                    </NavLink>
                </Col>
              </Row>

              {/* Comments */}
              <Row className='mx-0 mb-2'>
                <Col>
                  <Label className='h5 mb-3'>
                    Comentarios:
                  </Label>
                  {renderComments(comments)}
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


const connectedProductDetails = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
export { connectedProductDetails as ProductDetails };
