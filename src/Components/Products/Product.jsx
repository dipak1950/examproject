import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { addToCart, getproductAsync, getproductsAsync } from '../../Services/Action/AddtocartAction';
import { useEffect } from 'react';
import "./Product.css"
import { CurrencyRupee } from 'react-bootstrap-icons';

function Product() {

    const { products } = useSelector(state => state.cartReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addCart = (id) => {
        dispatch(addToCart(id))
    }

    useEffect(() => {
        dispatch(getproductsAsync())

    }, [])

    return (
        <div className="product">
            <Container>
                <h1>Products</h1>
                <Row>
                    {
                        products.map((product, id) => (
                            <Col key={id} xs={12} md={4}>
                                <Card>
                                    <div className="cardimg">
                                        <img src={product.img} alt="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.details}</Card.Text>
                                        <Card.Text><CurrencyRupee />{product.price}</Card.Text>
                                        <NavLink onClick={() => addCart(product.id)}>
                                            <Button variant="primary" >Add to Cart</Button>
                                        </NavLink>
                                        <Button variant="primary" className='ms-2' >View Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Product;