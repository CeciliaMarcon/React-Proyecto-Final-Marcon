import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ({product}) => (
    <Card style={{ width: '35rem', height: '15rem' }}>
      <Card.Img variant="top" src={product.imageId}  />
      <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>Stock {product.stock}</Card.Text>
        <Card.Text>Category {product.categoryId}</Card.Text>
        <Link to ={`/item/${product.id}`}>
          <Button variant="primary" style={{ width: '15rem' }} >Comprar</Button>
        </Link>
      </Card.Body>
    </Card>
)
    
