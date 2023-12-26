import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function card({nombre, imagen, id}) {
  return (
    <div className='item-container'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} alt={nombre} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Link to={`/product/${id}`}>
          <Button className='detail-button' variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default card;