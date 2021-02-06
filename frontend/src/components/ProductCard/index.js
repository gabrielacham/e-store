import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from 'reactstrap';
import PropTypes from "prop-types";
import StarIcon from '@material-ui/icons/Star';
import "./styles.css";


export default function ProductCard(props) {
  const {
    title,
    discount,
    price,
    calification,
    id
  } = props;
  var stars = [];
  for (var i = 0; i < calification; i++) {
      stars.push(<StarIcon key={i} style={{ color: '#F5C116' }} />);
  };
  const handleOnClick = () => {
  }
  return (
    <Col sm='4' md='3' className='pb-3'>
      <Card className='product-card-card' onClick={handleOnClick()}>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          {renderSubtitle(price, discount)}
          {stars}
          <Row className='justify-content-end'>
            <NavLink
              href="/admin/productdetails"
              to={`/admin/productdetails?id=${id}`}
              className="product-card-link btn btn-link"
              >
                Detalles
              </NavLink>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  discount: PropTypes.number,
  price: PropTypes.number,
  calification: PropTypes.number,
  id: PropTypes.number,
};

function renderSubtitle( price, discount ){
  return (
    <Row className='d-flex justify-content-between'>
      <Col sm='6' className='align-self-center'>
        {discount &&
          <CardSubtitle
            tag="h6"
            className="text-muted tachado"
          >
            {price}$
          </CardSubtitle>
        }
      </Col>
      <Col sm='6' className='d-flex flex-column align-items-end'>
        <CardText>{price-(price*discount)}$</CardText>
      </Col>
    </Row>
  );
}
